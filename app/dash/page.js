import Link from 'next/link';

function Page() {
  return (
    <div>
      <h1 className="text-2xl">Dashboard</h1>
      <p>Navigation!</p>
      <p>See profile or open blog</p>
      <div className="flex w-full justify-between">
        <Link href="/dash/profile">Profile</Link>
        <Link href="/dash/blog">Blog</Link>
      </div>
    </div>
  );
}

export default Page;
