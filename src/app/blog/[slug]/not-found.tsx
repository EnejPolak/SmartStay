import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
      <p className="text-gray-600 mb-8">
        The blog post you are looking for does not exist or has been removed.
      </p>
      <Link
        href="/blog"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        ← Back to Blog
      </Link>
    </div>
  );
}

