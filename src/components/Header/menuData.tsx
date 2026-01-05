import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Our History",
        path: "/history",
        newTab: false,
      },
      {
        id: 22,
        title: "Mission & Vision",
        path: "/mission",
        newTab: false,
      },
      {
        id: 23,
        title: "Our Team",
        path: "/team",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Our ProgramS",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Science",
        path: "/science",
        newTab: false,
      },
      {
        id: 32,
        title: "Management",
        path: "/management",
        newTab: false,
      },
      {
        id: 33,
        title: "Arts",
        path: "/arts",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Student Life",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Clubs",
        path: "/clubs",
        newTab: false,
      },
      {
        id: 42,
        title: "Events",
        path: "/events",
        newTab: false,
      },
      {
        id: 43,
        title: "Sports",
        path: "/sports",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Gallery",
    path: "/gallery",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
