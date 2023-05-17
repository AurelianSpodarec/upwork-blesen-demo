import { Link, NavLink } from "react-router-dom";
import logo from "./../../../../src/assets/logo.png";
import { useEffect, useState } from "react";

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1220) setMobileOpen(false);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex flex-wrap p-5 md:flex-row items-center justify-between">

            <div>
            <Link to="/" className="title-font items-center mb-4 md:mb-0">
                <img src={logo} alt="Self Logo" className="h-6" />
                <span className="ml-5 text-xs text-white uppercase sr-only">Blesen</span>
            </Link>
            </div>

            <div className="lg:hidden">
                <button type="button" onClick={() => setMobileOpen(true)}>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><g id="Menu / Hamburger_LG"><path id="Vector" d="M3 17H21M3 12H21M3 7H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                </button>
            </div>

            <div id="mobile" className={`fixed top-0 bottom-0 right-0 w-[80%] z-10 bg-[#1a1a1a] transition duration-150 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>

                <div className="flex justify-between px-4 pt-2">
                    <div></div>
                    <button type="button" onClick={() => setMobileOpen(false)}>
                    <svg className="w-12 h-12 fill-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                    </svg>
                    </button>
                </div>

                <nav className="md:ml-auto flex flex-col text-sm space-y-4 justify-center p-8">
                    <NavLink onClick={() => setMobileOpen(false)} to="/" className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-indigo-500 font-extrabold text-2xl" : "text-white font-extrabold text-2xl"}>Home</NavLink>
                    <NavLink onClick={() => setMobileOpen(false)} to="/about" className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-indigo-500 font-extrabold text-2xl" : "text-white font-extrabold text-2xl"}>About us</NavLink>
                    <NavLink onClick={() => setMobileOpen(false)} to="/contact" className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-indigo-500 font-extrabold text-2xl" : "text-white font-extrabold text-2xl"}>Contact us</NavLink>

                    <Link to="tel:1800878884" className="pt-4 text-white flex align-middle text-2xl items-center font-bold">
                        <svg className="h-5 pr-2 text-white fill-white" viewBox="0 0 512 512"><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
                        <span>1800 878 884</span>
                    </Link>
                </nav>
            </div>


            <div className="hidden lg:flex">
                <nav className="md:ml-auto flex flex-wrap items-center text-sm space-x-10 justify-center">

                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "" : isActive ? "border-b-2 border-blue-500 text-black font-extrabold" : "text-black font-extrabold"}>Home</NavLink>
                <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "" : isActive ? "border-b-2 border-blue-500 text-black font-extrabold" : "text-black font-extrabold"}>About us</NavLink>
                <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "" : isActive ? "border-b-2 border-blue-500 text-black font-extrabold" : "text-black font-extrabold"}>Contact us</NavLink>
                    <Link to="tel:1800878884" className="text-white bg-[#0080fe] flex align-middle items-center py-2 font-bold px-5">
                        <svg className="h-3 pr-2 text-white fill-white" viewBox="0 0 512 512"><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
                        <span>1800 878 884</span>
                    </Link>
                </nav>
            </div>

        </div>
        </header>
    )
}

export default Header;