import { PropsWithChildren } from "react";

export default function Link({children, href}: {href: string} & PropsWithChildren) {
    return (
        <a target='_blank' href={href} className='inline-flex gap-1 items-center text-[#3B82F6] dark:text-[#60A5FA] text-sm'>
            {children}
        </a>
    );
}