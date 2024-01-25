import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Hello from Niko 😀</h1>
      <Link href="/cities">Go to cities</Link>
    </div>
  );
}
