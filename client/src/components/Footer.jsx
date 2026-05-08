import { Link } from "react-router-dom";
import { Film, Mail, Phone, MapPin } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const socials = [FaInstagram, FaFacebookF, FaXTwitter, FaYoutube];

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4 md:px-10 lg:px-16">
        {/* brand */}
        <div>
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-600 shadow-lg shadow-red-600/30">
              <Film size={20} />
            </div>

            <h2 className="text-2xl font-bold">
              Gullu<span className="text-red-500">Tix</span>
            </h2>
          </Link>

          <p className="mt-5 text-sm leading-7 text-gray-400">
            Discover trending movies, upcoming blockbusters, and book tickets
            seamlessly with GulluTix.
          </p>

          {/* social icons */}
          <div className="mt-6 flex gap-3">
            {socials.map((Icon, i) => (
              <button
                key={i}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:scale-105 hover:bg-red-600 hover:text-white"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        {/* quick links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

          <div className="flex flex-col gap-3 text-gray-400">
            <Link to="/" className="transition hover:text-red-400">
              Home
            </Link>

            <Link to="/movies" className="transition hover:text-red-400">
              Movies
            </Link>

            <Link to="/my-bookings" className="transition hover:text-red-400">
              My Bookings
            </Link>

            <Link to="/favorite" className="transition hover:text-red-400">
              Favorites
            </Link>
          </div>
        </div>

        {/* genres */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">Genres</h3>

          <div className="flex flex-col gap-3 text-gray-400">
            <p>Action</p>
            <p>Adventure</p>
            <p>Sci-Fi</p>
            <p>Comedy</p>
          </div>
        </div>

        {/* contact */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">Contact</h3>

          <div className="space-y-4 text-gray-400">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 shrink-0 text-red-400" />
              <span>Raipur, Chhattisgarh, India</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-red-400" />
              <span>support@gullutix.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-red-400" />
              <span>+91 XXXXX XXXXX</span>
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-500">
        © 2026 GulluTix — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;