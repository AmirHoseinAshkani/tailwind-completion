#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
try {
  console.log("Step 1: Initializing npm project...");
  execSync("npm init -y", { stdio: "inherit" });

  console.log("Step 2: Installing Tailwind CSS...");
  execSync("npm install -D tailwindcss", { stdio: "inherit" });

  console.log("Step 3: Initializing Tailwind CSS configuration...");
  execSync("npx tailwindcss init", { stdio: "inherit" });

  console.log("Step 4: Creating 'Core' directory...");
  const coreDir = path.join(process.cwd(), "Core");
  if (!fs.existsSync(coreDir)) {
    fs.mkdirSync(coreDir);
    console.log("Directory 'Core' created.");
  } else {
    console.log("Directory 'Core' already exists.");
  }

  console.log("Step 5: Creating 'Style.css' file...");
  const styleFilePath = path.join(coreDir, "Style.css");
  if (!fs.existsSync(styleFilePath)) {
    fs.writeFileSync(
      styleFilePath,
      "@tailwind base;\n@tailwind components;\n@tailwind utilities;"
    );
    console.log("'Style.css' file created with Tailwind content.");
  } else {
    console.log("'Style.css' file already exists.");
  }

  console.log("✅ All steps completed successfully!");
} catch (error) {
  console.error("❌ An error occurred during the setup process:", error.message);
  process.exit(1);
}
