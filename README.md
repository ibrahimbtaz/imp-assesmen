# Assessment Project

## Laravel

### Posts Resource

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | Get paginated list of posts |
| POST | `/api/posts` | Create a new post |
| GET | `/api/posts/{id}` | Get a specific post |
| PUT/PATCH | `/api/posts/{id}` | Update a specific post |
| DELETE | `/api/posts/{id}` | Delete a specific post |

## Request/Response Examples


### Create a New Post
```http
POST /api/posts
Content-Type: application/json

{
    "title": "New Post Title",
    "content": "This is the content of the new post..."
}
```

### Get Single Post
```http
GET /api/posts/1
Accept: application/json
```


### Update a Post
```http
PUT /api/posts/1
Content-Type: application/json

{
    "title": "Updated Post Title",
    "content": "This is the updated content..."
}
```

### Delete a Post
```http
DELETE /api/posts/1
```