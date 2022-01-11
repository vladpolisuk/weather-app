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
            <div className="flex items-center relative hover:underline active:underline">
                <p className="text-md mr-1 xs:text-lg">{technologyName}</p>
                <p className="text-lg text-slate-400 hidden xs:inline">({link})</p>
                <HiExternalLink className="block xs:hidden" />
                <a href={link}
                    target='_blank'
                    rel='noreferrer'
                    aria-label={`Go to ${technologyName}`}
                    className="absolute top-0 left-0 h-full w-full">
                </a>
            </div>
        </li>
    )
}