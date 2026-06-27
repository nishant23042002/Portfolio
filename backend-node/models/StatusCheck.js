const mongoose = require("mongoose");
const { randomUUID } = require("crypto");

const StatusCheckSchema = new mongoose.Schema(
  {
    _id: { type: String, default: () => randomUUID() },
    client_name: { type: String, required: true, trim: true, maxlength: 200 },
  },
  {
    timestamps: { createdAt: "timestamp", updatedAt: false },
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

module.exports = mongoose.model("StatusCheck", StatusCheckSchema);
