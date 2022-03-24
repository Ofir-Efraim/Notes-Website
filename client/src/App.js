import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import Entry from './components/Entry/Entry';

const App = () => {
  const [posts, setPosts] = useState([]);
  const handleSubmit = (name,title,content) => {
    const post = {
      name: name,
      title:title,
      content:content
    };
    fetch('http://localhost:4000/new', {
      method: 'POST',
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(post)
    })
    window.location.reload(true);
   };
   const removePost = (id) => {
    fetch('http://localhost:4000/delete', {
      method: 'POST',
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({id:id})
    })
    window.location.reload(true);
   }
   const getPosts = async () => {
     const response = await fetch('http://localhost:4000');
     const data = await response.json();
     setPosts(data);
   };
   useEffect(() => {
     getPosts();
   },[]);
  return (
    <><Header /><div className='container'>
      <Posts removePost={removePost} posts={posts} />
      <Entry handleSubmit={handleSubmit}/>
    </div></>
  );
}

export default App;
