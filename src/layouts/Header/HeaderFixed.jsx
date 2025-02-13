import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Search from "~/components/header-search/Search";
import "~/tailwind.css";
import useWindowSize from "~/tools/useWindowSize";
import UserButton from "./UserButton";
import MenuButton from "./MenuButton";

export default function HeaderFixed() {
  const prevScrollTop = useRef(0);
  useEffect(() => {
    const header = document.getElementById("header");
    const headerFixed = document.querySelector(".header-fixed");

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > prevScrollTop.current || window.scrollY < header.offsetHeight) {
        headerFixed.style.top = "-100%";
      } else if (currentScrollTop < prevScrollTop.current && window.scrollY > header.offsetHeight) {
        headerFixed.style.top = "0";
      }

      prevScrollTop.current = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const size = useWindowSize();

  return (
    <>
      <div className="header-fixed w-full fixed top-[-100%] z-50 bg-[#2A2A2A] bg-opacity-90 py-4" style={{ transition: "all 0.4s ease" }}>
        <div className="container mx-auto">
          <div className="header-top-content grid grid-cols-12 gap-6 items-center">
            <div className="col-span-6 md:col-span-4">
              <Link to="/" className="logo py-1">
                <img src="/logo.svg" alt="" />
              </Link>
            </div>

            {size.width > 767 &&
              <div className="col-span-5 lg:col-span-4 header-fixed-search">
                <Search className="bg-black bg-opacity-50 rounded-full h-12" />
              </div>
            }

            <div className="col-span-6 md:col-span-3 lg:col-span-4 flex items-center justify-end gap-3">
              <UserButton />
              <MenuButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
