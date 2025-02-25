import { ChevronDown, FileCode } from 'lucide-react';
import React, { useState } from 'react'
import Link from '../atoms/Link';

export default function GistsCard({gists}: {gists: any[]}) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className='bg-[#FFFFFF99] dark:bg-[#0A0F1C99] border border-[#D4B08C] dark:border-[#475569] shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,107,74,0.1)] p-4 rounded-xl '>
                <h2 className='flex items-center justify-between'>
                    <div className='flex gap-2 font-medium items-center'>
                        <FileCode className='w-5 h-5' />
                        Gists ({gists.length})
                    </div>
                    <button type="button" onClick={() => setIsExpanded(!isExpanded)} className='shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,107,74,0.1)] border border-[#D4B08C] dark:border-[#475569] p-2 rounded-lg'>
                        <ChevronDown className={`w-4 h-4 transition-all duration-300 text-slate-600 dark:text-slate-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                </h2>
                {
                    gists.length > 0 &&
                    <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-screen' : 'max-h-0'}`}>
                        <ul className='pl-6 p-4 space-y-4'>
                            {
                                gists.map(gist => {
                                    return (
                                        <li key={gist.html_url}>
                                            <GistItem gist={gist} />
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

function GistItem({gist}: {gist: any}) {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex gap-2 font-medium items-center'>
                <FileCode className='w-4 h-4 text-slate-600 dark:text-slate-300' />
                <Link href={gist.html_url}>
                    {gist.html_url}
                </Link>
            </div>
        </div>
    );
}
