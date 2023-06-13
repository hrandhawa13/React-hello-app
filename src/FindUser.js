import { useState } from "react";
import GithubUser from "./GithubUser";


const FindUser = () => {

    const [userName, setUserName]= useState('');

    return (
        <div className="findUser">
            <h2>Find User</h2>
            <form>
                <div className="findUserForm">
                    <label htmlFor="userName"></label>
                    <input 
                        type="text"
                        placeholder="Enter Username"
                        onChange={(event) => setUserName(event.target.value)} 
                    />
                </div>
            </form>

            <div className="findUserResult">
                {userName? 
                <GithubUser username={userName} />:
                <p>Please initiate the search!!!!</p> }
            </div>
        </div>
    );
};

export default FindUser;