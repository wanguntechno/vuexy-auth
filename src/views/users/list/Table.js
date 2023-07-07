import { useState, useEffect, Fragment } from 'react';

const PostList = () => {
// function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8000/api/user');
        const data = await response.json();
        console.log(data)
        setPosts(data);
        setIsLoading(false);
    } catch (error) {
        setError(error);
        setIsLoading(false);
    }
}
fetchData();
}, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nano ID</th>
          <th>Username</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {posts.data.map((post, index) => (
          <tr key={post.nanoid}>
            <td>{index + 1}</td>
            <td>{post.nanoid}</td>
            <td>{post.username}</td>
            <td>{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PostList