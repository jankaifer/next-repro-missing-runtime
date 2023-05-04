import * as process from "process";

export function register() {
  globalThis.message = `Message from instrumentation.ts: ${JSON.stringify({
    next_runtime: process.env.NEXT_RUNTIME,
  })}`;
  console.log("running instrumentation from", process.env.NEXT_RUNTIME);
}
