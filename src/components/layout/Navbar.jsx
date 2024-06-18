import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const categories = [
  {
    name: "Indian",
    url: "/category/indian",
  },
  {
    name: "Italian",
    url: "/category/italian",
  },
  {
    name: "American",
    url: "/category/american",
  },
  {
    name: "Thai",
    url: "/category/thai",
  },
  {
    name: "Spanish",
    url: "/category/spanish",
  },
  {
    name: "Mexican",
    url: "/category/mexican",
  },
];

function Navbar() {
  return (
    <>
      <header className="bg-gray-100 shadow-md">
        <section className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link to="/">
              <h1 className="text-3xl font-bold text-gray-800 hover:text-gray-600 duration-200 cursor-pointer">
                CookRecipes
              </h1>
            </Link>
            <SearchBar />
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6 py-2">
            {categories.map((data) => (
              <NavLink
                key={data.name}
                to={data.url}
                className="text-gray-700 hover:text-gray-900 py-2 border-b-2 border-transparent hover:border-gray-900 cursor-pointer duration-200"
                activeClassName="border-gray-900 text-gray-900"
              >
                {data.name}
              </NavLink>
            ))}
          </nav>
        </section>
      </header>
    </>
  );
}

export default Navbar;
