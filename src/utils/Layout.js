import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "flowbite";

const routes = {
    home: "/",
    gieAbout: "/gie/about",
    gie:"/gie",
    gieRealisation: "/gie/realisation",
    piImpact: "/pi/impact",
    pi:"/pi",
    piPublication: "/pi/publication",
    piSuccess: "/pi/success",
    etapesImpact: "/etapes/impact",
    etapesPublication: "/etapes/publication",
    etapesSuccess: "/etapes/success",
};

function Layout() {
    useEffect(() => {
        if (window.Flowbite) {
            window.Flowbite.init();
        }
    }, []);

    return (
        <div className="App">
            <header class="fixed w-full">


                <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <NavLink to={routes.gie} className="flex items-center space-x-3">
                            <img src={require("../images/logo.jpg")} className="h-12" alt="GIE Logo" />
                            <span className="text-2xl font-semibold dark:text-white">GIE</span>
                        </NavLink>
                        <button
                            data-collapse-toggle="navbar-dropdown"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700"
                            aria-controls="navbar-dropdown"
                            aria-expanded="false"
                        >
                            <span className="sr-only"></span>
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className="hidden md:block md:w-auto" id="navbar-dropdown">
                            <ul className="flex flex-col md:flex-row md:space-x-8">
                                <li>
                                    <NavLink to={routes.home} className={({ isActive }) =>
                                        `block py-2 px-3 font-bold rounded-sm ${isActive ? "text-blue-700 " : "text-gray-900"} hover:text-blue-700 `
                                    }>
                                        Home
                                    </NavLink>
                                </li>

                                {/* Dropdown GIE */}
                                <li className="relative group">
                                    <button className="flex items-center py-2 px-3 text-gray-900 rounded-sm font-bold hover:text-blue-700">
                                        GIE
                                        <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6" fill="none">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    <ul className="absolute hidden group-hover:block bg-white border rounded-md shadow-md dark:bg-gray-700">
                                        <li>
                                            <NavLink to={routes.gieAbout} className={({ isActive }) =>
                                                `block py-2 px-3 font-bold rounded-sm ${isActive ? "text-blue-700 " : "text-gray-900"} hover:text-blue-700 `
                                            }>
                                                À propos
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={routes.gieRealisation} className={({ isActive }) =>
                                                `block py-2 px-3 font-bold rounded-sm ${isActive ? "text-blue-700 " : "text-gray-900"} hover:text-blue-700 `
                                            }>
                                                Réalisation
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>

                                {/* Dropdown PI */}
                                <li className="relative group">
                                    <NavLink  to={routes.pi} className="flex items-center py-2 px-3 text-gray-900 rounded-sm font-bold hover:text-blue-700">
                                        PI
                                        <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6" fill="none">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </NavLink>
                                    <ul className="absolute hidden group-hover:block bg-white border rounded-md shadow-md dark:bg-gray-700">
                                        <li>
                                            <NavLink to={routes.piImpact} className={({ isActive }) =>
                                                `block py-2 px-3 font-bold rounded-sm ${isActive ? "text-blue-700 " : "text-gray-900"} hover:text-blue-700 `
                                            }>
                                                Impact
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={routes.piPublication} className={({ isActive }) =>
                                                `block py-2 px-3 font-bold rounded-sm ${isActive ? "text-blue-700 " : "text-gray-900"} hover:text-blue-700 `
                                            }>
                                                Publication
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={routes.piSuccess} className={({ isActive }) =>
                                                `block py-2 px-3 font-bold rounded-sm ${isActive ? "text-blue-700 " : "text-gray-900"} hover:text-blue-700 `
                                            }>
                                                Succès
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>

                                {/* Dropdown Étapes */}
                                <li className="relative group">
                                    <button className="flex items-center py-2 px-3 text-gray-900 rounded-sm font-bold hover:text-blue-700">
                                        Étapes
                                        <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6" fill="none">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    <ul className="absolute hidden group-hover:block bg-white border rounded-md shadow-md dark:bg-gray-700">
                                        <li>
                                            <NavLink to={routes.etapesImpact} className={({ isActive }) =>
                                                `block py-2 px-3 font-bold rounded-sm ${isActive ? "text-blue-700 " : "text-gray-900"} hover:text-blue-700 `
                                            }>
                                                Impact
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={routes.etapesPublication} className={({ isActive }) =>
                                                `block py-2 px-3 font-bold rounded-sm ${isActive ? "text-blue-700 " : "text-gray-900"} hover:text-blue-700 `
                                            }>
                                                Publication
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={routes.etapesSuccess} className={({ isActive }) =>
                                                `block py-2 px-3 font-bold rounded-sm ${isActive ? "text-blue-700 " : "text-gray-900"} hover:text-blue-700 `
                                            }>
                                                Succès
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="lg:px-20 sm:px-2">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
