#!/usr/bin/env node

import { execSync } from "child_process";

function injectEnvVariables(cmd: string) {
  const env = { ...process.env };
  Object.keys(env).forEach((key) => {
    const val = env[key];
    if (val) {
      const regex = new RegExp(`%${key}%`, "g");
      cmd = cmd.replace(regex, val);
    }
  });
  return cmd;
}

const args = process.argv.slice(2);

const cmdWithEnv = injectEnvVariables(args.join(" "));

execSync(cmdWithEnv, { stdio: "inherit" });
