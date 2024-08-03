import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import {
    MobileNav,
    Typography,
    IconButton
} from "@material-tailwind/react";
export default function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold"
            >
                <NavLink to="/about" className="flex items-center ms-3 px-2 py-1 rounded-md">
                    ABOUT
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold"
            >
                <NavLink to="/portfolio" className="flex items-center ms-3 px-2 py-1 rounded-md">
                    PORTFOLIO
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold"
            >
                <NavLink to="/contact" className="flex items-center ms-3 px-2 py-1 rounded-md">
                    CONTACT
                </NavLink>
            </Typography>
        </ul>
    );
    return (
        <>
            <div className="max-h-[768px] w-full overflow-hidden bg-slate-700 py-10">
                <nav className=" top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 text-white">
                    <div className="flex items-center justify-between ">
                        <Link
                            as="a"
                            to="/main"
                            className="cursor-pointer py-1.5 text-3xl font-bold lg:ms-20"
                        >
                            START FRAMEWORK
                        </Link>
                        <div className="flex items-center gap-4">
                            <div className=" hidden lg:block lg:me-40">{navList}</div>
                            <IconButton
                                variant="text"
                                className="ml-auto mr-5  h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </IconButton>
                        </div>
                    </div>
                    <MobileNav open={openNav}>
                        {navList}
                    </MobileNav>
                </nav>
            </div>
        </>
    )
}
