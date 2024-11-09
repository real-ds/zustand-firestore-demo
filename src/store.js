// // src/store.js
// import { create } from 'zustand';
// import { collection, getDocs, query, orderBy, limit, addDoc } from 'firebase/firestore';
// import { db } from './firebaseConfig';

// export const useStore = create((set, get) => ({
//   posts: [],
//   loading: false,
//   error: null,

//   fetchPosts: async () => {
//     set({ loading: true, error: null });
//     try {
//       const postsQuery = query(
//         collection(db, 'posts'),
//         orderBy('createdAt', 'desc'),
//         limit(10)
//       );

//       const snapshot = await getDocs(postsQuery);
//       const posts = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));

//       set({ posts, loading: false });
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//       set({ error: 'Failed to fetch posts', loading: false });
//     }
//   },

//   addPost: async (content) => {
//     set({ loading: true, error: null });
//     try {
//       const newPost = { content, createdAt: new Date() };
//       const docRef = await addDoc(collection(db, 'posts'), newPost);
//       set(state => ({
//         posts: [...state.posts, { id: docRef.id, ...newPost }],
//         loading: false,
//       }));
//     } catch (error) {
//       console.error('Error adding post:', error);
//       set({ error: 'Failed to add post', loading: false });
//     }
//   },
// }));


// src/store.js
// import { create } from 'zustand';
// import { collection, getDocs, query, orderBy, limit, addDoc } from 'firebase/firestore';
// import { db } from './firebaseConfig';

// export const useStore = create((set) => ({
//   posts: [],
//   loading: false,
//   error: null,

//   fetchPosts: async () => {
//     set({ loading: true, error: null });
//     try {
//       const postsQuery = query(
//         collection(db, 'posts'),
//         orderBy('createdAt', 'desc'),
//         limit(10)
//       );

//       const snapshot = await getDocs(postsQuery);
//       const posts = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));

//       set({ posts, loading: false });
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//       set({ error: 'Failed to fetch posts', loading: false });
//     }
//   },

//   addPost: async (title, content, authorId, communityId) => {
//     set({ loading: true, error: null });
//     try {
//       const newPost = {
//         title,
//         content,
//         authorId,
//         communityId,
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//         likes: 0,
//         comments: [],
//       };
//       const docRef = await addDoc(collection(db, 'posts'), newPost);
//       set(state => ({
//         posts: [...state.posts, { id: docRef.id, ...newPost }],
//         loading: false,
//       }));
//     } catch (error) {
//       console.error('Error adding post:', error);
//       set({ error: 'Failed to add post', loading: false });
//     }
//   },
// }));

// import { create } from 'zustand';
// import { collection, getDocs, query, orderBy, limit, addDoc } from 'firebase/firestore';
// import { db } from './firebaseConfig';

// export const useStore = create((set) => ({
//   posts: [],
//   users: [],
//   communities: [],
//   loading: false,
//   error: null,

//   fetchPosts: async () => {
//     set({ loading: true, error: null });
//     try {
//       const postsQuery = query(
//         collection(db, 'posts'),
//         orderBy('createdAt', 'desc'),
//         limit(10)
//       );

//       const snapshot = await getDocs(postsQuery);
//       const posts = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));

//       set({ posts, loading: false });
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//       set({ error: 'Failed to fetch posts', loading: false });
//     }
//   },

//   fetchUsers: async () => {
//     try {
//       const usersSnapshot = await getDocs(collection(db, 'users'));
//       const users = usersSnapshot.docs.map(doc => ({
//         id: doc.id,
//         name: doc.data().name
//       }));
//       set({ users });
//     } catch (error) {
//       console.error('Error fetching users:', error);
//       set({ error: 'Failed to fetch users' });
//     }
//   },

//   fetchCommunities: async () => {
//     try {
//       const communitiesSnapshot = await getDocs(collection(db, 'communities'));
//       const communities = communitiesSnapshot.docs.map(doc => ({
//         id: doc.id,
//         name: doc.data().name
//       }));
//       set({ communities });
//     } catch (error) {
//       console.error('Error fetching communities:', error);
//       set({ error: 'Failed to fetch communities' });
//     }
//   },

//   addPost: async (title, content, authorId, communityId) => {
//     set({ loading: true, error: null });
//     try {
//       const newPost = {
//         title,
//         content,
//         authorId,
//         communityId,
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//         likes: 0,
//         comments: [],
//       };
//       const docRef = await addDoc(collection(db, 'posts'), newPost);
//       set(state => ({
//         posts: [...state.posts, { id: docRef.id, ...newPost }],
//         loading: false,
//       }));
//     } catch (error) {
//       console.error('Error adding post:', error);
//       set({ error: 'Failed to add post', loading: false });
//     }
//   },
// }));
import { create } from 'zustand';
import { collection, getDocs, query, orderBy, limit, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const useStore = create((set) => ({
  posts: [],
  communities: [],
  users: [],
  loading: false,
  error: null,

  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const postsQuery = query(
        collection(db, 'posts'),
        orderBy('createdAt', 'desc'),
        limit(10)
      );

      const snapshot = await getDocs(postsQuery);
      const posts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      set({ posts, loading: false });
    } catch (error) {
      console.error('Error fetching posts:', error);
      set({ error: 'Failed to fetch posts', loading: false });
    }
  },

  fetchCommunities: async () => {
    try {
      const snapshot = await getDocs(collection(db, 'communities'));
      const communities = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      set({ communities });
    } catch (error) {
      console.error('Error fetching communities:', error);
      set({ error: 'Failed to fetch communities' });
    }
  },

  fetchUsers: async () => {
    try {
      const snapshot = await getDocs(collection(db, 'users'));
      const users = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      set({ users });
    } catch (error) {
      console.error('Error fetching users:', error);
      set({ error: 'Failed to fetch users' });
    }
  },

  addPost: async (title, content, author, community) => {
    set({ loading: true, error: null });
    try {
      const newPost = {
        title,
        content,
        author,
        community, // Now storing the community name instead of ID
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        likes: 0,
        comments: [],
      };
      const docRef = await addDoc(collection(db, 'posts'), newPost);
      set(state => ({
        posts: [...state.posts, { id: docRef.id, ...newPost }],
        loading: false,
      }));
    } catch (error) {
      console.error('Error adding post:', error);
      set({ error: 'Failed to add post', loading: false });
    }
  },
}));
