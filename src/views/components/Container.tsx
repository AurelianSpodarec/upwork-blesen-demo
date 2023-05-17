function Container({ children }:any) {
    return (
        <div className="container px-8 mx-auto max-w-6xl">
            {children}
        </div>
    )
}

export default Container;