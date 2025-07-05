'use client';

import Link from 'next/link';
import { use, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function EditPostPage({ params }) {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const { id } = use(params);

	useEffect(() => {
		const fetchPost = async () => {
			const res = await fetch(`http://127.0.0.1:8000/api/posts/${id}`);
			const post = await res.json();
			setTitle(post.title);
			setContent(post.content);
		};
		fetchPost();
	}, [id]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		await fetch(`http://127.0.0.1:8000/api/posts/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title, content }),
		});

		setIsLoading(false);
		router.push(`/posts/${id}`);
		router.refresh();
	};

	return (
		<main className="container mx-auto p-8">
			<h1 className="text-4xl font-bold mb-6">Edit Post</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-control mb-4">
					<label className="label">
						<span className="label-text">Title</span>
					</label>
					<input
						type="text"
						className="input input-bordered w-full"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="form-control mb-4">
					<label className="label">
						<span className="label-text">Content</span>
					</label>
					<textarea
						className="textarea textarea-bordered h-32 w-full"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					></textarea>
				</div>
				<button type="submit" className="btn btn-primary" disabled={isLoading}>
					{isLoading ? 'Updating...' : 'Update Post'}
				</button>
				<div className="mt-8">
					<Link href="/posts" className="btn btn-outline">
						← Back to All Posts
					</Link>
				</div>
			</form>
		</main>
	);
}