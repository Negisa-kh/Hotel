import logo from "/img/logo.png";
export default function Navigation() {
    return (
  <nav className=" w-full z-20 top-0 start-0">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
      <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} alt="logo" className="w-9" />
      </a>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" className="text-[#473322] bg-[#dfc7b1] hover:bg-[#dbaf89] px-6 py-3 rounded-3xl">
          Rooms
        </button>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-600 focus:outline-none focus:ring-2 focus:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul className="uppercase flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-[#473322]  rounded md:bg-transparent md:text-[#6A513D] md:p-0 md:dark:text-[#6A513D]"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3  text-[#473322]  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#a28062] md:p-0 md:dark:hover:text-[#a28062] dark:text-[#a28062] dark:hover:bg-gray-700 dark:hover:text-[#a28062] md:dark:hover:bg-transparent dark:border-gray-700"
            >
             services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3  text-[#473322]  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#a28062] md:p-0 md:dark:hover:text-[#a28062] dark:text-[#a28062] dark:hover:bg-gray-700 dark:hover:text-[#a28062] md:dark:hover:bg-transparent dark:border-gray-700"
            >
            About
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
}