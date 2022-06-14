import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './SingleUser.css'

const SingleUser = ({el1}) => {
  return (
  <div className="nearby-user">
  <div className="row">
    <div className="col-md-4 col-sm-2">
      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user" className="profile-photo-lg" />
      <h5><a href="#" className="profile-link">{el1.username}</a></h5>
    </div>
    <div className="col-md-6 col-sm-7">
      
      <p>{el1.name}</p>
      <p className="text-muted">{el1.company.name}</p>
      <p className="text-muted">{el1.email}</p>
      <p className="text-muted">{el1.phone}</p>
      
    </div>
    <div className="col-md-2 col-sm-3">
      <button className="btn btn-primary pull-right">Add Friend</button>
    </div>
  </div>
</div>

  )
}

export default SingleUser