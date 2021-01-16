import React from 'react';
import Users from "../components/users/Users";
import Search from "../components/users/Search";
import Alert from '../components/layout/Alert';

const Home = () => {
    return (
        <>
                  <Alert />
                  <Search />
                  <Users />
                </>
    )
}

export default Home
