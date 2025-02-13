import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IconArrowRight } from "~/components/icons/icons";
import BackgroundShadow from "~/components/background-shadow/BackgroundShadow";
import { siteSettings } from "~/settings/site-settings";

export default function MobileMenu() {
  return (
    <>
      <BackgroundShadow></BackgroundShadow>

      <div className="fixed top-0 right-[-26rem] w-[26rem] h-full z-50 py-6 px-8 bg-secondary shadow-lg transition-all">
        <section className="mobile-menu-header w-full flex items-center justify-between mb-12">
          <button className="">
            <IconArrowRight></IconArrowRight>
          </button>
          <Link to="/" className="logo py-1">
            <img src="/logo.svg" alt="" />
          </Link>
        </section>

        <section className="mobile-menu-body">
          <nav className="text-sm uppercase">
            <ul>
              {siteSettings.site_header.menu.map((item, index) => (
                <li key={`mobile-menu-${index}`}>
                  <NavLink
                    to={item.path}
                    className={({ isActive, isPending }) =>
                      `relative flex items-center text-fourth font-medium hover:text-white transition-all py-2 before:content-[''] before:block before:w-0 before:h-[0.20rem] before:bg-white before:rounded-full hover:before:mr-2 hover:before:w-3 before:transition-all ${
                        isPending
                          ? "pending"
                          : isActive
                          ? "active text-white before:w-3"
                          : ""
                      }`
                    }
                    key={`navlink-${index}`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </div>
    </>
  );
}
