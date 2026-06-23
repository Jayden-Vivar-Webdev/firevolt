"use client";
import { usePathname } from "next/navigation";

import React, { useEffect, useRef, useState } from "react";
import "../globals.css"; // Make sure this is the correct path to your globals.css file
import Link from "next/link"; // Import Link from next/link
import Image from "next/image"; // Import Image from next/image
import "../output.css";
import "../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faListCheck,
  faClipboardCheck,
  faUserShield,
  faFireExtinguisher,
  faPlugCircleCheck,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import FreeQuote from "./free_quote";

const serviceLinks = [
  {
    href: "/services/all-services",
    label: "All Services",
    description:
      "Explore every fire safety and compliance service in one place.",
    icon: faListCheck,
  },
  {
    href: "/services/compliance",
    label: "Compliance Checks",
    description:
      "WHS audits, risk reviews, and documentation for safer workplaces.",
    icon: faClipboardCheck,
  },
  {
    href: "/services/fire-training",
    label: "Fire Training",
    description:
      "Practical warden and emergency response training for your team.",
    icon: faUserShield,
  },
  {
    href: "/services/extinguisher-services",
    label: "Extinguisher Services",
    description:
      "Inspection, servicing, and maintenance for extinguisher readiness.",
    icon: faFireExtinguisher,
  },
  {
    href: "/services/test-and-tag",
    label: "Test & Tag",
    description: "Electrical test and tag completed to AS/NZS standards.",
    icon: faPlugCircleCheck,
  },
  {
    href: "/services/emergency-plans",
    label: "Emergency Plans & Diagrams",
    description:
      "Site-specific evacuation diagrams and emergency plan support.",
    icon: faMapLocationDot,
  },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const DownArrow = () => {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-200 "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  );
};

const Navbar = () => {
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    setMobileMenuOpen(false);
  };

  const toggleDesktopDropDown = () => {
    setMobileServicesOpen(false);
    setDesktopServicesOpen(!desktopServicesOpen);
  };

  const toggleMobileDropDown = () => {
    setDesktopServicesOpen(false);
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const toggleMobileMenu = () => {
    setDesktopServicesOpen(false);
    if (isMobileMenuOpen) {
      setMobileServicesOpen(false);
    }
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = () => {
    setMobileMenuOpen(false);
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);
  };

  const isServiceActive = (href: string) => {
    if (href === "/services/all-services" && pathname === "/services") {
      return true;
    }
    return pathname === href;
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow || "";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const desktopLinkClass = (isActive: boolean) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive
        ? "bg-primary-50 text-primary-10"
        : "text-secondary-700 hover:bg-white hover:text-primary-10"
    }`;

  const mobileLinkClass = (isActive: boolean) =>
    `block rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
      isActive
        ? "bg-primary-50 text-primary-10"
        : "text-secondary-700 hover:bg-gray-50 hover:text-primary-10"
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur">
        <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 py-3">
          <Link href="/" onClick={handleNavigation} className="shrink-0">
            <Image
              src="/images/Firevolt_CenteredLogo(CMYK-LBG).jpg"
              alt="Firevolt logo"
              height={88}
              width={176}
              className="h-auto w-[160px] sm:w-[176px]"
            />
          </Link>

          <div className="hidden xl:flex flex-1 items-center justify-end gap-4">
            <nav className="rounded-full border border-slate-200 bg-slate-50/80 p-1.5 shadow-sm">
              <ul className="flex items-center gap-1">
                <li>
                  <Link
                    href={navLinks[0].href}
                    className={desktopLinkClass(pathname === navLinks[0].href)}
                  >
                    {navLinks[0].label}
                  </Link>
                </li>

                <li className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={toggleDesktopDropDown}
                    aria-expanded={desktopServicesOpen}
                    aria-controls="desktop-services-dropdown"
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                      pathname.includes("/services")
                        ? "bg-primary-50 text-primary-10"
                        : "text-secondary-700 hover:bg-white hover:text-primary-10"
                    }`}
                  >
                    Services
                    <span
                      className={`${desktopServicesOpen ? "rotate-180" : ""} transition-transform`}
                    >
                      <DownArrow />
                    </span>
                  </button>

                  {desktopServicesOpen && (
                    <div
                      id="desktop-services-dropdown"
                      className="absolute left-1/2 top-full mt-3 w-[640px] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_48px_-24px_rgba(15,23,42,0.35)]"
                    >
                      <div className="bg-slate-50/90 px-5 py-4">
                        <p className="text-sm font-semibold text-secondary-900">
                          Service Directory
                        </p>
                        <p className="mt-1 text-xs text-secondary-500">
                          Fast access to all Firevolt service pages.
                        </p>
                      </div>

                      <ul className="grid grid-cols-2 gap-2 p-3">
                        {serviceLinks.map((service) => (
                          <li key={service.href}>
                            <Link
                              href={service.href}
                              onClick={handleNavigation}
                              className={`block rounded-xl border p-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 ${
                                isServiceActive(service.href)
                                  ? "border-primary-10 bg-slate-50 shadow-sm "
                                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span
                                  className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                                    isServiceActive(service.href)
                                      ? "border-primary-100 bg-white text-primary-10"
                                      : "border-slate-200 bg-slate-100 text-slate-500"
                                  }`}
                                >
                                  <FontAwesomeIcon
                                    icon={service.icon}
                                    className="text-xs"
                                  />
                                </span>
                                <span
                                  className={`text-sm font-semibold ${isServiceActive(service.href) ? "text-secondary-900" : "text-secondary-800"}`}
                                >
                                  {service.label}
                                </span>
                              </div>
                              <p className="mt-1.5 text-xs leading-relaxed text-secondary-500">
                                {service.description}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <div className="border-t border-slate-100 p-3">
                        <Link
                          href="/services/all-services"
                          onClick={handleNavigation}
                          className="block rounded-lg bg-primary-10 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-primary-700"
                        >
                          View All Services
                        </Link>
                      </div>
                    </div>
                  )}
                </li>

                {navLinks.slice(1).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={desktopLinkClass(pathname === link.href)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              onClick={togglePopup}
              className="rounded-full bg-primary-10 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700 hover:shadow-md"
            >
              Free Quote Now
            </button>
          </div>

          <button
            className="xl:hidden flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-lg text-secondary-700 transition hover:bg-slate-50"
            id="mobile-menu-button"
            aria-label="Mobile Menu Button"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            className="xl:hidden pb-3 max-h-[calc(100vh-88px)] overflow-y-auto overscroll-contain"
            id="mobile-menu"
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_20px_36px_-28px_rgba(15,23,42,0.45)]">
              <nav>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href={navLinks[0].href}
                      onClick={handleNavigation}
                      className={mobileLinkClass(pathname === navLinks[0].href)}
                    >
                      {navLinks[0].label}
                    </Link>
                  </li>

                  <li>
                    <button
                      type="button"
                      onClick={toggleMobileDropDown}
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services-dropdown"
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${
                        pathname.includes("/services")
                          ? "bg-primary-50 text-primary-10"
                          : "text-secondary-700 hover:bg-gray-50 hover:text-primary-10"
                      }`}
                    >
                      Services
                      <span
                        className={`${mobileServicesOpen ? "rotate-180" : ""} transition-transform`}
                      >
                        <DownArrow />
                      </span>
                    </button>

                    {mobileServicesOpen && (
                      <div
                        id="mobile-services-dropdown"
                        className="mt-2 rounded-xl border border-slate-200 bg-slate-50/70 p-2"
                      >
                        <ul className="space-y-2">
                          {serviceLinks.map((service) => (
                            <li key={service.href}>
                              <Link
                                href={service.href}
                                onClick={handleNavigation}
                                className={`block rounded-lg border px-3 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 ${
                                  isServiceActive(service.href)
                                    ? "border-slate-200 bg-slate-50 shadow-sm ring-1 ring-primary-100/70"
                                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <span
                                    className={`flex h-7 w-7 items-center justify-center rounded-full border ${
                                      isServiceActive(service.href)
                                        ? "border-primary-100 bg-white text-primary-10"
                                        : "border-slate-200 bg-slate-100 text-slate-500"
                                    }`}
                                  >
                                    <FontAwesomeIcon
                                      icon={service.icon}
                                      className="text-[10px]"
                                    />
                                  </span>
                                  <p
                                    className={`text-sm font-semibold ${isServiceActive(service.href) ? "text-secondary-900" : "text-secondary-700"}`}
                                  >
                                    {service.label}
                                  </p>
                                </div>
                                <p className="mt-1 text-xs text-secondary-500">
                                  {service.description}
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>

                  {navLinks.slice(1).map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={handleNavigation}
                        className={mobileLinkClass(pathname === link.href)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}

                  <li className="pt-2">
                    <button
                      onClick={togglePopup}
                      className="w-full rounded-xl bg-primary-10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-700"
                    >
                      Free Quote Now
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
        </div>
      </header>

      <FreeQuote isPopupOpen={isPopupOpen} togglePopup={togglePopup} />
    </>
  );
};

export default Navbar;
