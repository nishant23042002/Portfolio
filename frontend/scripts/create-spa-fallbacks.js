const fs = require("fs");
const path = require("path");

const buildDir = path.resolve(__dirname, "..", "build");
const indexPath = path.join(buildDir, "index.html");
const adminDir = path.join(buildDir, "admin");

fs.mkdirSync(adminDir, { recursive: true });
fs.copyFileSync(indexPath, path.join(adminDir, "index.html"));
