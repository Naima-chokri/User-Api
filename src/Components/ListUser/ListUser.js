import React from "react";
import SingleUser from "../SingleUser/SingleUser";
import "bootstrap/dist/css/bootstrap.min.css";

const ListUser = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div class="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
          {data.map((el) => (
            <SingleUser el1={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListUser;
