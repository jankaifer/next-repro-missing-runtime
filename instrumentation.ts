export function register() {
  globalThis.message = `Message from instrumentation.ts: ${JSON.stringify({
    next_runtime: process.env.NEXT_RUNTIME,
  })}`;
}
