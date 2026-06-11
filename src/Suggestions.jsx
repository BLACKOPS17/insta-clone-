import React, { useEffect, useState } from 'react'

function Suggestions() {

  const [profile,setProfile] = useState(null);
  const [suggestions,setSuggestions] = useState([]);

  // fetch data from endpoints

  useEffect(()=>{

    fetch("http://localhost:3000/profile")
    .then(data => data.json())
    .then(data => setProfile(data))
    .catch(err => console.log(err)
    )

    fetch("http://localhost:3000/suggestions")
    .then(data => data.json())
    .then(data => setSuggestions(data))
    .catch(err => console.log(err)
    )
  },[])

 return (
  <div className="my-2 m-4 sidebar">
    {profile ? (
      <div className="d-flex mt-4 align-items-center profile-header">
        <img src={profile.profile_pic} className="dp rounded-circle" />
        <h5 className="ms-2 mb-0">{profile.username}</h5>
        <p className="ms-auto my-auto">
          <a className="switch-link" href="#">Switch</a>
        </p>
      </div>
    ) : (
      <p>Loading...</p>
    )}

    {/* Header */}
    <div className="my-3 d-flex align-items-center">
      <h6 className="mb-0 text-muted">Suggested for you</h6>
      <b className="ms-auto see-all">See all</b>
    </div>

    {/* Suggestions */}
    {suggestions.length > 0 ? (
      <div className="suggestions-list">
        {suggestions.map((suggestion) => (
          <div className="d-flex align-items-center my-2" key={suggestion.id}>
            <img
              src={suggestion.profile_pic}
              className="dp rounded-circle"
            />
            <h6 className="ms-2 mb-0">{suggestion.username}</h6>
            <a className="ms-auto follow-link" href="#">Follow</a>
          </div>
        ))}
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);

}

export default Suggestions