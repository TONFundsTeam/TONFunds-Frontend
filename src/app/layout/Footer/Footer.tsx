import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white shadow mt-10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-gray-700">
              2024 TON Funds
            </span>
            <span className="text-sm text-gray-500">
              First donate crowdfunding service on TON Blockchain
            </span>
          </div>
          <div className="flex flex-row space-x-8">
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700">Discover</span>
              <Link to="/dashboard" className="text-gray-500 hover:text-gray-700">Dashboard</Link>
              <Link to="/investors" className="text-gray-500 hover:text-gray-700">Investors</Link>
              <Link to="/faq" className="text-gray-500 hover:text-gray-700">FAQ</Link>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700">Feedback</span>
              <Link to="#" className="text-gray-500 hover:text-gray-700">Telegram bot</Link>
              <Link to="#" className="text-gray-500 hover:text-gray-700">ton@funds.org</Link>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700">Community</span>
              <Link to="#" className="text-gray-500 hover:text-gray-700">Telegram</Link>
              <Link to="#" className="text-gray-500 hover:text-gray-700">X</Link>
              <Link to="#" className="text-gray-500 hover:text-gray-700">ton.app</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
