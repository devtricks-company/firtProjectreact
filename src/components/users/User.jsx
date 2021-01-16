import React,{useContext, useEffect} from 'react';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';


const User = (props) => {
    // componentDidMount(){
    //     this.props.getUser(this.props.match.params.login);
    //     this.props.getUserRepos(this.props.match.params.login);
    // }

    const githubContext = useContext(GithubContext);
    const {getUser,user,loading,getUserRepos,repos} = githubContext;
    
    useEffect(() => {
       getUser(props.match.params.login);
       getUserRepos(props.match.params.login);
       //eslint-disable-next-line
    },[])

       
        const {
            name,
            company,
            avatar_url,
            html_url,
            location,
            bio,
            blog,
            login,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = user 



        if(loading) return <Spinner />
        return  (
            <>
            {user &&  <><Link to="/" className="btn btn-light">Back to Search</Link>
            Hireable {hireable ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times-circle text-danger"></i> 
          }
          <div className="card col-12 py-3">
              <div className="d-flex">
                    <div style={{width:"400px"}} >
                        <img src={avatar_url} alt={login} className="rounded-circle mr-auto" style={{width:"150px"}} />
                        <h1>{name}</h1>
                        <p>{location}</p>
                  </div>
                  <div>
                     <h3>Bio</h3>
                     <p>{bio && bio}</p>
                     <a href={html_url} className="btn btn-dark">Visit Github page</a>
                     <ul className="mt-3">
                         <li>
                             <strong>Username</strong> : { name && <>{name}</>}
                         </li>
                         <li>
                             <strong>Company</strong> : {company && <>{company}</>}
                         </li>
                         <li>
                             <strong>Website</strong> : {blog && <><a href={`http://${blog}`}>{blog}</a> </>}
                         </li>
                     </ul>
                  </div>
              </div>
          </div>

          <div className="card text-center d-flex flex-row p-5 justify-content-center mt-5">
              <div className="badge badge-primary mx-2 p-2">Followers: {followers}</div>
              <div className="badge badge-success  mx-2 p-2">Following : {following}</div>
              <div className="badge badge-danger  mx-2 p-2">Public Repos: {public_repos}</div>
              <div className="badge badge-dark  mx-2 p-2">Public Gists: {public_gists}</div>
          </div>
        
        <Repos repos={repos} /></> }
            </>
        )  
    
}

export default User;