const express = require("express");
const { body, validationResult } = require("express-validator");
const Contact = require("../models/Contact");
const { sendContactNotification } = require("../lib/mailer");

const router = express.Router();
const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

function requireAdmin(req, res, next) {
  if (!ADMIN_TOKEN) {
    return res.status(503).json({
      detail: "Admin inbox is not configured. Set ADMIN_TOKEN on the backend.",
    });
  }

  const token = req.get("x-admin-token") || "";
  if (token !== ADMIN_TOKEN) {
    return res.status(401).json({ detail: "Unauthorized" });
  }

  next();
}

const validators = [
  body("name").isString().trim().isLength({ min: 1, max: 120 }).withMessage("name is required"),
  body("email").isEmail().withMessage("valid email is required").normalizeEmail(),
  body("subject").optional({ nullable: true }).isString().isLength({ max: 200 }),
  body("message").isString().trim().isLength({ min: 1, max: 4000 }).withMessage("message is required"),
  body("budget").optional({ nullable: true }).isString().isLength({ max: 80 }),
];

router.post("/", validators, async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ detail: errors.array() });
    }
    const doc = await Contact.create({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject || null,
      message: req.body.message,
      budget: req.body.budget || null,
    });
    let email = { sent: false };
    try {
      email = await sendContactNotification(doc);
    } catch (mailErr) {
      console.error("Contact notification email failed:", mailErr.message);
      email = { sent: false, reason: "send_failed" };
    }
    res.status(200).json({ ...doc.toJSON(), email });
  } catch (err) {
    next(err);
  }
});

router.get("/", requireAdmin, async (_req, res, next) => {
  try {
    const rows = await Contact.find().sort({ created_at: -1 }).limit(500);
    res.json(rows.map((r) => r.toJSON()));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
