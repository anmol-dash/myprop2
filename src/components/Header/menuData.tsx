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
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "How It Works",
    path: "/how-it-works",
    newTab: false,
  },
  {
    id: 4,
    title: "Properties",
    path: "/properties",
    newTab: false,
  },
  // {
  //   id: 5,
  //   title: "For Investors",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 51,
  //       title: "Investor Guide",
  //       path: "/investor-guide",
  //       newTab: false,
  //     },
  //     {
  //       id: 52,
  //       title: "Portfolio Management",
  //       path: "/portfolio",
  //       newTab: false,
  //     },
  //     {
  //       id: 53,
  //       title: "Rent Collection",
  //       path: "/rent-collection",
  //       newTab: false,
  //     },
  //     {
  //       id: 54,
  //       title: "Trading Shares",
  //       path: "/trading",
  //       newTab: false,
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: "For Property Owners",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 61,
  //       title: "List Your Property",
  //       path: "/list-property",
  //       newTab: false,
  //     },
  //     {
  //       id: 62,
  //       title: "Owner Benefits",
  //       path: "/owner-benefits",
  //       newTab: false,
  //     },
  //     {
  //       id: 63,
  //       title: "Success Stories",
  //       path: "/success-stories",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
