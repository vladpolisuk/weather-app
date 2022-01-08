export const BaseInfoSkeleton = () => {
    const skeletonStyles = `animate-pulse bg-white/20 px-5 py-3 
            rounded-md flex items-center justify-between w-full mb-3`

    return (
        <div className={skeletonStyles}>
            <div className='flex items-start flex-col sm:items-center sm:flex-row'>
                <div className='animate-pulse bg-white/30 w-24 h-7 rounded mb-2 sm:mb-0 sm:mr-2'></div>
                <div className='animate-pulse bg-white/30 w-16 h-7 rounded'></div>
            </div>
            <div className='flex items-end flex-col sm:items-center sm:flex-row'>
                <div className='animate-pulse bg-white/30 w-8 h-7 rounded mb-2 sm:mb-0 sm:mr-2 xs:w-24 sm:w-32'></div>
                <div className='animate-pulse bg-white/30 w-8 h-7 rounded'></div>
            </div>
        </div>
    )
}