import { QueryFunctionContext } from "@tanstack/react-query";

export async function fetchUser({queryKey}: QueryFunctionContext) {
    try {
        const response = await fetch(`https://api.github.com/users/${queryKey[1]}`, {headers: {Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`}});
    
        if (!response.ok) {
            let errorMessage = '';
            if (response.status === 404) errorMessage = 'Could not find user with the provided username';
            else errorMessage = 'Could not fetch at this time. Please try again later';
            throw new Error(errorMessage);
        }
    
        return response.json();
    } catch (e) {
        throw e;
    }
}

export async function fetchUserRepos({queryKey}: QueryFunctionContext) {
    try {
        const response = await fetch(`https://api.github.com/users/${queryKey[1]}/repos`, {headers: {Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`}})    
        if (!response.ok) {
            let errorMessage = '';
            if (response.status === 404) errorMessage = 'Could not find a user with the provided username';
            else errorMessage = 'Could not fetch at this time. Please try again later';
            throw new Error(errorMessage);
        }
    
        return response.json();
    } catch (e) {
        throw e;
    }
}

export async function fetchUserGists({queryKey}: QueryFunctionContext) {
    try {
        const response = await fetch(`https://api.github.com/users/${queryKey[1]}/gists`, {headers: {Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`}})  
        if (!response.ok) {
            let errorMessage = '';
            if (response.status === 404) errorMessage = 'Could not find a user with the provided username';
            else errorMessage = 'Could not fetch at this time. Please try again later';
            throw new Error(errorMessage);
        }
    
        return response.json();
    } catch (e) {
        throw e;
    }
}