"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "../../libs/utils";
import Image from "next/image";
import Logo from "../../assets/logo.png";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "Mission & History", href: "/about/mission" },
      { label: "Board of Directors", href: "/about/board" },
      { label: "Staff", href: "/about/staff" },
      { label: "Annual Report", href: "/about/report" },
    ],
  },
  {
    label: "Members",
    href: "/members",
    dropdown: [
      { label: "Designer Directory", href: "/members/directory" },
      { label: "Membership Benefits", href: "/members/benefits" },
      { label: "Join CFDA", href: "/members/join" },
      { label: "Member Resources", href: "/members/resources" },
    ],
  },
  {
    label: "Fashion Calendar",
    href: "/calendar",
  },
  {
    label: "Awards",
    href: "/awards",
    dropdown: [
      { label: "CFDA Fashion Awards", href: "/awards/fashion-awards" },
      { label: "Emerging Designer Awards", href: "/awards/emerging" },
      { label: "Past Winners", href: "/awards/past-winners" },
    ],
  },
  {
    label: "Initiatives",
    href: "/initiatives",
    dropdown: [
      { label: "Sustainability", href: "/initiatives/sustainability" },
      { label: "Diversity & Inclusion", href: "/initiatives/diversity" },
      { label: "Fashion Futures", href: "/initiatives/futures" },
      { label: "Fashion Fund", href: "/initiatives/fund" },
    ],
  },
  {
    label: "News",
    href: "/news",
  },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);
  return (
    <>
      <nav
        className=" backdrop-blur-3xl backdrop-filter bg-black/40
 sticky top-0 z-[99] shadow-lg"
      >
        <div className=" md:rounded-b-2xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between md:justify-around items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src={Logo.src}
                  alt={"cfda official Logo"}
                  width={150}
                  height={100}
                ></Image>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative text-white"
                    onMouseEnter={() =>
                      item.dropdown && handleMouseEnter(item.label)
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "px-4 py-2 rounded-md text-sm md:text-lg font-semibold text-gray-200 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 flex items-center gap-1",
                        activeDropdown === item.label &&
                          "text-red-500 bg-gray-50"
                      )}
                    >
                      {item.label}
                      {item.dropdown && (
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            activeDropdown === item.label && "rotate-180"
                          )}
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {item.dropdown && (
                      <div
                        className={cn(
                          "absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 transition-all duration-200 transform origin-top",
                          activeDropdown === item.label
                            ? "opacity-100 scale-100 visible"
                            : "opacity-0 scale-95 invisible"
                        )}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2  rounded-md bg-white text-red-600 hover:text-gray-100 hover:bg-red-600  transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div
            className="fixed inset-0 backdrop-filter backdrop-blur-xl"
            onClick={toggleMobileMenu}
          />
          <div className="relative bg-white/75 h-full w-full max-w-sm ml-auto shadow-xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-4 py-6 border-b border-gray-100">
                <span className="text-2xl font-bold tracking-tight text-gray-900">
                  CFDA
                </span>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6">
                <div className="px-4 space-y-1">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {item.dropdown && (
                        <div className="ml-4 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
