import React, { useContext, useState } from 'react'
import SearchContainer from './SearchContainer'
import { ThemeContext, ThemeContextType } from '../App';
import SlideToggle from '../atoms/SlideToggle';
import About from './About';
import SearchResult from './SearchResult';

export default function Modal() {
    const { setTheme, theme } = useContext(ThemeContext) as ThemeContextType;    
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentView, setCurrentView] = useState<'home' | 'about'>('home');

    return (
        <div className='relative w-full max-w-7xl h-[95%] rounded-3xl bg-white dark:bg-[#1A2438D9] bg-opacity-85 p-4 border border-[#1E293B1A] dark:border-[#E2E8F01A]'>
            <SlideToggle className={`absolute top-4 right-4 z-50`} selectedTheme={theme} onToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
            <div className='w-full h-full overflow-hidden'>
                <div className={`h-[200%] transition-transform duration-300 ${currentView === 'home' ? 'translate-y-0' : '-translate-y-1/2'}`}>
                    <div className='h-1/2 flex flex-col overflow-hidden'>
                        <SearchContainer onAboutUsClicked={() => setCurrentView('about')} handleSearchClicked={setSearchTerm} isContentVisible={isContentVisible} setIsContentVisible={setIsContentVisible} />
                        {
                            isContentVisible &&
                            <SearchResult searchTerm={searchTerm} />
                        }
                    </div>
                    <div className='h-1/2 flex flex-col overflow-hidden'>
                        <About onBackClicked={() => setCurrentView('home')} />
                    </div>
                </div>
            </div>
        </div>
    );
}
