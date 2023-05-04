/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return <div>{JSON.stringify({next_runtime: process.env.NEXT_RUNTIME})}</div>
}
