import React, { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(data => {
        console.log("Fetched:", data);
        setPosts(data);  // FIXED
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='d-flex justify-content-center'>
      {posts.length > 0 ? (
        <div>
          {posts.map(post => (
            <div className='my-3' key={post.id}>
              <div className='d-flex'>
                <img src={post.user.profile_pic} className='dp rounded-circle'/>
                <h5>{post.user.username}</h5>
              </div>
              <img className='post_img' src={post.image} alt="" />
              <div>
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-send"></i>
              </div>
              <div>
                <b>{post.likes} Likes</b>
              </div>
              <div>
                <p>{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading Posts...</div>
      )}
    </div>
  );
}

export default Posts;
  