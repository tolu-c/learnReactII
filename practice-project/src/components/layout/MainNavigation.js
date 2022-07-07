import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 md:py-8 md:px-12 bg-teal-700">
      <div className="text-xl md:text-2xl lg:text-4xl text-white font-bold font-merri">
        Great Quotes
      </div>
      <nav>
        <ul className="flex items-center space-x-4 md:space-x-8 lg:space-x-12 font-lato text-teal-200 ">
          <li>
            <NavLink
              to="/quotes"
              className="text-sm md:text-lg lg:text-2xl font-normal"
              activeClassName="text-base text-teal-50 font-medium"
              exact
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quotes/new"
              className=" text-sm md:text-lg lg:text-2xl font-normal"
              activeClassName="text-base text-teal-50 font-medium"
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
