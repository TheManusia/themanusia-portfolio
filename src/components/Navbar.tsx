import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import {useEffect, useState} from "react";

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    function openNav() {
        setOpen(!open)
    }

    return (
        <header className="sticky top-0 z-50">
            <div className={`w-full text-gray-700 bg-white ${scrollPosition > 0 ? 'shadow-md' : ''}`}>
                <div
                    className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div className="p-4 flex flex-row items-center justify-between">
                        <a href="#"
                           className="flex flex-row text-lg font-semibold tracking-widest text-gray-900 rounded-lg focus:outline-none focus:shadow-outline">
                            <img
                                className="block h-8 w-auto lg:hidden"
                                src="https://ik.imagekit.io/6fnl649yp/icon/reimu.png?updatedAt=1679770203990"
                                alt="TheManusia"
                            />
                            <img
                                className="hidden h-8 w-auto lg:block"
                                src="https://ik.imagekit.io/6fnl649yp/icon/reimu.png?updatedAt=1679770203990"
                                alt="TheManusia"
                            />
                            <span className="pl-2">TheManusia</span>
                        </a>
                        <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
                                onClick={openNav}>
                            <XMarkIcon className={`w-6 h-6 ${open ? "inline" : "hidden"}`}/>
                            <Bars3Icon className={`w-6 h-6 ${open ? "hidden" : "inline"}`}/>
                        </button>
                    </div>
                    <nav className={`${open ? "flex" : "hidden"} flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
                        <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200"
                           href="#">About</a>
                        <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200"
                           href="#">Skills</a>
                        <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200"
                           href="#">Educations</a>
                        <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200"
                           href="#">Experiences</a>
                        <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200"
                           href="#">Projects</a>
                        <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200"
                           href="#">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};