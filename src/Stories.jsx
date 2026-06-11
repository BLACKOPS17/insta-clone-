import { useEffect, useState } from "react"


function Stories() {

  const [Stories,setStories] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/story')
    .then(data => data.json())
    .then(data => setStories(data))
    .catch(err => console.log(err)
    )
  },[])
   
  return (
    <div className='story'>
      {Stories.length > 0 ? (
        Stories.map((story => (
          <div key={story.id}>
            <img src={story.user.profile_pic} alt="dp" className="story-dp rounded-circle"/>
          </div>
        )))
      ):(
        <p>loading</p>
      )
      }

    </div>
  )
}

export default Stories