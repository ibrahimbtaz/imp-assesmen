import Link from "next/link";
import DeleteButton from '@/components/DeleteButton';


async function getPosts(page = 1) {
	const res = await fetch(`http://127.0.0.1:8000/api/posts?page=${page}`, {
		cache:  'no-store'
	});

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function PostsPage({ searchParams }) {
	const currentPage = Number(searchParams?.page) || 1;
	const postsData = await getPosts(currentPage);
	const posts = postsData.data || [];

	return (
		<main>
			<div className="p-8">
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-3xl font-bold">Semua Posts</h1>
					<Link href="/posts/create" className="btn btn-primary">Buat Post Baru</Link>
				</div>

				<div className="overflow-x-auto">
					<table className="table w-full">
						<thead>
							<tr>
								<th>ID</th>
								<th>Title</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{posts.map((post) => (
								<tr key={post.id}>
									<th>{post.id}</th>
									<td>{post.title}</td>
									<td className="flex gap-2">
										<Link href={`/posts/${post.id}`} className="btn btn-sm btn-info">View</Link>
										<Link href={`/posts/${post.id}/edit`} className="btn btn-sm btn-warning">Edit</Link>
										<DeleteButton postId={post.id}/>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<div className="flex justify-center mt-6">
				<div className="join">
					{postsData.prev_page_url && (
						<Link
							href={`/posts?page=${currentPage - 1}`}
							className="join-item btn"
						>
							«
						</Link>
					)}

					{Array.from({ length: postsData.last_page }, (_, i) => i + 1).map((pageNum) => (
						<Link
							key={pageNum}
							href={`/posts?page=${pageNum}`}
							className={`join-item btn ${currentPage === pageNum ? 'btn-active' : ''}`}
						>
							{pageNum}
						</Link>
					))}

					{postsData.next_page_url && (
						<Link
							href={`/posts?page=${currentPage + 1}`}
							className="join-item btn"
						>
							»
						</Link>
					)}
				</div>
			</div>
		</main>	
  );
}