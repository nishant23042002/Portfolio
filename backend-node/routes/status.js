const express = require("express");
const { body, validationResult } = require("express-validator");
const StatusCheck = require("../models/StatusCheck");

const router = express.Router();

router.post(
  "/",
  [body("client_name").isString().trim().isLength({ min: 1, max: 200 })],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ detail: errors.array() });
      }
      const doc = await StatusCheck.create({ client_name: req.body.client_name });
      res.json(doc.toJSON());
    } catch (err) {
      next(err);
    }
  }
);

router.get("/", async (_req, res, next) => {
  try {
    const rows = await StatusCheck.find().limit(1000);
    res.json(rows.map((r) => r.toJSON()));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
