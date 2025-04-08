import {
  FaChessKnight,
  FaGithub,
  FaInstagram,
  FaRedditAlien,
  FaSnapchatGhost,
  FaWhatsapp,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri"; // Specific X icon
import { SiGmail } from "react-icons/si"; // Using Simple Icons for Gmail

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://www.github.com/xshubhamg", // Replace with your GitHub URL
    icon: FaGithub,
    color: "#333", // Standard GitHub color (adjust if needed)
    darkColor: "#cdd6f4", // White icon on dark background hover
  },
  {
    name: "Instagram",
    url: "https://www.instgram.com/shubhamm1215", // Replace with your Instagram URL
    icon: FaInstagram,
    color: "#f38ba8", // Instagram Pink
  },
  {
    name: "X.com",
    url: "https://www.x.com/codin_nerd", // Replace with your X.com URL
    icon: RiTwitterXFill,
    color: "#000000", // X Black
    darkColor: "#cdd6f4", // White icon on dark background hover
  },
  {
    name: "Reddit",
    url: "https://www.reddit.com/user/codin_nerd/", // Replace with your Reddit URL
    icon: FaRedditAlien,
    color: "#fab387", // Reddit Orange
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/yourphonenumber", // Replace with your WhatsApp link/number
    icon: FaWhatsapp,
    color: "#a6e3a1", // WhatsApp Green
  },
  {
    name: "Gmail",
    url: "mailto:shubhammgiri3@gmail.com", // Replace with your email
    icon: SiGmail,
    color: "#f38ba8", // Gmail Red
  },
  {
    name: "Snapchat",
    url: "#", // Replace with your Snapchat URL or username link
    icon: FaSnapchatGhost,
    color: "#FFFC00", // Snapchat Yellow
    darkColor: "#f9e2af", // Keep yellow on dark mode
  },
  {
    name: "Chess.com",
    url: "https://www.chess.com/member/shubham_giiri", // Replace with your Chess.com profile URL
    icon: FaChessKnight,
    color: "#94e2d5", // Chess.com Green
  },
];
