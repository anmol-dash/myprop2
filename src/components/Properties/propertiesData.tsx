import { Property } from "@/types/property";

const propertiesData: Property[] = [
  {
    id: "prop-001",
    title: "Downtown Office Tower",
    image: "/images/properties/office-tower.jpg",
    location: "Chicago, IL",
    price: 5000,
    shares: 250,
    area: 45000,
    occupancy: 92,
    yield: 8.5,
    type: "Office"
  },
  {
    id: "prop-002",
    title: "Waterfront Shopping Center",
    image: "/images/properties/shopping-center.jpg",
    location: "Miami, FL",
    price: 2500,
    shares: 500,
    area: 65000,
    occupancy: 89,
    yield: 7.2,
    type: "Retail"
  },
  {
    id: "prop-003",
    title: "Industrial Park Complex",
    image: "/images/properties/industrial-complex.jpg",
    location: "Dallas, TX",
    price: 3500,
    shares: 350,
    area: 125000,
    occupancy: 97,
    yield: 9.1,
    type: "Industrial"
  },
  {
    id: "prop-004",
    title: "Tech Hub Office Building",
    image: "/images/properties/tech-hub.jpg",
    location: "San Francisco, CA",
    price: 7500,
    shares: 150,
    area: 32000,
    occupancy: 95,
    yield: 6.8,
    type: "Office"
  },
  {
    id: "prop-005",
    title: "Lakeside Medical Center",
    image: "/images/properties/medical-center.jpg",
    location: "Boston, MA",
    price: 4500,
    shares: 300,
    area: 28000,
    occupancy: 98,
    yield: 7.5,
    type: "Healthcare"
  },
  {
    id: "prop-006",
    title: "Westside Storage Facility",
    image: "/images/properties/storage-facility.jpg",
    location: "Seattle, WA",
    price: 1800,
    shares: 600,
    area: 85000,
    occupancy: 94,
    yield: 8.2,
    type: "Self-Storage"
  }
];

export default propertiesData; 