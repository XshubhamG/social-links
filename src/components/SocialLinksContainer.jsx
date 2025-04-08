import React from "react";
import { socialLinks } from "../utils/socialLinks";

const SocialLinksContainer = ({ isDarkMode, setHoveredIcon, hoveredIcon }) => {
  return (
    <div className="mx-auto grid max-w-md grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        const hoverColor = isDarkMode
          ? link.darkColor || link.color
          : link.color;

        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to my ${link.name} profile`}
            className="dark:bg-surface-0 flex transform flex-col items-center rounded-lg bg-white bg-[url(/cubes.png)] bg-center bg-repeat p-4 shadow-md transition-transform hover:scale-110 hover:shadow-lg"
            onMouseEnter={() => setHoveredIcon(link.name)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <IconComponent
              className="dark:text-lavender mb-2 h-10 w-10 text-gray-700 transition-colors duration-200 ease-in-out"
              style={{
                color: hoveredIcon === link.name ? hoverColor : undefined,
              }}
            />
            <span
              className="font-serif text-sm font-medium text-gray-700 dark:text-white"
              style={{
                color: hoveredIcon === link.name ? hoverColor : undefined,
              }}
            >
              {link.name}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinksContainer;
