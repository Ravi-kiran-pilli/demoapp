import { Menu } from "@headlessui/react";
import { useState } from "react";

const NavbarSection = () => {
  const [show, setShow] = useState(false);
  const onButtonClick = () => {
    console.log("button clicked");
    setShow((show) => !show);
  };
  return (
    <div>
      <nav class="border-gray-200 px-2 sm:px-4 py-2.5 bg-black">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" class="flex items-center">
            <img
              src="/static/images/UTA_Speakers_Logo_RGB_Blk.fa91773.svg"
              class="mr-3 h-6 sm:h-9 bg-white text-white"
              alt="Flowbite Logo"
            />
            {/* <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span> */}
          </a>

          <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-2">
            <ul class="mt-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Login/Signup
                </a>
              </li>
            </ul>
          </div>
          <div
            class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={onButtonClick}
                  aria-expanded="true"
                  aria-haspopup="true"
                  id="dropdownCategoreisButton"
                  data-dropdown-toggle="dropdownCategoreis"
                  type="button"
                  class="py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0
                   md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                   md:dark:hover:bg-transparent dark:border-gray-700 inline-flex font-medium"
                  // class="text-white bg-white hover:bg-white focus:ring-4  font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-white"
                >
                  Categoreis &nbsp;
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    // aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
              </li>
              <li>
                <button
                  //data-collapse-toggle="mobile-menu"
                  type="button"
                  class="py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0
                   md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                   md:dark:hover:bg-transparent dark:border-gray-700 inline-flex font-medium"
                  // class="text-white bg-white hover:bg-white focus:ring-4  font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-white"
                >
                  Search&nbsp;
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {show ? (
        <div class="mt-15 relative group h-0 z-40 bg-transparent">
          <div class="z-50 p-6 border-b bg-neutral-400 w-full">
            <div className="list flex gap-8 max-w-5xl m-auto ">
              <ul>
                <h2 className="text-white font-bold">An Unordered HTML List</h2>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>

              <ul>
                <h2 className="text-white font-bold">An Unordered HTML List</h2>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>

              <ul>
                <h2 className="text-white font-bold">An Unordered HTML List</h2>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <button className="text-white border px-3 py-3 block font-thin ">
                <div className="flex justify-center">
                  <p>Find The Perfect Speaker&nbsp;</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavbarSection;
