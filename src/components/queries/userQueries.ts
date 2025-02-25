import { queryOptions } from "@tanstack/react-query";
import { fetchUser, fetchUserGists, fetchUserRepos } from "../services/userServices";

export function userOptions(userName: string) {
    return queryOptions({
        queryKey: ['users', userName],
        queryFn: fetchUser,
        enabled: !!userName
    })
}

export function userReposOptions(userName: string) {
    return queryOptions({
        queryKey: ['users', userName, 'repos'],
        queryFn: fetchUserRepos,
        enabled: !!userName
    })
}

export function userGistsOptions(userName: string) {
    return queryOptions({
        queryKey: ['users', userName, 'gists'],
        queryFn: fetchUserGists,
        enabled: !!userName
    })
}