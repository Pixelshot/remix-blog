import { Link, useLoaderData } from '@remix-run/react';

export const loader = () => {
  const data = {
    posts: [
      { id: 1, title: 'Hello World 1', body: 'lorem ips 1' },
      { id: 2, title: 'Hello World 2', body: 'lorem ips 2' },
      { id: 3, title: 'Hello World 3', body: 'lorem ips 3' },
    ],
  };
  return data;
};

function PostList() {
  const { posts } = useLoaderData();
  console.log(posts);

  return (
    <>
      <div className="page-header">
        <h1>Posts</h1>
        <Link to="/posts/new" className="btn">
          New Post
        </Link>
      </div>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.id}>
              <h3>{post.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostList;
