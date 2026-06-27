const express = require("express");
const router = express.Router();

router.get("/", (_req, res) => {
  res.json({
    status: "available",
    label: "Available for projects",
    next_slot: "Jan 2026",
    timezone: "GMT+5:30 (IST)",
    updated_at: new Date().toISOString(),
  });
});

module.exports = router;
