import React from 'react'

export const getStaticProps = async (ctx) => {
    const {params} = ctx;
    const userId = params.id;
    
    const res = await fetch (`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = await res.json();
    
    return {
        props: {
            user:userData
        }
    }
}

export const getStaticPaths = () => {
    return {
        paths: [
            {params: {id : "1"}},
            {params: {id : "2"}},
            {params: {id : "3"}},
            {params: {id : "4"}},
            {params: {id : "5"}},
            {params: {id : "6"}},
            {params: {id : "7"}},
            {params: {id : "8"}},
            {params: {id : "9"}},
            {params: {id : "10"}},
        ],
        fallback: false,
    }
}
const User = ({user}) => {
  return (
    <div>
        <h1>User {user.id}</h1>
        <h1>Name : {user.name}</h1>
        <h1>Email : {user.email}</h1>
    </div>
  )
}

export default User