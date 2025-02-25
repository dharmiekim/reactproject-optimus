import { format } from 'date-fns';
import { Book, ChevronDown, Link2Icon } from 'lucide-react';
import React, { useState } from 'react'
import Link from '../atoms/Link';

export default function RespositroriesCard({repos} : {repos: any[]}) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className='bg-[#FFFFFF99] dark:bg-[#0A0F1C99] border border-[#D4B08C] dark:border-[#475569] shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,107,74,0.1)] p-4 rounded-xl '>
                <h2 className='flex items-center justify-between'>
                    <div className='flex gap-2 font-medium items-center'>
                        <Book className='w-5 h-5' />
                        Repostories ({repos.length})
                    </div>
                    <button type="button" onClick={() => setIsExpanded(!isExpanded)} className='shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,107,74,0.1)] border border-[#D4B08C] dark:border-[#475569] p-2 rounded-lg'>
                        <ChevronDown className={`w-4 h-4 transition-all duration-300 text-slate-600 dark:text-slate-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                </h2>
                {
                    repos.length > 0 &&
                    <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[3000px]' : 'max-h-0'}`}>
                        <ul className='pl-6 p-4 space-y-4'>
                            {
                                repos.map(repo => {
                                    return (
                                        <li key={repo.name}>
                                            <RepoItem repo={repo} />
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                }
            </div>
    );
}

function RepoItem({repo}: {repo: any}) {
    const lastPush = format(repo.pushed_at, 'Mo MMMM, yyyy');
    return (
        <div className='flex justify-between items-center'>
            <div className='flex gap-2 font-medium items-center'>
                <Book className='w-4 h-4 text-slate-600 dark:text-slate-300' />
                <div className='flex flex-col md:flex-row gap-2'>
                    {repo.name}
                    <span className='text-sm text-[#64748B] dark:text-[#94A3B8]'>(Last push: {lastPush})</span>
                </div>
            </div>
            <div className='flex items-center'>
                <Link href={repo.html_url}>
                    <Link2Icon className='w-4 h-4' />
                </Link>
            </div>
        </div>
    );
}
