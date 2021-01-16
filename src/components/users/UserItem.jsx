import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const  UserItem = props =>  {
 
  const {avatar_url,login} = props.user;
 
 
    return (
      <div className="card text-center mt-5 py-3 col-3 mx-3 ">
        <img
          src={avatar_url}
          alt={login}
          className="rounded-circle"
          style={{ width: "60px", margin: "0 auto" }}
        />
        <h3>{login}</h3>
        <div>
          <Link to={`/user/${login}`} className="btn btn-dark btn-sm">
            More
          </Link>
        </div>
      </div>
    );

}

UserItem.propTypes = {
  user:PropTypes.object.isRequired,
}
export default UserItem;
