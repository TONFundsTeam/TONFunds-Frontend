import {FC, useState} from "react";
import { Link } from "react-router-dom";
import { TonConnectButton } from "@tonconnect/ui-react";
import dashboardEntity from "@app/pages/Dashboard";
import investorsEntity from "@app/pages/Investor";
import faqEntity from "@app/pages/Faq";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={closeMenu}>
            <div className="text-lg font-semibold text-gray-700">
              TON Funds
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            <Link to={dashboardEntity.path} className="py-5 px-3 text-gray-700 hover:text-gray-900">{dashboardEntity.name}</Link>
            <Link to={investorsEntity.path} className="py-5 px-3 text-gray-700 hover:text-gray-900">{investorsEntity.name}</Link>
            <Link to={faqEntity.path} className="py-5 px-3 text-gray-700 hover:text-gray-900">{faqEntity.name}</Link>
          </div>
          <div className="hidden md:flex">
            <TonConnectButton />
          </div>
          <div className="md:hidden" >
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </button>
            {isOpen && (
              <>
                <div className="fixed inset-0 bg-black bg-opacity-25 z-10" onClick={closeMenu}></div>
                <div className="fixed right-10 top-14 z-20 w-9/12 rounded-lg bg-white overflow-auto transition-transform transform translate-x-0">
                  <div className="flex flex-col items-left p-2 mt-2 " onClick={closeMenu}>
                    <Link to={dashboardEntity.path} className="p-2 text-gray-600 hover:text-gray-900">{dashboardEntity.name}</Link>
                    <Link to={investorsEntity.path} className="p-2 text-gray-600 hover:text-gray-900">{investorsEntity.name}</Link>
                    <Link to={faqEntity.path} className="p-2 text-gray-600 hover:text-gray-900">{faqEntity.name}</Link>
                  </div>
                  <div className="p-4">
                    <TonConnectButton />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
