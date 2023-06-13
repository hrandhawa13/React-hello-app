import { useEffect, useState } from "react";

const useGitHub = (userName) => {

    const [user, setUser]= useState(null);
    const [error, setError]= useState(null);
    const [loading, setLoading]= useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try{
                const response = await fetch(`https://api.github.com/users/${userName}`);
                const responseJson = await response.json();
                setUser(responseJson);
                setLoading(false);
                console.log(responseJson);
            }catch(error){
                setError(error);
                setLoading(false);
                console.log(error.message);
            }

        }
        fetchData();

    }, [userName]);
    return {user, error, loading};
}

export default useGitHub;
