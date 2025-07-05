<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Post::latest()->paginate(5);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
				$request->validate([
					'title' => 'required|string|max:255',
					'content' => 'required|string',
				]);
				$post = Post::create($request->all());
				return respone()->json($post, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return $post;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $request->validate([
						'title' => 'required|string|max:255',
						'content' => 'required|string',
				]);
				$post->update($request->all());
				return response()->json($post, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();
				return respone()->json(null, 204);
    }
}
