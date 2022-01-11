export const BaseInfoSkeleton = () => {
    const skeletonStyles = `animate-pulse bg-white/20 px-5 py-4 
            rounded-md flex items-center justify-between w-full mb-4`

    const locationSkeletStyles = `animate-pulse bg-white/30 h-7 w-8 rounded 
            mb-2 sm:mb-0 sm:mr-2 xs:w-24 sm:w-32 lg:w-full xl:w-24`

    return (
        <div className={skeletonStyles}>
            <div className='flex items-start flex-col sm:items-center sm:flex-row'>
                <div className='animate-pulse bg-white/30 w-24 h-7 rounded mb-2 sm:mb-0 sm:mr-2'></div>
                <div className='animate-pulse bg-white/30 w-16 h-7 rounded block lg:hidden xl:block'></div>
            </div>
            <div className='flex items-end flex-col sm:items-center sm:flex-row w-auto lg:w-full xl:w-auto'>
                <div className={locationSkeletStyles}></div>
                <div className='animate-pulse bg-white/30 w-7 h-7 rounded'></div>
            </div>
        </div>
    )
}