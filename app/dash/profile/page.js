import { Model } from 'mongoose';
import { getServerSession } from 'next-auth';
import findAndSerializeDoc from '@/lib/serverUtils';
import Profile from '@/models/Profile';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/lib/dbConnect';

async function Page() {
  const session = await getServerSession(authOptions);
  const query = { userId: session.user.id };

  await dbConnect();
  const profile = await findAndSerializeDoc(Profile, Model.findOneAndUpdate, query, {
    args: [{}, { new: true, upsert: true, timestamps: false }],
  });

  return (
    <div>
      <h1 className="text-2xl">Dashboard</h1>
      <p>Dashboard content</p>
      <p>Profile from MongoDB (Server Side Rendered)</p>
      <pre className="text-wrap">{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
}

export default Page;
