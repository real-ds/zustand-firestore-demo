// // src/PostList.js
// import React, { useEffect, useState } from 'react';
// import { useStore } from './store';

// const PostList = () => {
//   const { fetchPosts, posts, loading, error, addPost } = useStore();
//   const [newPostContent, setNewPostContent] = useState('');

//   useEffect(() => {
//     fetchPosts();
//   }, [fetchPosts]);

//   const handleAddPost = async (e) => {
//     e.preventDefault();
//     if (newPostContent.trim()) {
//       await addPost(newPostContent);
//       setNewPostContent('');
//     }
//   };

//   return (
//     <div>
//       <h1>Posts</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>{post.content}</li>
//         ))}
//       </ul>
//       <form onSubmit={handleAddPost}>
//         <input
//           type="text"
//           value={newPostContent}
//           onChange={(e) => setNewPostContent(e.target.value)}
//           placeholder="Add a new post"
//         />
//         <button type="submit">Add Post</button>
//       </form>
//     </div>
//   );
// };

// export default PostList;

// import React, { useEffect, useState } from 'react';
// import { useStore } from './store';

// const PostList = () => {
//   const { fetchPosts, posts, loading, error, addPost } = useStore();
//   const [newPostTitle, setNewPostTitle] = useState('');
//   const [newPostContent, setNewPostContent] = useState('');
//   const [authorId, setAuthorId] = useState(''); // Assuming you have a way to get the authorId
//   const [communityId, setCommunityId] = useState(''); // Assuming you have a way to get the communityId

//   useEffect(() => {
//     fetchPosts();
//   }, [fetchPosts]);

//   const handleAddPost = async (e) => {
//     e.preventDefault();
//     if (newPostTitle.trim() && newPostContent.trim()) {
//       await addPost(newPostTitle, newPostContent, authorId, communityId);
//       setNewPostTitle('');
//       setNewPostContent('');
//       setAuthorId(''); // Clear authorId input if needed
//       setCommunityId(''); // Clear communityId input if needed
//     }
//   };

//   return (
//     <div>
//       <h1>Posts</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>{post.title}: {post.content}</li> // Display title and content
//         ))}
//       </ul>
//       <form onSubmit={handleAddPost}>
//         <input
//           type="text"
//           value={newPostTitle}
//           onChange={(e) => setNewPostTitle(e.target.value)}
//           placeholder="Post Title"
//           required
//         />
//         <input
//           type="text"
//           value={newPostContent}
//           onChange={(e) => setNewPostContent(e.target.value)}
//           placeholder="Add a new post"
//           required
//         />
//         <input
//           type="text"
//           value={authorId}
//           onChange={(e) => setAuthorId(e.target.value)}
//           placeholder="Author ID"
//           required
//         />
//         <input
//           type="text"
//           value={communityId}
//           onChange={(e) => setCommunityId(e.target.value)}
//           placeholder="Community ID"
//           required
//         />
//         <button type="submit">Add Post</button>
//       </form>
//     </div>
//   );
// };

// export default PostList;

// import React, { useEffect, useState } from 'react';
// import { useStore } from './store';

// const PostList = () => {
//   const {
//     fetchPosts,
//     posts,
//     loading,
//     error,
//     addPost,
//     fetchUsers,
//     fetchCommunities,
//     users,
//     communities,
//   } = useStore();

//   const [newPostTitle, setNewPostTitle] = useState('');
//   const [newPostContent, setNewPostContent] = useState('');
//   const [authorId, setAuthorId] = useState('');
//   const [communityId, setCommunityId] = useState('');

//   useEffect(() => {
//     fetchPosts();
//     fetchUsers();
//     fetchCommunities();
//   }, [fetchPosts, fetchUsers, fetchCommunities]);

//   const handleAddPost = async (e) => {
//     e.preventDefault();
//     if (newPostTitle.trim() && newPostContent.trim() && authorId && communityId) {
//       await addPost(newPostTitle, newPostContent, authorId, communityId);
//       setNewPostTitle('');
//       setNewPostContent('');
//       setAuthorId('');
//       setCommunityId('');
//     }
//   };

//   return (
//     <div>
//       <h1>Posts</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>{post.title}: {post.content}</li>
//         ))}
//       </ul>
//       <form onSubmit={handleAddPost}>
//         <input
//           type="text"
//           value={newPostTitle}
//           onChange={(e) => setNewPostTitle(e.target.value)}
//           placeholder="Post Title"
//           required
//         />
//         <input
//           type="text"
//           value={newPostContent}
//           onChange={(e) => setNewPostContent(e.target.value)}
//           placeholder="Add a new post"
//           required
//         />
//         <select
//           value={authorId}
//           onChange={(e) => setAuthorId(e.target.value)}
//           required
//         >
//           <option value="">Select Author</option>
//           {users.map((user) => (
//             <option key={user.id} value={user.id}>{user.name}</option>
//           ))}
//         </select>
//         <select
//           value={communityId}
//           onChange={(e) => setCommunityId(e.target.value)}
//           required
//         >
//           <option value="">Select Community</option>
//           {communities.map((community) => (
//             <option key={community.id} value={community.id}>{community.name}</option>
//           ))}
//         </select>
//         <button type="submit">Add Post</button>
//       </form>
//     </div>
//   );
// };

// export default PostList;

import React, { useEffect, useState } from 'react';
import { useStore } from './store';

const PostList = () => {
  const { fetchPosts, fetchCommunities, fetchUsers, posts, loading, error, addPost, communities, users } = useStore();
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedCommunity, setSelectedCommunity] = useState('');

  useEffect(() => {
    fetchPosts();
    fetchCommunities();
    fetchUsers();
  }, [fetchPosts, fetchCommunities, fetchUsers]);

  const handleAddPost = async (e) => {
    e.preventDefault();
    if (newPostTitle.trim() && newPostContent.trim() && selectedAuthor && selectedCommunity) {
      await addPost(newPostTitle, newPostContent, selectedAuthor, selectedCommunity);
      setNewPostTitle('');
      setNewPostContent('');
      setSelectedAuthor('');
      setSelectedCommunity('');
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}: {post.content} (Community: {post.community})</li>
        ))}
      </ul>
      <form onSubmit={handleAddPost}>
        <input
          type="text"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          placeholder="Post Title"
          required
        />
        <input
          type="text"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="Add a new post"
          required
        />
        <select
          value={selectedAuthor}
          onChange={(e) => setSelectedAuthor(e.target.value)}
          required
        >
          <option value="">Select Author</option>
          {users.map(user => (
            <option key={user.id} value={user.name}>{user.name}</option>
          ))}
        </select>
        <select
          value={selectedCommunity}
          onChange={(e) => setSelectedCommunity(e.target.value)}
          required
        >
          <option value="">Select Community</option>
          {communities.map(community => (
            <option key={community.id} value={community.name}>{community.name}</option>
          ))}
        </select>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default PostList;
