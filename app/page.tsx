export const revalidate = 0;

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return <div>global message:{globalThis.message}</div>;
}
