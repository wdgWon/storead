export async function delay() {
  await new Promise((resolver) => setTimeout(resolver, 2000));
  return "msg loaded";
}

export default async function Home() {
  const msg = await delay();
  return <div className="h-8">{msg}</div>;
}
