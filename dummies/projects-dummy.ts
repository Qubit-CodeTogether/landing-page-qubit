interface Category {
  name: string;
  link: string;
}

interface Projects {
  title: string;
  image: string;
  link: string;
  category: Category[];
}

export const projects: Projects[] = [
  {
    title: "Byte - Social Media App",
    image: "/images/byte.jpg",
    link: "/projects/byte",
    category: [
      {
        name: "Web Development",
        link: "/category/web-development",
      },
      {
        name: "Mobile Development",
        link: "/category/mobile-development",
      },
    ],
  },
  {
    title: "New Times - News Mobile App",
    image: "/images/newtimes.jpg",
    link: "/projects/newtimes",
    category: [
      {
        name: "Mobile App",
        link: "/category/mobile-app",
      },
      {
        name: "UI/UX",
        link: "/category/ui-ux",
      },
    ],
  },
  {
   title: "Gemini - Company Profile",
    image: "/images/gemini.jpg",
    link: "/projects/gemini",
    category: [
      {
        name: "Web Development",
        link: "/category/web-development",
      },
      {
        name: "UI/UX",
        link: "/category/ui-ux",
      },
    ],
  },
  {
    title: "XiYu - Health Mobile App",
    image: "/images/xiyu.jpg",
    link: "/projects/xiyu",
    category: [
      {
        name: "Mobile App",
        link: "/category/mobile-app",
      },
      {
        name: "UI/UX",
        link: "/category/ui-ux",
      },
    ],
  }
];