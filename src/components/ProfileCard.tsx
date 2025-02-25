import React from 'react'
import { ExternalLink} from 'lucide-react';
import { Avatar, Bio, Blog, Email, Follows, Location, Name, Twitter } from '../atoms/Profile';
import Link from '../atoms/Link';

export default function ProfileCard({userInfo, direction}: {userInfo: any, direction: string}) {
    return (
        <div className={`bg-[#FFFFFF99] dark:bg-[#0A0F1C99] border border-[#D4B08C] dark:border-[#475569] shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,107,74,0.1)] p-4 rounded-xl flex flex-shrink-0 justify-between items-center transition-all duration-300 max-w-4xl w-full min-h-fit md:min-h-[none] ${direction === 'column' ? 'h-96 flex-col' : 'h-44 flex-row'} text-sm`}>
            <div className='flex flex-col justify-between gap-1 items-center'>
                <Avatar url={userInfo.avatar_url} direction={direction} />
                <Name name={userInfo.name} userName={userInfo.login} />
                <Bio bio={userInfo.bio} />
            </div>
            <div className='grid grid-cols-2 gap-x-10 gap-y-2'>
                <Follows text='Followers' count={userInfo.followers} />
                <Follows text='Following' count={userInfo.following} />
                <Email email={userInfo.email} />
                <Location location={userInfo.location} />
                <Blog blog={userInfo.blog} />
                <Twitter twitter={userInfo.twitter_username} />
            </div>
            <Link href={userInfo.html_url}>
                <ExternalLink className='h-4 w-4'/>
                View Profile
            </Link>
        </div>
    );
}
