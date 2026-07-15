import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Technologies", href: "/technologies" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" }
];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/135146927/admin/dashboard/?editPageActiveTab=info", icon: FaLinkedin },
  { label: "Instagram", href: "https://www.instagram.com/sbsquantum", icon: FaInstagram },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC6eRK3UUv6XLm8vZUXOUMlA", icon: FaYoutube },
  { label: "X", href: "https://x.com/sbsquantum27", icon: FaXTwitter },
];

export const BRAND_COLORS = {
  dark: "#463B26",
  mid: "#BE8C53",
  light: "#Dbba95"
};
