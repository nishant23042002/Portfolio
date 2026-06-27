const mongoose = require("mongoose");
const { randomUUID } = require("crypto");

const ContactSchema = new mongoose.Schema(
  {
    _id: { type: String, default: () => randomUUID() },
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
    subject: { type: String, trim: true, maxlength: 200, default: null },
    message: { type: String, required: true, trim: true, maxlength: 4000 },
    budget: { type: String, trim: true, maxlength: 80, default: null },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: false },
    versionKey: false,
    _id: false,
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: (_doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model("Contact", ContactSchema);
