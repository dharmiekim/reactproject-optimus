import { ArrowDown, ArrowLeft, ArrowRight, MoveRight, Search } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import BackButton from '../atoms/BackButton';

export default function SearchContainer({
    handleSearchClicked,
    isContentVisible,
    setIsContentVisible,
    onAboutUsClicked
    }: {handleSearchClicked: (s: string) => void, isContentVisible: boolean, setIsContentVisible: (b: boolean) => void, onAboutUsClicked: () => void}) {
    const [size, setSize] = useState<'expanded' | 'shrunk'>('expanded');
    const [searchTerm, setSearchTerm] = useState('');
    const searchFieldRef = useRef<HTMLInputElement>(null);
    const submitButtonRef = useRef<HTMLButtonElement>(null);

    const isExpanded = size === 'expanded';

    useEffect(() => {
        function collapseSearchBar(e: any) {
            if (isContentVisible) {
                const cancelButton = document.querySelector('cancelButton');
                if (!searchFieldRef.current?.contains(e.target) && !submitButtonRef.current?.contains(e.target) && !cancelButton?.contains(e.target)) setSize('shrunk');
            }
        }
        if (isExpanded) document.addEventListener('click', collapseSearchBar)
        return () => {
            document.removeEventListener('click', collapseSearchBar);
        }
    }, [isExpanded, isContentVisible, searchFieldRef.current, submitButtonRef.current]);

    function onSearchClicked() {
        if (!searchTerm) return;
        setSize('shrunk');
        handleSearchClicked(searchTerm);
        setIsContentVisible(true);
        searchFieldRef.current?.blur();
    }

    function handleCloseClicked() {
        setSize('expanded');
        setIsContentVisible(false);
    }

    return (
        <div
            className={`transition-all duration-300 flex items-center ${ isContentVisible ? 'h-16 flex-shrink flex-grow-0' : 'h-full flex-1'}`}
        >
            <div className={`${isContentVisible ? 'w-0' : 'w-1/4'} transition-[width] duration-300`} /> {/* spacer */}

            {
                isContentVisible &&
                <BackButton onClick={handleCloseClicked} />
            }

            <div className={`flex flex-col gap-4 items-stretch transition-[width] duration-300 ${isExpanded ? 'w-1/2' : 'w-44'}`}>
                {
                    !isContentVisible &&
                    <div className='flex flex-col items-center gap-8'>
                        <button onClick={onAboutUsClicked} type='button' className='flex gap-2'>
                            <span className='underline font-bold cursor-pointer text-lg'>About Us</span>
                            <span className='animate-bounce'>
                                <ArrowDown className='w-5 h-5' strokeWidth={4} />
                            </span>
                        </button>
                        <h1 className='text-2xl self-center'>Github Finder</h1>
                    </div>
                }
                <form onSubmit={(e) => {e.preventDefault(); onSearchClicked()}} className={`relative w-full transition-all duration-300 rounded-3xl overflow-hidden`}>
                    <input ref={searchFieldRef} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onFocus={() => {setSize('expanded')}} placeholder='Enter Github username...' className={`w-full h-full p-4 pl-10 text-sm md:text-base text-white bg-black bg-opacity-50 outline-none placeholder:text-white ${isExpanded ? 'placeholder:opacity-100' : 'placeholder:opacity-0'}`} style={{}} />
                    <Search className='absolute top-1/2 -translate-y-1/2 left-2' color='#ffffff70' />
                    <button
                        ref={submitButtonRef}
                        type="button"
                        onClick={onSearchClicked}
                        style={{
                            transition: '.3s linear',
                            opacity: isExpanded ? 1 : 0,
                            width: isExpanded ? '64px' : 0,
                            height: isExpanded ? '36px' : 0,
                            overflow: 'hidden' 
                        }}
                        className='hidden bg-white bg-opacity-70 absolute md:grid place-items-center rounded-3xl right-2 top-1/2 -translate-y-1/2'>
                        <MoveRight className='text-black opacity-70' />
                    </button>
                    <button
                        ref={submitButtonRef}
                        type="button"
                        onClick={onSearchClicked}
                        style={{
                            transition: '.3s linear',
                            opacity: isExpanded ? 1 : 0,
                            // width: isExpanded ? '64px' : 0,
                            // height: isExpanded ? '36px' : 0,
                            overflow: 'hidden' 
                        }}
                        className='bg-white bg-opacity-70 h-9 w-9 absolute grid md:hidden place-items-center rounded-3xl right-2 top-1/2 -translate-y-1/2'>
                        <ArrowRight className='text-black opacity-70' />
                    </button>
                </form>
                {
                    !isContentVisible &&
                    <p className='self-center text-center'>Optimus Tech Academy 2025 Group 1's Submission to React Project</p>
                }
            </div>
        </div>
    )
}