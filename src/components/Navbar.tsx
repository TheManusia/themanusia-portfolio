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
        window.addEventListener("scroll", handleScroll, {passive: true});

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        return () => {
            let url = window.location.href.split("/");
            let target = url[url.length - 1].toLowerCase();
            let element = document.getElementById(target);
            element && element.scrollIntoView({behavior: "smooth", block: "start"});
        };
    }, []);


    function openNav() {
        setOpen(!open);
    }

    function goToSection(section: string, e: { preventDefault: () => void }) {
        let sec = document.getElementById(section);
        e.preventDefault();  // Stop Page Reloading
        sec && sec.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(section, section, `/${section}`);
    }

    function goToTop(event: { preventDefault: () => void }) {
        window.scrollTo({top: 0, behavior: "smooth"});
        event.preventDefault();
        window.history.pushState("", "", `/`);
    }

    return (
        <header className="sticky top-0 z-50">
            <div className={`w-full text-gray-700 bg-white ${scrollPosition > 0 ? "shadow-md" : ""}`}>
                <div
                    className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div className="p-4 flex flex-row items-center justify-between">
                        <a href="/"
                            onClick={goToTop}
                           className="flex flex-row text-lg font-semibold tracking-widest text-gray-900 rounded-lg focus:outline-none focus:shadow-outline">
                            <span className="pl-2">TheManusia</span>
                        </a>
                        <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
                                onClick={openNav}>
                            <XMarkIcon className={`w-6 h-6 ${open ? "inline" : "hidden"}`}/>
                            <Bars3Icon className={`w-6 h-6 ${open ? "hidden" : "inline"}`}/>
                        </button>
                    </div>
                    <nav
                        className={`${open ? "flex" : "hidden"} flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
                        <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200"
                           onClick={event => goToSection("about", event)}
                           href="/">About</a>
                        <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200"
                           onClick={event => goToSection("skills", event)}
                           href="/">Skills</a>
                        <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200"
                           onClick={event => goToSection("educations", event)}
                           href="/">Educations</a>
                        <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200"
                           onClick={event => goToSection("experiences", event)}
                           href="/">Experiences</a>
                        <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200"
                           onClick={event => goToSection("projects", event)}
                           href="/">Projects</a>
                        <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200"
                           onClick={event => goToSection("contact", event)}
                           href="/">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};