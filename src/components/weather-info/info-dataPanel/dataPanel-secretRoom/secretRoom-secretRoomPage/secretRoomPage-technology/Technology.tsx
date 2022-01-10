import { FC } from "react"
import { HiExternalLink } from "react-icons/hi"

interface TechnologyProps {
    technologyName: string;
    link: string;
    icon: JSX.Element;
}

export const Technology: FC<TechnologyProps> = ({ technologyName, link, icon }) => {
    return (
        <li className='flex items-center mb-2 justify-start'>
            <div>{icon}</div>
            <a href={link}
                target='_blank'
                rel='noreferrer'
                aria-label={`Go to ${technologyName}`}
                className='text-md mr-1 hover:underline 
                active:underline xs:text-lg'>
                {technologyName}
            </a>
            <a href={link}
                target='_blank'
                rel='noreferrer'
                aria-label={`Go to ${technologyName}`}
                className='text-lg text-slate-400 hover:underline 
                active:underline hidden xs:inline'>
                ({link})
            </a>
            <a href={link}
                target='_blank'
                rel='noreferrer'
                className='block xs:hidden'
                aria-label={`Go to ${technologyName}`}>
                <HiExternalLink className='w-5 h-5 ' />
            </a>
        </li>
    )
}