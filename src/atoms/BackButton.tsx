import { ArrowLeft } from 'lucide-react'
import React from 'react'

export default function BackButton({onClick}: {onClick: () => void}) {
  return (
    <div className='mr-2'>
        <button onClick={onClick} type="button" className='cancelButton shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,107,74,0.1)] border border-[#D4B08C] dark:border-[#475569] p-2 rounded-lg'>
            <ArrowLeft className='text-slate-600 dark:text-slate-300' size={20} />
        </button>
    </div>
  )
}
