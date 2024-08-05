import React from 'react'
import Container from './Container';
import moment from "moment";
const User = ({user, repos}) => {
    console.log(user);
    
  return (
    <Container>
        <div className="flex flex-col lg:flex-row mt-10 gap-10">
            <div className="md:w-1/2 lg:w-1/4 flex flex-col gap-2 border-slate-300 border rounded-md p-5">
            <img className='w-[75%] mx-auto lg:w-full' src={user.avatar_url}/>
            <h1 className='text-3xl dark:text-white font-semibold'>{user.name}</h1>
            <p className='font-medium text-slate-500'>Ragistered at {moment(user.created_at).format("MMM Do, YYYY")}</p>
            <div className="flex gap-2">
                <p className='flex items-center dark:text-white gap-2'> 
                    <div className="border dark:text-white px-2 rounded-lg font-semibold py-1">
                        {user.followers}
                        </div>{""}
                        Followers</p>
                        <p className='flex dark:text-white items-center gap-2'> 
                    <div className="border dark:text-white px-2 rounded-lg font-semibold py-1">
                        {user.following}
                        </div>{""}
                        Following</p>
            </div>
            </div>
            <div className="md:w-1/2 lg:w-3/4 border-slate-300 border rounded-md p-5">
            <h1 className='text-4xl font-semibold dark:text-white mb-4'>Repositories</h1>
            <div className="grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid gap-3">
            {repos?.map((repo, idx ) => (
                <a
                key={idx}
                href={repo.html_url}
                className="border dark:text-white block dark:border-white border-zinc-500/30 
                text-lg font-semibold rounded-md p-2">
                {repo.name}
                </a>
            ))}
            </div>
            </div>

        </div>
    </Container>
  )
}

export default User;