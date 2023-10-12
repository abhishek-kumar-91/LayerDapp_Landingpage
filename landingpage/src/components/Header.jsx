import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  return (
    <header className="fixed max-w-6xl inset-x-0 top-0 z-10 flex h-[56px] items-center justify-between bg-white text-graytext px-4 sm:sticky mx-auto rounded-lg">
      <a href="#" className="flex items-end justify-center gap-2">
        <img src="../../logo.png" alt="logo" className="w-full h-auto" />
        <img
          src="../../LayerDapp.png"
          alt="logo"
          className="w-full h-5 -pb-2"
        />
      </a>
      <nav className="h-full items-center justify-center flex relative">
        <span className="mr-6 h-[17px] w-px bg-[#393939] xl:mr-8 lg:hidden"></span>
        <div className="cursor-pointer text-2xl relative outline-none transform-none text-white flex lg:hidden">
          <AiOutlineMenu />
        </div>
        <div className="flex-row m-0 flex h-full list-none items-center gap-4 p-0 top-0 left-0">
          <div>
            <a
              href="#"
              className={`flex p-4 px-5 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center  font-medium text-lg lg:text-sm whitespace-nowrap rounded text-light `}
            >
              Docs
            </a>
          </div>
          <div>
            <a
              href="#"
              className={`flex p-4 px-5 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center  font-medium  text-lg lg:text-sm  whitespace-nowrap rounded text-light`}
            >
              Community
            </a>
          </div>
          <div>
            <a
              href="#"
              className={`flex p-4 px-5 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center  font-medium  text-lg lg:text-sm  whitespace-nowrap rounded text-light`}
            >
              FAQs
            </a>
          </div>
        </div>
      </nav>
      <div className="flex gap-4">
        <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white bg-btn hover:bg-light/30 rounded-lg">
          Launch App
        </button>
      </div>
    </header>
  );
}

export default Header;
