import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SingleUser.css";
import { Link } from 'react-router-dom';
import Details from "../Details/Details";

const SingleUser = ({ el1 }) => {
  return (
    //   <div className="nearby-user">
    //   <div className="row">
    //     <div className="col-md-4 col-sm-2">
    //       <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user" className="profile-photo-lg" />
    //       <h5><a href="#" className="profile-link">{el1.username}</a></h5>
    //     </div>
    //     <div className="col-md-6 col-sm-7">

    //       <p>{el1.name}</p>
    //       <p className="text-muted">{el1.company.name}</p>
    //       <p className="text-muted">{el1.email}</p>
    //       <p className="text-muted">{el1.phone}</p>

    //     </div>
    //     <div className="col-md-2 col-sm-3">
    //       <button className="btn btn-primary pull-right">Add Friend</button>
    //     </div>
    //   </div>
    // </div>

    <div className="col mb-3">
      <div className="card">
        <img
          src="https://via.placeholder.com/340x120/FFB6C1/000000"
          alt="Cover"
          className="card-img-top"
        />
        <div className="card-body text-center">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar7.png"
            style={{ width: 100, marginTop: "-65px" }}
            alt="User"
            className="img-fluid img-thumbnail rounded-circle border-0 mb-3"
          />
          <h5 className="card-title">{el1.company.name}</h5>
          <p className="text-secondary mb-1">{el1.company.name}</p>
          <p className="text-muted font-size-sm">{el1.phone}</p>
        </div>
        <div className="card-footer">
          <Link to={`/Details/${el1.id}`}> <button
            className="btn btn-light btn-sm bg-white has-icon btn-block"
            type="button"
          >
            <i className="material-icons">More</i>Details
          </button></Link>
          <button
            className="btn btn-light btn-sm bg-white has-icon ml-2"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-message-circle"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
