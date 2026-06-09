import MainLayout from '@/layouts/MainLayout';
import PostCard from '@/components/PostCard';

export default function Home() {
  return (
    <MainLayout>
      <div className="grid gap-4">
        <PostCard title="First Post" body="This is your first post." />
        <PostCard title="Second Post" body="This is another example." />
      </div>
    </MainLayout>
  );
}