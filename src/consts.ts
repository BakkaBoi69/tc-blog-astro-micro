import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Jash Kanani F010 BTI IT Year 04 Sem 07",
  DESCRIPTION: "Astro Micro is an accessible and lightweight blog.",
  EMAIL: "jash.kanani033@nmims.edu.in",
  NUM_POSTS_ON_HOMEPAGE: 1,
  NUM_PROJECTS_ON_HOMEPAGE: 1,
};

export const HOME: Metadata = {
  TITLE: "My Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/BakkaBoi69",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/jashiro/",
  },
];
