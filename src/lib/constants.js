import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Technologies", href: "/technologies" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" }
];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
  { label: "Twitter", href: "https://twitter.com", icon: FaTwitter },
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebook },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
];

export const BRAND_COLORS = {
  dark: "#463B26",
  mid: "#BE8C53",
  light: "#Dbba95"
};
