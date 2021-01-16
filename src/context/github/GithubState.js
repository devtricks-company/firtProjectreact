import React,{useReducer} from 'react';
import GithubContext from './githubContext';
import githubReducer from './githubReducer';
import axios from 'axios';
import {
    SEARCH_USERS,
    CLEAR_USERS,
    GET_REPOS,
   
   
 
    SET_LOADING,
    GET_USER


} from '../types'

let githubClientId ;
let githubClientSecret;

if(process.env.NODE_ENV !== "production"){
  githubClientId = process.env.REACT_APP_CLIENT_ID;
  githubClientSecret  = process.env.REACT_APP_CLIENT_SECRET;
}else{
  githubClientId = process.env.CLIENT_ID;
  githubClientSecret  = process.env.CLIENT_SECRET;
}

const GithubState = props => {

    const initalState = {
        users:[],
        user:{},
        repos:[],
        loading:false,
       
    }

    const [state,dispatch] = useReducer(githubReducer,initalState);

    //actions

    //Search User
    const searchUser = async (text) => {
        try {
        setLoading();
        const res = await axios.get(
          `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
      
        // this.setState({users:res.data.items,loading:false});
        dispatch({
            type:SEARCH_USERS,
            payload:res.data.items
        })
    
        } catch (error) {
            console.log(error);
        }
        
      }

      //clear Users
      const clearUsers = () => dispatch({type:CLEAR_USERS})
      //setLoading
      const setLoading = () => {
        dispatch({
            type:SET_LOADING
        
        })
      }
      //getUser
      const getUser = async (username) => {

        try {
          
          setLoading();
          const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
  
          // this.setState({user:res.data,loading:false});
            dispatch({
                type:GET_USER,
                payload:res.data
            })
        } catch (error) {
          console.log(error);
        }
    }

    //GET User Repos
    const getUserRepos = async (username) => {
       
        try {
          
            setLoading();
          const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    
          // this.setState({repos:res.data,loading:false});
         dispatch({
             type:GET_REPOS,
             payload:res.data
         })
        } catch (error) {
          console.log(error);
        }
    }
  


    return <GithubContext.Provider  value={{
        users:state.users,
        user:state.user,
        repos:state.repos,
        loading:state.loading,
        alert:state.alert,
        searchUser,
        clearUsers,
        getUser,
        getUserRepos
    }}>
        {props.children}
    </GithubContext.Provider>


}


export default GithubState;