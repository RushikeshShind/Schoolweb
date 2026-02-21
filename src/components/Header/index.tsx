"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import { useModal } from "@/context/ModalContext";

const Header = () => {
  const { openAdmissionModal } = useModal();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className="header top-0 left-0 z-40 w-full fixed z-[9999] transition-all"
      >
        {/* Top Bar */}
        <div className="bg-primary py-1 lg:py-2 text-white text-[9px] sm:text-xs lg:text-sm">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-1 md:gap-0">
            <div className="flex flex-col sm:flex-row space-y-0.5 sm:space-y-0 sm:space-x-4 lg:space-x-6 items-center">
              <span className="max-w-[280px] sm:max-w-none line-clamp-1 sm:line-clamp-none">Muchhala College Bus Stop, Sai baba Vihar Complex, Ghodbunder Road, Thane</span>
              <span className="sm:border-l border-white/30 sm:pl-4 lg:pl-6 leading-none">400 615</span>
            </div>
            <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 lg:space-x-6 items-center uppercase tracking-wider font-medium">
              <Link href="/news" className="hover:text-white/80 transition-all">News & Update</Link>
              <Link href="/downloads" className="hover:text-white/80 transition-all border-l border-white/30 pl-2 sm:pl-4 lg:pl-6">NAAC</Link>
              <Link href="/rnd" className="hover:text-white/80 transition-all border-l border-white/30 pl-2 sm:pl-4 lg:pl-6">Grievance</Link>
              <Link href="/blogs" className="hover:text-white/80 transition-all border-l border-white/30 pl-2 sm:pl-4 lg:pl-6">Events</Link>
              <Link href="/career" className="hover:text-white/80 transition-all border-l border-white/30 pl-2 sm:pl-4 lg:pl-6">Career</Link>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className={`w-full transition-all duration-300 ${sticky ? "bg-white/80 backdrop-blur-md shadow-md py-1 lg:py-2" : "bg-transparent py-2 lg:py-6"}`}>
          <div className="container">
            <div className="relative -mx-4 flex items-center justify-between">
              <div className="w-56 sm:w-[350px] max-w-full px-4 xl:mr-12">
                <Link
                  href="/"
                  className="header-logo block w-full"
                >
                  <Image
                    src="/AMIG.png"
                    alt="logo"
                    width={350}
                    height={85}
                    className={`w-full h-auto transition-all ${!sticky && "brightness-0 invert"}`}
                  />
                </Link>
              </div>
              <div className="flex w-full items-center justify-end px-4 gap-2 sm:gap-4">
                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/20 absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                    ? "visibility top-full opacity-100 shadow-xl"
                    : "invisible top-[120%] opacity-0"
                    }`}
                >
                  <ul className="block lg:flex lg:space-x-8">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base font-semibold lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              usePathName === menuItem.path
                                ? (sticky ? "text-primary" : "text-white")
                                : (sticky ? "text-dark hover:text-primary" : "text-white/90 hover:text-white underline-offset-8 hover:underline transition-all")
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className={`${sticky ? "text-dark group-hover:text-primary" : "text-white group-hover:text-white"} flex cursor-pointer items-center justify-between py-2 text-base font-semibold lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
                            >
                              {menuItem.title}
                              <span className="pl-1">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative top-full left-0 rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"
                                }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path || "#"}
                                  key={index}
                                  className="text-dark hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="flex items-center gap-1.5 sm:gap-4">
                  <button
                    onClick={openAdmissionModal}
                    className="bg-primary text-white px-2.5 py-1.5 sm:px-7 sm:py-3 rounded-full text-[9px] sm:text-base font-bold flex items-center hover:bg-primary-dark transition-all whitespace-nowrap cursor-pointer"
                  >
                    Apply Now
                    <svg
                      className="ml-1 sm:ml-2 w-2.5 h-2.5 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={navbarToggleHandler}
                    id="navbarToggler"
                    aria-label="Mobile Menu"
                    className="block rounded-lg px-1.5 py-[3px] sm:px-3 sm:py-[6px] focus:ring-2 lg:hidden bg-primary"
                  >
                    <span
                      className={`relative my-0.5 sm:my-1 block h-0.5 w-[18px] sm:w-[30px] bg-white transition-all duration-300 ${navbarOpen ? "top-[5px] sm:top-[7px] rotate-45" : " "
                        }`}
                    />
                    <span
                      className={`relative my-0.5 sm:my-1 block h-0.5 w-[18px] sm:w-[30px] bg-white transition-all duration-300 ${navbarOpen ? "opacity-0" : " "
                        }`}
                    />
                    <span
                      className={`relative my-0.5 sm:my-1 block h-0.5 w-[18px] sm:w-[30px] bg-white transition-all duration-300 ${navbarOpen ? "top-[-5px] sm:top-[-8px] -rotate-45" : " "
                        }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
