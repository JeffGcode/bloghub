"use client";

interface PostCardProps {
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
  return (
    <div className="p-4 border rounded-xl shadow-md bg-white dark:bg-gray-800 transition">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300">{body}</p>
    </div>
  );
};

export default PostCard;