import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Film,
  Menu,
  X,
  User,
  Search,
  ChevronRight,
} from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "Movies", path: "/movies" },
  {name :"My Bookings", path:"/my-bookings"},
  
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-1 left-1/2 z-50 w-[95%]  -translate-x-1/2">
        <nav className="flex items-center justify-between rounded-3xl border border-white/10 bg-card/40 px-4 py-3 backdrop-blur-2xl">
          {/* logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-primary bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/30">
              <Film size={20} className="text-white" />
            </div>

            <h1 className="text-xl font-bold text-white md:text-2xl">
              Gullu<span className="text-primary">Tix</span>
            </h1>
          </Link>

          {/* desktop center */}
          <div className="hidden lg:flex items-center rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-xl">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `rounded-full px-7 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/30"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* desktop right */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl transition hover:bg-secondary">
              <Search size={18} />
            </button>

            <button className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white shadow-lg shadow-primary/30 transition hover:scale-105 hover:bg-primary/30">
              <User size={18} />
              Login
            </button>
          </div>

          {/* mobile */}
          <button
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white lg:hidden"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      {/* overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* drawer */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-[85%] max-w-sm border-l border-white/10 bg-dark/90 backdrop-blur-3xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* header */}
        <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-card/40 px-4 py-3 backdrop-blur-2xl">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary">
              <Film size={18} className="text-white" />
            </div>

            <h2 className="text-xl font-bold text-white">
              Gullu<span className="text-primary">Tix</span>
            </h2>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="rounded-full bg-white/10 p-2 text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* search */}
        <div className="px-6 pt-6">
          <button className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-gray-300">
            <Search size={18} />
            Search Movies...
          </button>
        </div>

        {/* links */}
        <div className="mt-6 flex flex-col px-4">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `mb-2 flex items-center justify-between rounded-2xl px-4 py-4 transition ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-white hover:bg-white/10"
                }`
              }
            >
              <span>{link.name}</span>
              <ChevronRight size={18} />
            </NavLink>
          ))}
        </div>

        {/* login */}
        <div className="absolute bottom-8 left-0 w-full px-6">
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 font-medium text-white shadow-lg shadow-primary/30">
            <User size={18} />
            Login
          </button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;