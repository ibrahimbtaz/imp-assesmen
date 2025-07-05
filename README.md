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
## Next.js

Next.js + Tailwind CSS + DaisyUI


### Project Structure
```
imp-nextjs/
├── app/
│   ├── posts/
│   │   ├── page.js          # Posts listing with pagination
│   │   ├── create/
│   │   │   └── page.js      # Create new post form
│   │   ├── [id]/
│   │   │   ├── page.js      # View single post
│   │   │   └── edit/
│   │   │       └── page.js  # Edit post form
│   ├── layout.js            # Root layout
│   └── page.js              # Home page
├── components/
│   └── DeleteButton.js      # Delete post component
└── package.json
```

### API Integration

#### Fetch Implementation
```javascript
// Get posts with pagination
async function getPosts(page = 1) {
    const res = await fetch(`http://127.0.0.1:8000/api/posts?page=${page}`, {
        cache: 'no-store'
    });
    return res.json();
}

// Create new post
async function createPost(data) {
    const res = await fetch(`http://127.0.0.1:8000/api/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
}

// Edit Post
await fetch(`http://127.0.0.1:8000/api/posts/${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content }),
});
```



### Components

#### DeleteButton Component
```javascript
'use client';
import { useState } from 'react';

export default function DeleteButton({ postId }) {
    const [isDeleting, setIsDeleting] = useState(false);
    
    const handleDelete = async () => {
        if (confirm('Are you sure?')) {
            setIsDeleting(true);
        }
    };
    
    return (
        <button 
            onClick={handleDelete}
            disabled={isDeleting}
            className="btn btn-sm btn-error"
        >
            {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
    );
}
```


---

## Django

### API Endpoints

#### Authentication & User Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup/` | Register new user |
| POST | `/api/auth/signin/` | Signin user |
| GET | `/api/auth/profile/` | Get current user profile | 
| PUT/PATCH | `/api/auth/profile/` | Update user profile |
| DELETE | `/api/auth/profile/` | Delete user account |

### Request/Response Examples

#### Register New User
```http
POST /api/auth/signup/
Content-Type: application/json

{
    "username": "testuser",
    "email": "test@test.com",
    "password": "strongpassword123"
}
```
#### Signin User to Get Token
```http
POST /api/auth/signin/
Content-Type: application/json

{
    "username": "testuser",
    "password": "strongpassword123"
}
```
#### Get User Profile
```http
GET /api/auth/profile/
Authorization: Token {your-auth-token}
Accept: application/json
```

#### Update User Profile
```http
PUT /api/auth/profile/
Authorization: Token {your-auth-token}
Content-Type: application/json

{
    "username": "updateduser",
    "email": "updated.updated@test.com",
    "password": "strongpassword123" 
}
```
