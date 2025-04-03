import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const routes = {
    home: "/",
    gieAbout: "/gie/about",
    gie: "/gie",
    gieRealisation: "/gie/realisation",
    piImpact: "/pi/impact",
    pi: "/pi",
    piPublication: "/pi/publication",
    piSuccess: "/pi/success",
    etapesImpact: "/etapes/impact",
    etapesPublication: "/etapes/publication",
    etapesSuccess: "/etapes/success",
};

function Layout() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleDropdown = (menu) => setDropdownOpen(dropdownOpen === menu ? null : menu);

    return (
        <div className="App">
            <header className="fixed w-full bg-white shadow-md z-50">
                <nav className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
                    <NavLink to={routes.gie} className="flex items-center space-x-3">
                        <img src={require("../images/logo.jpg")} className="h-12" alt="GIE Logo" />
                        <span className="text-2xl font-semibold">GIE</span>
                    </NavLink>
                    
                    {/* Toggle Button Mobile */}
                    <button onClick={toggleMenu} className="md:hidden p-2 border rounded">
                        ☰
                    </button>
                    
                    {/* Navigation Menu */}
                    <div className={`${menuOpen ? "block" : "hidden"} md:flex md:items-center w-full md:w-auto`}>
                        <ul className="flex flex-col md:flex-row md:space-x-6">
                            <li>
                                <NavLink to={routes.home} className="block py-2 px-3 font-bold hover:text-blue-700">Home</NavLink>
                            </li>

                            {/* Dropdown GIE */}
                            <li className="relative" onMouseEnter={() => setDropdownOpen("gie")} onMouseLeave={() => setDropdownOpen(null)}>
                                <button onClick={() => toggleDropdown("gie")} className="flex items-center py-2 px-3 font-bold hover:text-blue-700">
                                    GIE ▾
                                </button>
                                <ul className={`${dropdownOpen === "gie" ? "block" : "hidden"} absolute left-0 bg-white border rounded shadow-md w-40`}>
                                    <li><NavLink to={routes.gieAbout} className="block py-2 px-3 hover:bg-gray-200">À propos</NavLink></li>
                                    <li><NavLink to={routes.gieRealisation} className="block py-2 px-3 hover:bg-gray-200">Réalisation</NavLink></li>
                                </ul>
                            </li>

                            {/* Dropdown PI */}
                            <li className="relative" onMouseEnter={() => setDropdownOpen("pi")} onMouseLeave={() => setDropdownOpen(null)}>
                                <button onClick={() => toggleDropdown("pi")} className="flex items-center py-2 px-3 font-bold hover:text-blue-700">
                                    PI ▾
                                </button>
                                <ul className={`${dropdownOpen === "pi" ? "block" : "hidden"} absolute left-0 bg-white border rounded shadow-md w-40`}>
                                    <li><NavLink to={routes.piImpact} className="block py-2 px-3 hover:bg-gray-200">Impact</NavLink></li>
                                    <li><NavLink to={routes.piPublication} className="block py-2 px-3 hover:bg-gray-200">Publication</NavLink></li>
                                    <li><NavLink to={routes.piSuccess} className="block py-2 px-3 hover:bg-gray-200">Succès</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Layout;
