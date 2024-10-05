# INSTA APP

## Author: Janiece Parker

## Description

This Insta App project is a user-friendly backend API designed to enhance a social connections. It allows users to easily create, share, and engage through posts and comments. Making it simple for everyone to connect.


## How to Run

Clone the repository: <https://github.com/JParker3110/insta-review-app>

Navigate to the project directory:

```bash
cd [project-directory]
```

## Installation Command

Install dependencies using the following command:

```bash
npm install
```

## Set Up Environmental Variables

Create a `.env` file in the root directory of the project:

```plaintext
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_KEY=your-anon-public-key
```

## Run the Server

For production:

```bash
npm start
```

For development with auto-reloading:

```bash
npm run dev
```

Open your browser and navigate to <http://localhost:3000> to see the app in action.

## API Routes

POSTS:

* GET /api/routes/posts - Retrieves a list of all posts.
* GET /api/routes/posts/:id - Fetches details of a single post by its ID.
* POST /api/routes/posts - Creates a new post entry.

COMMENTS:

* GET /api/routes/comments/posts/:id/comments - To get all comments for a specific post.
* POST /api/routes/comments/posts/:id/comments - To add a comment to a specific post by the post ID.

LIKES:

* GET /api/routes/likes/posts/:id/likes - To view likes for a post.
* POST /api/routes/likes/posts/:id/likes - For liking a post.


## Technologies and Resources Used

* Vercel: Deployment platform for serverless functions and static sites.

* Node.js: JavaScript runtime for building the server.

* Express: Web application framework for Node.js used to handle HTTP requests.

* Supabase: Backend-as-a-service platform providing a PostgreSQL database and RESTful API.

* Javascript: Programming language used for both server-side and client-side code.

* Postman: Write and run automated tests for API endpoints. (GET, POST, PUT, DELETE, etc.).

* Jest & SuperTest: Tools for testing and HTTP assertions.

* Axios: HTTP client for making requests to the Supabase API.

* CORS: Middleware for handling cross-origin requests.

* Nodemon: Development tool for auto-reloading the server on file changes.