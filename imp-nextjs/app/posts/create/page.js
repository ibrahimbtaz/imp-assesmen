'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';



export default function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('http://127.0.0.1:8000/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body: content }),
    });

    router.push('/posts');
    router.refresh();
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Buat Post Baru</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Content</span>
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="textarea textarea-bordered w-full h-32"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
			<div className="mt-8">
				<Link href="/posts" className="btn btn-outline">
					← Back to All Posts
				</Link>
			</div>
    </div>
  );
}