import React from 'react'
import Link from './Link'
import { Link2Icon } from 'lucide-react'
import { Member } from '../groupMembers'

export default function MemberCard({member}: {member: Member}) {
  return (
    <div className='bg-[#FFFFFF99] dark:bg-[#0A0F1C99] border border-[#D4B08C] dark:border-[#475569] shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,107,74,0.1)] p-4 rounded-xl flex flex-col gap-2 items-center'>
        <img src={member.imageUrl} className='w-44 h-44 rounded-full object-cover' alt="" />
        <div className='flex gap-2'>
            <p>{member.name}</p>
            <Link href={member.github}>
                <Link2Icon className='w-4 h-4' />
            </Link>
        </div>
        <p className='font-medium text-sm text-[#64748B] dark:text-[#94A3B8]'>{member.role}</p>
    </div>
  )
}
