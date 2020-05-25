const fs = require("fs");
const path = require("path");

const DIR = path.join(process.cwd(), "./posts");

export default files = fs.readdirSync(DIR).filter((file) => file.endsWith(".md"));

const readFile = files.map((file) => {
  const name = path.join(DIR, file);
  return (contents = fs.readFileSync(name, "utf8"));
});

