interface ContainerProps{
    children: React.ReactNode,
    className?: string,
}


export function Container({className, children}: ContainerProps){
    return <div className={`mx-auto max-w-7xl w-full px-5 sm:px-8 lg:px-5 md:px-14 ${className}`}>{children}</div>
}