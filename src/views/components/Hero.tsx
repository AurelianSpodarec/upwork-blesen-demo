function Hero({ kicker, title, description, image, link, size = "large" }:any) {

    const sizes:any = {
        "small": "py-20",
        "large": "py-40"
    }

    return (
    <div className={`bg-[#000f21] relative  ${sizes[size]}`}>
    <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">

        <div className="lg:col-span-8 xl:col-span-8 px-8 mb-10 lg:mb-0">
        <div className="mx-auto max-w-2xl lg:mx-0 pr-8">

            {kicker && <h3 className="text-white text-sm font-bold mb-3">{kicker}</h3>}
            {title && <h1 className="text-white text-4xl font-bold mb-12">{title}</h1>}
            {description && <p className="text-white text-sm leading-[2em] font-bold mb-12">{description}</p>}
            <button className="text-white outline outline-1 uppercase font-bold text-xs tracking-[3px] py-4 px-4 flex items-center space-x-2 align-middle">
                <span>{link?.text}</span>
                <svg className="w-4" xmlns="http:www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"></path></svg>    
            </button>     
          
        </div>
        </div>

        <div className="relative lg:col-span-4 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <div className="bg-opacity-70 absolute top-0 bottom-0 z-20 w-[30%] left-0 h-full" style={{ boxShadow: "inset 90px -9px 48px -31px rgb(0 15 33)"}}></div>
            <img
                className="w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                src={image}
                alt=""
            />
        </div>
    </div>
    </div>
        // <div className={`bg-[#000f21] relative  ${sizes[size]}`}>

        // <div className="absolute top-0 bottom-0 right-0 h-full w-full bg-cover" style={{ background: `url(${image}) no-repeat right `}}></div>

        // <div className="container px-8 mx-auto max-w-5xl">

        //     <div className="grid grid-cols-12 gap-8">
        //         <div className="col-span-7 relative"> 

        //             {kicker && <h3 className="text-white text-sm font-bold mb-3">{kicker}</h3>}
        //             {title && <h1 className="text-white text-4xl font-bold mb-12">{title}</h1>}
        //             {description && <p className="text-white text-sm leading-[2em] font-bold mb-12">{description}</p>}
        //             <button className="text-white outline outline-1 uppercase font-bold text-xs tracking-[3px] py-4 px-4 flex items-center space-x-2 align-middle">
        //                 <span>{link?.text}</span>
        //                 <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"></path></svg>    
        //             </button>
        //         </div>

        //         <div className="col-span-4">
        //             {/* <img src={image} className="h-full w-full max-w-[600px] object-cover absolute top-0 right-0 bottom-0" /> */}
        //         </div>
        //     </div>

        // </div>
        // </div>
    )
}

export default Hero;