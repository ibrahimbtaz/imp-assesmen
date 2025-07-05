import Link from 'next/link';
import DeleteButton from '@/components/DeleteButton';

async function getPost(id) {
	const res = await fetch(`http://127.0.0.1:8000/api/posts/${id}`, {
		cache: 'no-store',
	});
	if (!res.ok) {
		return null;
	}
	return res.json();
}

export default async function PostDetailPage({ params }) {
	const post = await getPost(params.id);

	if (!post) {
		return <div>Post not found!</div>;
	}

	return (
		<main className="container mx-auto p-8">
			<article className="prose lg:prose-xl">
				<h1>{post.title}</h1>
				<p>{post.content}</p>
			</article>

			<div className="mt-8 flex gap-4">
				<Link href={`/posts/${post.id}/edit`} className="btn btn-sm btn-warning">
					Edit Post
				</Link>
				<DeleteButton postId={post.id} />
			</div>

			<div className="mt-8">
				<Link href="/posts" className="btn btn-outline">
					← Back to All Posts
				</Link>
			</div>
		</main>
	);
}