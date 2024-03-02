import { Link } from "react-router-dom";
import { TonConnectButton } from "@tonconnect/ui-react";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="text-lg font-semibold text-gray-700">
              TON Funds
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/dashboard" className="py-5 px-3 text-gray-700 hover:text-gray-900">Dashboard</Link>
            <Link to="/investors" className="py-5 px-3 text-gray-700 hover:text-gray-900">Investors</Link>
            <Link to="/faq" className="py-5 px-3 text-gray-700 hover:text-gray-900">FAQ</Link>
          </div>
          <TonConnectButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
