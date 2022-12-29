import '@fontsource/rubik';
import React, { FC, MouseEvent } from 'react';
import { Animated } from 'react-animated-css';
import FocusLock from 'react-focus-lock';
import { BsStack } from "react-icons/bs";
import {
    FaFacebook, FaGithub, FaPhoneAlt, FaPlus,
    FaReact, FaTelegram, FaTimesCircle
} from 'react-icons/fa';
import { MdAlternateEmail } from "react-icons/md";
import { SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";
import { HelloEmoji, Vlad, BestNotesApp, GOWeather, GOWeatherGitHub } from './components';
import { Contact } from './secretRoomPage-contact/Contact';
import { Technology } from './secretRoomPage-technology/Technology';

interface Props {
    isOpen: boolean;
    onClose: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const SecretRoomPage: FC<Props> = ({ isOpen, onClose }) => {
    const animatedStyles = `${isOpen ? 'absolute' : 'hidden'} top-0 left-0 w-screen h-screen`

    const secretRoomStyles = `font-[rubik] flex absolute top-0 overflow-hidden
            w-screen h-screen flex-col items-center justify-start left-0
            bg-gradient-to-tr from-[#d40e0e] to-purple-700 `

    const secretRoomHeaderStyles = `flex items-center bg-black/10
            w-full px-2 py-1 sticky top-0 justify-between`


    return (
        <Animated
            isVisible={isOpen}
            animationIn="fadeInUp"
            animationOut="fadeOut"
            style={{ zIndex: 100 }}
            animationInDuration={300}
            animationOutDuration={100}
            className={animatedStyles}>
            <FocusLock>
                <div className={secretRoomStyles}>
                    <div style={{ zIndex: 110 }}
                        className={secretRoomHeaderStyles}>
                        <h2 className='select-none font-bold text-xl px-5'>
                            vladislav124352
                        </h2>
                        <button className='p-4' onClick={onClose}>
                            <FaTimesCircle className='w-8 h-8' />
                        </button>
                    </div>

                    <div className='overflow-auto w-full h-fit p-8'>
                        <div className='max-w-[700px] m-auto'>
                            <p className='mb-5 text-md break-words text-center md:text-left ml:text-lg xs:text-xl'>
                                {HelloEmoji} Hi, my name's {Vlad} and I... wait... do I know you? Yeah, I know you.
                                I saw you in my other app {BestNotesApp}. How are you?
                                How did you get here!? Okay, you don't have to answer, anyway I won't know...
                                All right, this is my <b>new app!</b> {GOWeather}
                            </p>

                            <p className='mb-4 text-md break-words text-center md:text-left ml:text-lg xs:text-xl'>
                                Well, I'm frontend-developer and I made this web app.
                                If you are interested in the sources, then here - {GOWeatherGitHub}
                            </p>

                            <hr className='mb-3' />

                            <div className='flex items-center justify-center xs:justify-start mb-2'>
                                <p className='flex mr-2 font-bold text-lg xs:text-xl'>My stack</p>
                                <BsStack className='w-5 h-5' />
                            </div>

                            <ul className='ml-5 mb-5'>
                                <Technology
                                    technologyName='React'
                                    link='https://reactjs.org'
                                    icon={<FaReact className='w-6 h-6 mr-2 text-cyan-400' />} />

                                <Technology
                                    technologyName='Redux'
                                    link='https://redux.js.org/'
                                    icon={<SiRedux className='w-6 h-6 mr-2 text-purple-600' />} />

                                <Technology
                                    link='https://www.typescriptlang.org/'
                                    technologyName='TypeScript'
                                    icon={<SiTypescript className='w-6 h-6 mr-2 text-blue-400' />} />

                                <Technology
                                    link='https://https://tailwindcss.com/'
                                    technologyName='Tailwind.css'
                                    icon={<SiTailwindcss className='w-6 h-6 mr-2 text-blue-500' />} />

                                <Technology
                                    technologyName='Formik'
                                    link='https://formik.org/'
                                    icon={<FaPlus className='w-5 h-5 ml-[3px] mr-[10px]' />} />
                            </ul>

                            <div className='flex items-center justify-center xs:justify-start mb-2'>
                                <p className='flex mr-2 font-bold text-lg xs:text-xl'>My contacts</p>
                                <FaPhoneAlt className='w-5 h-5' />
                            </div>

                            <ul className='pl-4'>
                                <Contact
                                    contactName='Telegram'
                                    link='https://t.me/vladislav124352'
                                    icon={<FaTelegram className='w-5 h-5' />} />

                                <Contact
                                    contactName='GitHub'
                                    link='https://github.com/vladislav124352'
                                    icon={<FaGithub className='w-5 h-5' />} />

                                <Contact
                                    contactName='vladpolisuk159@gmail.com'
                                    link='mailto:vladpolisuk159@gmail.com'
                                    icon={<MdAlternateEmail className='w-5 h-5' />} />
                            </ul>
                        </div>
                    </div>
                </div>
            </FocusLock>
        </Animated>
    )
}
