import React from "react";
import { Link, NavLink } from "react-router-dom";
import { siteSettings } from "~/settings/site-settings";
import "~/tailwind.css";
import useWindowSize from "~/tools/useWindowSize";
import MenuButton from "./MenuButton";
import UserButton from "./UserButton";

export default function Header() {
  const size = useWindowSize();

  return (
    <>
      <header id="header">
        <div className="header-top bg-[#2A2A2A] bg-opacity-75 py-4 px-4">
          <div className="container mx-auto">
            <div className="header-top-content flex items-center">
              <Link to="/" className="logo py-1 mr-auto">
                <img src="/logo.svg" alt="" />
              </Link>

              {/* Navigation -start */}
              {size.width > 1024 &&
                <nav className="flex items-center justify-end text-sm uppercase">
                  {siteSettings.site_header.menu.map((item, index) => (
                    <NavLink
                      to={item.path}
                      className={({ isActive, isPending }) =>
                        `relative block text-fourth font-medium hover:text-white transition-all py-2 px-6 after:content-[''] after:w-4 after:h-[0.20rem] after:bg-white after:absolute after:bottom-[-8px] after:left-[50%] after:translate-x-[-50%] after:rounded-full after:opacity-0 hover:after:bottom-0 hover:after:opacity-100 after:transition-all ${isPending
                          ? "pending"
                          : isActive
                            ? "active text-white after:bottom-[0!important] after:opacity-100"
                            : ""
                        }`
                      }
                      key={`navlink-${index}`}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
              }
              {/* Navigation -end */}

              <button
                type="button"
                className="hidden lg:inline-block bg-primary rounded-full text-sm font-medium text-third text-center w-[7rem] h-[2.75rem] transition-all hover:bg-primary-hover ml-6"
              >
                Giriş Yap
              </button>
              <div className="lg:hidden flex items-center justify-end gap-3">
                <UserButton />
                <MenuButton />
              </div>
            </div>
          </div>
        </div>

        {size.width > 1024 &&
          <div className="header-bottom py-6">
            <div className="container">
              <div className="header-bottom-content">
                <div className="grid grid-cols-12 items-center gap-6">
                  <div className="col-span-2">
                    <form action="" className="relative">
                      <button type="submit" className="absolute top-0 left-0 w-11 h-full flex items-center justify-center" >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.48486 8.4798L11.7916 10.7861C12.0695 11.0637 12.0695 11.514 11.7916 11.7917C11.6529 11.9306 11.4707 12 11.2887 12C11.1067 12 10.9246 11.9306 10.7858 11.7917L8.47906 9.48539C7.56387 10.1843 6.4538 10.5677 5.28242 10.5678C3.8708 10.5678 2.54358 10.0182 1.54542 9.02005C-0.51514 6.9601 -0.51514 3.60792 1.54542 1.54761C2.54358 0.549669 3.8708 0 5.28242 0C6.69422 0 8.02127 0.549669 9.01943 1.54761C10.0178 2.54556 10.5675 3.87251 10.5675 5.28383C10.5674 6.45496 10.184 7.5648 9.48486 8.4798ZM2.39107 2.39263C0.858238 3.92546 0.858062 6.41937 2.39107 7.95202C3.13371 8.69448 4.12118 9.10345 5.17141 9.10345C6.22181 9.10345 7.20911 8.69448 7.95175 7.95202C8.69439 7.20955 9.10345 6.22249 9.10345 5.17233C9.10345 4.12234 8.69439 3.1351 7.95175 2.39263C7.20911 1.65034 6.22181 1.24138 5.17141 1.24138C4.12118 1.24138 3.13371 1.65034 2.39107 2.39263Z"
                            fill="#CCCCCC"
                          />
                        </svg>
                      </button>
                      <input
                        id="search-blog"
                        type="text"
                        name="search-blog"
                        placeholder="Ara"
                        className="bg-third rounded-full h-10 w-full pl-11 pr-4 text-xs outline-none placeholder:text-fourth"
                      />
                    </form>
                  </div>
                  <div className="col-span-7">
                    <ul className="flex gap-6">
                      <li>
                        <Link
                          to={""}
                          className="text-xs font-open-sans text-white text-opacity-50 hover:text-white hover:text-opacity-100 transition-colors py-2"
                        >
                          #KEŞFET
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={""}
                          className="text-xs font-open-sans text-white text-opacity-50 hover:text-white hover:text-opacity-100 transition-colors py-2"
                        >
                          #YAŞAM
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={""}
                          className="text-xs font-open-sans text-white text-opacity-50 hover:text-white hover:text-opacity-100 transition-colors py-2"
                        >
                          #BİLİM
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={""}
                          className="text-xs font-open-sans text-white text-opacity-50 hover:text-white hover:text-opacity-100 transition-colors py-2"
                        >
                          #TEKNOLOJİ
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={""}
                          className="text-xs font-open-sans text-white text-opacity-50 hover:text-white hover:text-opacity-100 transition-colors"
                        >
                          #SİNEMA&DİZİ
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-3 flex justify-end gap-4">
                    <Link
                      to={""}
                      className="flex items-center gap-2 text-xs uppercase font-open-sans text-white text-opacity-50 hover:text-white hover:text-opacity-100 transition-colors py-2"
                    >
                      <svg
                        width="11"
                        height="16"
                        viewBox="0 0 11 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.501232"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.2135 15.9027C10.2975 15.9654 10.3975 15.9991 10.5 15.9992C10.7761 15.9992 11 15.7605 11 15.4659V2.55988C10.9986 1.14671 9.92491 0.00146976 8.6 0H2.4C1.07509 0.00146976 0.00137953 1.14671 5.20945e-07 2.55988V15.4659C-0.000268016 15.6649 0.103301 15.8474 0.268651 15.9395C0.434001 16.0315 0.633641 16.0178 0.786501 15.9038L5.5 12.3839L10.2135 15.9027ZM5.7865 11.296C5.70254 11.2332 5.60252 11.1995 5.5 11.1995C5.39759 11.1992 5.29758 11.2326 5.2135 11.2949L1 14.4414V2.55988C1 1.73517 1.6268 1.06662 2.4 1.06662H8.6C9.3732 1.06662 10 1.73517 10 2.55988V14.4414L5.7865 11.296Z"
                          fill="#CCCCCC"
                        />
                      </svg>
                      <span>KAYDEDİLENLER</span>
                    </Link>
                    <Link
                      to={""}
                      className="flex items-center gap-2 text-xs uppercase font-open-sans text-white text-opacity-50 hover:text-white hover:text-opacity-100 transition-colors py-2"
                    >
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.503302"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.38147 13.7714C7.55261 13.9188 7.77222 14 8 14C8.22766 14 8.44739 13.9188 8.61841 13.7717C9.26624 13.2145 9.89038 12.6913 10.4412 12.2298L10.4414 12.2296C12.053 10.8788 13.4447 9.71226 14.4132 8.56289C15.4958 7.27817 16 6.05996 16 4.72914C16 3.43613 15.5493 2.24325 14.7308 1.37008C13.9026 0.486588 12.766 0 11.5304 0C10.6068 0 9.76099 0.287175 9.01648 0.85348C8.64062 1.13933 8.30017 1.48918 8 1.89725C7.69995 1.48918 7.35938 1.13933 6.98364 0.85348C6.23914 0.287175 5.39331 0 4.46973 0C3.23401 0 2.09753 0.486588 1.26929 1.37008C0.450806 2.24325 0 3.43613 0 4.72914C0 6.05996 0.504272 7.27817 1.58691 8.56301C2.55542 9.71231 3.94739 10.879 5.55933 12.23L5.56213 12.2324C6.11194 12.6932 6.73511 13.2156 7.38147 13.7714ZM1.96171 2.00439C2.61014 1.31368 3.50148 0.933333 4.47175 0.933333C5.1824 0.933333 5.83498 1.15526 6.41119 1.59289C6.92481 1.98306 7.28252 2.47629 7.49211 2.8214C7.59996 2.99887 7.78979 3.10481 8 3.10481C8.21021 3.10481 8.40004 2.99887 8.50789 2.8214C8.71761 2.47629 9.07531 1.98306 9.58881 1.59289C10.165 1.15526 10.8176 0.933333 11.5284 0.933333C12.4985 0.933333 13.39 1.31368 14.0383 2.00439C14.6964 2.70553 15.0588 3.67473 15.0588 4.73356C15.0588 5.85075 14.6361 6.84991 13.6884 7.97321C12.7731 9.05804 11.4122 10.1973 9.83644 11.5164L9.8322 11.52C9.27954 11.9824 8.65331 12.5067 7.99866 13.0667C7.34791 12.5078 6.72266 11.9843 6.17109 11.5226L6.16816 11.5202L6.16725 11.5195C4.58993 10.1991 3.22765 9.0588 2.31173 7.97321C1.36391 6.84991 0.941176 5.85075 0.941176 4.73356C0.941176 3.67473 1.30364 2.70553 1.96171 2.00439Z"
                          fill="#CCCCCC"
                        />
                      </svg>

                      <span>BEĞENİLENLER</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </header>
    </>
  );
}
