import React, { useEffect, useRef, useState } from 'react';
import ProfileCard from './ProfileCard';
import RespositroriesCard from './RespositroriesCard';
import GistsCard from './GistsCard';
import { useQueries, useQueryClient } from '@tanstack/react-query';
import { userGistsOptions, userOptions, userReposOptions } from '../queries/userQueries';
import { Loader2Icon } from 'lucide-react';
import Error from '../atoms/Error';

export default function SearchResult({searchTerm} : {searchTerm: string}) {
    const contentContainer = useRef<HTMLDivElement>(null);
    const [profileDirection, setProfileDirection] = useState<'column' | 'row'>('column');

    const [userQuery, userReposQuery, userGistsQuery] = useQueries({
        queries: [userOptions(searchTerm), userReposOptions(searchTerm), userGistsOptions(searchTerm)]
    });

    const isLoading = userQuery.isLoading || userReposQuery.isLoading || userGistsQuery.isLoading;
    const error = userQuery.error || userReposQuery.error || userGistsQuery.error;

    useEffect(() => {
        if (!contentContainer.current) return;
        if (isLoading) return;
        if (error) return;
        
        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                const height = entry.contentRect.height;
                if (height > 200) setProfileDirection('row')
                else setProfileDirection('column')
            }
        });

        resizeObserver.observe(contentContainer.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, [isLoading, error, userQuery.data, userReposQuery.data, userGistsQuery.data]);

    if (isLoading) {
        return (
            <div className='h-full flex-1 grow grid place-items-center'>
                <Loader2Icon className='animate-spin text-slate-600 dark:text-slate-300' size={124} />
            </div>
        );
    }

    if (error) {
        return (
            <div className='h-full flex-1 grow grid place-items-center'>
                <Error errorMessage={error.message} userName={searchTerm} />
            </div>
        )
    }

    const userInfo = userQuery.data;
    const userRepos = userReposQuery.data;
    const userGists = userGistsQuery.data;

    if (!userInfo || !userRepos || !userGists) {
        return (
            <div className='h-full flex-1 grow grid place-items-center'>
                <Error errorMessage={'Unable to fetch at this time. Please try again later'} userName={searchTerm} />
            </div>
        )
    };

    return (
        <div className='h-0 overflow-hidden flex-grow flex-shrink-0'>
            <div className='h-full flex flex-col items-center gap-4 overflow-hidden'>
                <ProfileCard userInfo={userInfo} direction={profileDirection} /> 
                <div className='overflow-auto self-stretch'>
                    <div ref={contentContainer} className='space-y-4'>
                        <RespositroriesCard repos={userRepos} />
                        <GistsCard gists={userGists} />
                    </div>
                </div>
            </div>
        </div>
    );
}
