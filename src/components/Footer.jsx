import logo from "../assets/logo.png";
import { Instagram, Twitter } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const socials = [
  { href: "https://instagram.com/replayedmedia", icon: <Instagram size={22} />, label: "Instagram" },
  { href: "https://twitter.com/replayed_media",  icon: <Twitter size={22} />,   label: "Twitter" },
  { href: "https://tiktok.com/@replayedmedia",   icon: <FontAwesomeIcon icon={faTiktok} className="text-xl" />, label: "TikTok" },
];

const Footer = () => (
  <footer className="mt-20 border-t border-neutral-700">
    {/* Top */}
    <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
      <a
        href="#hero"
        className="flex items-center flex-shrink-0 cursor-pointer"
      >
        <img src={logo} alt="Replayed Media" className="h-10 w-10" />
        <span className="text-2xl font-semibold p-2"> Replayed Media</span>
      </a>

      <div className="flex gap-4">
        {socials.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noreferrer"
            className="p-3 border border-neutral-600 rounded-md hover:bg-neutral-800 transition"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Replayed Media. All rights reserved.</p>
        <div className="flex gap-6 mt-3 md:mt-0">
          <a className="hover:text-neutral-300">Privacy Policy</a>
          <a className="hover:text-neutral-300">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;