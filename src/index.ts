#!/usr/bin/env node

import { spawn } from "child_process";

function injectEnvVariables(args: string[]) {
  const env = { ...process.env };
  return args.map((arg) => {
    Object.keys(env).forEach((key) => {
      const regex = new RegExp(`%${key}%`, "ig");
      arg = arg.replace(regex, process.env[key]!);
    });
    return arg;
  });
}

const cmd = process.argv.slice(2);

const cmdWithEnv = injectEnvVariables(cmd);

const proc = spawn(cmdWithEnv[0], cmdWithEnv.slice(1), { stdio: "inherit" });

proc.on("close", (code) => {
  process.exit(code ?? 0);
});
