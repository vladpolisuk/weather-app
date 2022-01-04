import React, { FC } from 'react'

interface Props {
    condition: any;
    skeleton: JSX.Element;
}

export const WithCustomSkeleton: FC<Props> = ({ condition, skeleton, children }) => {
    return !!condition
        ? <>{children}</>
        : <>{skeleton}</>
}
