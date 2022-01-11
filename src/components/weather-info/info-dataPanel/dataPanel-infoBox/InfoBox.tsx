import React, { FC, HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

export const InfoBox: FC<Props> = ({ children, className = '' }) => {
    return (
        <div className={`relative bg-black/30 px-5 py-3 
            rounded-md mb-3 w-full ${className}`}>
            {children}
        </div>
    )
}
