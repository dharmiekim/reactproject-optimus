import { Moon, Sun } from "lucide-react";

export default function SlideToggle ({ onToggle, selectedTheme, className="" }: {onToggle: () => void, selectedTheme: string, className?: string}) {

    const isLight = selectedTheme === 'light';
  
    return (
        <div onClick={onToggle} className={`w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 ease-in-out overflow-hidden flex items-center ${className} ${isLight ? 'bg-amber-400' : 'bg-slate-700'}`}>


            <div className={`flex items-center w-fit transition-all duration-300 ${isLight ? '-translate-x-10' : 'translate-x-0'}`}>
                <span className='text-xs font-medium w-10 text-center text-slate-200'>dark</span>

                <div className={`w-6 h-6 rounded-full overflow-hidden transform transition-transform duration-300 ease-in-out relative`} >
                    <div className={`grid place-items-center transition-all duration-300 absolute top-0 left-0 w-full h-full ${isLight ? 'opacity-1' : 'opacity-0'}`}>
                        <Sun className='text-amber-950' size={20} />
                    </div>
                    <div className={`grid place-items-center transition-all duration-300 absolute top-0 left-0 w-full h-full ${isLight ? 'opacity-0' : 'opacity-1'}`}>
                        <Moon className='text-slate-200' size={20} />
                    </div>
                </div>

                <span className='text-xs font-medium w-10 text-center text-amber-950'>light</span>
            </div>
      </div>
    );
};