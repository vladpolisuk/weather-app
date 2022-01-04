import React, { FC, HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & {
    condition: any;
}

export const WithSkeleton: FC<Props> = ({ children, condition, className, ...props }) => {
    return !!condition
        ? <>{children}</>
        : <div className={`animate-pulse ${className}`} {...props}></div>
}
