import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          to="/"
          className="text-lg font-semibold text-stone-900"
        >
          Still & Wild
        </Link>

        <Link
          to="/"
          className="text-sm text-stone-600 hover:text-stone-900"
        >
          Library
        </Link>
      </div>
    </header>
  );
}

export default Header;