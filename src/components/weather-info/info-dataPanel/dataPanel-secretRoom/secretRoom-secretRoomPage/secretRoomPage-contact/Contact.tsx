import { FC } from "react"

interface ContactProps {
    contactName: string;
    link: string;
    icon: JSX.Element;
}

export const Contact: FC<ContactProps> = ({ contactName, link, icon }) => {
    const contactStyles = `flex items-center mb-2 justify-start 
            px-2 py-1 bg-black/20 w-fit rounded-full relative
            hover:bg-black/30 active:bg-black/30`;

    return (
        <li className={contactStyles}>
            <div className='mr-2'>{icon}</div>
            <p className='mr-2'>{contactName}</p>
            <a href={link}
                target='_blank'
                rel='noreferrer'
                aria-label={`Go to my ${contactName}`}
                className='absolute w-full h-full left-0 rounded-full'>
            </a>
        </li>
    )
}