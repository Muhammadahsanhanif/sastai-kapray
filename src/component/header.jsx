import { Link } from "react-router-dom";

function Header() {
  return (
    <nav
      className="flex px-6 py-4 text-gray-800 border-b border-gray-200 shadow-lg bg-white dark:bg-gray-900 dark:border-gray-700"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-3 md:space-x-4 rtl:space-x-reverse mx-auto">
        {/* Home Link */}
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-base font-medium text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 ease-in-out"
          >
            <svg
              className="w-4 h-4 me-2.5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M19.707 9.293l-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </Link>
        </li>

        {/* Other Links with Animation */}
        {["Login", "Signup", "Products"].map((item, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="rtl:rotate-180 w-3 h-3 mx-2 text-gray-400"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 9l4-4-4-4"
              />
            </svg>
            <Link
              to={`/${item.toLowerCase()}`}
              className="text-base font-medium text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 ease-in-out transform hover:scale-105"
            >
              {item}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Header;
