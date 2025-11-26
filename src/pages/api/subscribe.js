import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const filePath = path.join(process.cwd(), "emails.json");

  let existing = [];
  if (fs.existsSync(filePath)) {
    existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }

  existing.push({ email, date: new Date() });

  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

  return res.status(200).json({ message: "Email Noted! ..We Will Reach You Shortly" });
}
