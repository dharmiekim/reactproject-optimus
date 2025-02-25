import React from 'react'
import BackButton from '../atoms/BackButton'
import Members from '../groupMembers'
import MemberCard from '../atoms/MemberCard'

export default function About({onBackClicked}: {onBackClicked: () => void}) {
  return (
    <div className='h-0 overflow-hidden flex-grow flex-shrink-0'>
        <div className='h-full flex flex-col gap-4 overflow-hidden'>
            <BackButton onClick={onBackClicked} />
            <div className='h-fit overflow-auto'>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto'>
                    {
                        Members.map(member => {
                            return (
                                <li key={member.name}>
                                    <MemberCard member={member} />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}
