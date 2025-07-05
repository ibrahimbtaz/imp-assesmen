'use client';

import { useRouter } from 'next/navigation';

export default function DeleteButton({ postId }) {
	const router = useRouter();

	const handleDelete = async () => {
		if (confirm('Are you sure you want to delete this post?')) {
			await fetch(`http://127.0.0.1:8000/api/posts/${postId}`, {
				method: 'DELETE',
			});
			router.push('/posts');
			router.refresh();
		}
	};

	return (
		<button
			className="btn btn-sm btn-error"
			onClick={handleDelete}
		>
			Delete
		</button>
	);
}