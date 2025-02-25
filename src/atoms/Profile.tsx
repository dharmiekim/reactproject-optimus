import { Link2, Mail, MapPin, TwitterIcon, Users } from "lucide-react";
import Link from "./Link";

export function Avatar({url, direction}: {url: string, direction: string}) {
    return (
        <img src={url} className={`transition-all duration-300 rounded-full '${direction === 'column' ? 'w-40 h-40' : 'w-16 h-16' }`} alt="" />
    );
}

export function Name({name, userName}: {name: string, userName: string}) {
    return (
        <p className='font-semibold'>
            {name}
            <span className='text-[#64748B] dark:text-[#94A3B8] ml-1'>({userName})</span>
        </p>
    );
}

export function Bio({bio}: {bio: string}) {
    return bio ?
        <p className='text-[#64748B] dark:text-[#94A3B8]'>
            {bio}
        </p> :
        <EmptyData text='No bio' />
}

export function Follows({text, count}: {text: string, count: number}) {
    return (
        <div className='flex gap-2 items-center'>
            <Users className='w-4 h-4 text-slate-600 dark:text-slate-300' />
            <div className='flex flex-col'>
                <p className='font-medium text-sm text-[#64748B] dark:text-[#94A3B8]'>{text}</p>
                <p className='text-slate-600 dark:text-slate-300 text-sm'>{count}</p>
            </div>
        </div>
    );
}

export function Email({email}: {email: string}) {
    return (
        <div className='flex gap-2 items-center'>
            <Mail className='w-4 h-4 text-slate-600 dark:text-slate-300' />
            {email || <EmptyData text="nil" />}
        </div>
    );
}

export function Location({location}: {location: string}) {
    return (
        <div className='flex gap-2 items-center'>
            <MapPin className='w-4 h-4 text-slate-600 dark:text-slate-300' />
            {location || <EmptyData text="nil" />}
        </div>
    );
}

export function Blog({blog}: {blog: string}) {
    return (
        <div className='flex gap-2 items-center'>
            <Link2 className='w-4 h-4 text-slate-600 dark:text-slate-300' />
            {blog ? <Link href={blog}>Blog</Link> : <EmptyData text='nil' />}
        </div>
    );
}

export function Twitter({twitter}: {twitter: string}) {
    return (
        <div className='flex gap-2 items-center'>
            <TwitterIcon className='w-4 h-4 text-slate-600 dark:text-slate-300' />
            {
                twitter ?
                <Link href={`https://twitter.com/${twitter}`}>
                    {twitter}
                </Link> :
                <EmptyData text='nil' />
            }
        </div>
    );
}

export function EmptyData({text}: {text: string}) {
    return (
        <span className='text-sm text-gray-400 dark:text-[#94A3B8] italic'>{text}</span>
    );
}