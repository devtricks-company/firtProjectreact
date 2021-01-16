import React, { useContext, useState } from "react";
import PropTypes from 'prop-types'
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const {searchUser,clearUsers,users} = githubContext;
    const {setAlert} = alertContext;

    const [search,setSearch] =useState("")
    
    
    const onChangeHandler = (e) =>setSearch(e.target.value);
    
   const submitHandler = (e) => {
        e.preventDefault();

        if(search === ""){
          setAlert("search can not be empty",'danger')
        }else{
          searchUser(search);
          setSearch("")
        }
     
    }
    // submitHandler(e){
    //     e.preventDefault();
    //    this.setState({search:""})
    // }
  //  const clearUsersHandler = () => {
  //     clearUsers();
  //   }

    

    return (
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="search"
            placeholder="Search Users ...."
            className="form-control"
            value={search}
            onChange={onChangeHandler}
          />
          <input
            type="submit"
            value="Search User"
            className="btn btn-dark btn-block mt-3"
          />
        </form>
        {users.length> 0 &&  <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
       
      </div>
    );
  
}

Search.propTypes = {
  
  clearUsers: PropTypes.func.isRequired,
  showClear:PropTypes.bool.isRequired,
  setAlert:PropTypes.func.isRequired
}

export default Search;
