export interface Listing {
  id: string;
  title: string;
  neighborhood: string;
  subLocation: string;
  propertyType: PropertyType;
  beds: number;
  baths: number | string;
  price: number;
  amenities: string[];
  hostBadge: string;
  imgUrl: string;
  featured?: boolean;
}

export type PropertyType =
  | "apartment"
  | "studio"
  | "townhouse"
  | "house"
  | "room"
  | "hotel"
  | "motel"
  | "bed-breakfast"
  | "hostel"
  | "resort"
  | "guesthouse"
  | "inn-lodge"
  | "serviced-apartment"
  | "extended-stay"
  | "cottage-cabin"
  | "chalet"
  | "villa"
  | "farmhouse-finca"
  | "houseboat"
  | "rv-caravan-campground"
  | "glamping";

export const SEED_LISTINGS: Listing[] = [
  {
    id: "1",
    title: "Modern 2-Bedroom Apartment with Balcony",
    neighborhood: "East Legon",
    subLocation: "Lagos Avenue corridor",
    propertyType: "apartment",
    beds: 2,
    baths: 2,
    price: 6500,
    amenities: ["Standby Gen", "Gated"],
    hostBadge: "Verified Host",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAuAH6IzFE3vj0GaR8v2LEnt99dJLK5NgIpF_wjkxyIo6H5D8b8QyLRbbx5mIJHSVmzMQbfPm_ysElhgOhUSscTodverNvjljxkdKCiLfXkzpzJ4FATjzA7fwZp_QNp9G7LTRx7lS_fvHMAXryGfZvj0RusGeNHyOo2W2yV36ycd1PHxsbSZX5neLHwupLSrbfsKr8oZ9_vF1ZM1gkSGQ0TvnCoNF1NbyrAAl8IhBypQczxkV5F0GaYQ",
  },
  {
    id: "2",
    title: "Furnished Studio in Quiet Enclave",
    neighborhood: "Cantonments",
    subLocation: "Near Embassy Row",
    propertyType: "studio",
    beds: 1,
    baths: 1,
    price: 4200,
    amenities: ["Polytank", "24/7 Security"],
    hostBadge: "Direct Landlord",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPvZkuCaWaf0JGn_VYwx40C8YhjhcvhobvFgwd7d4897N5XEN7jZtvU-kNCLvH7_Vg1ErmDMlVKqC3I5yhrsYImDKOKpmgDMa9Hzv8lYS7CamxOzD7AEKpYes6j_iQotDvzpJ9arHm_aPuj5FWACGdTS1wLm9cEovUQ8jwvWqI-KHZM7Jkdj2n6stQqkGR4AQboGec5ihe90qX2rtqIftGSjvlOl9zIsVTZd-2bgz2V51Kuk2uBMj4lQ",
  },
  {
    id: "3",
    title: "Executive 3-Bedroom Townhouse with Garden",
    neighborhood: "Airport Residential",
    subLocation: "Private Compound",
    propertyType: "townhouse",
    beds: 3,
    baths: 3.5,
    price: 14000,
    amenities: ["Solar Backup", "Carport"],
    hostBadge: "Verified Property",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfkVyi7X8qZWvfKQQ5u-rdJ_YEffRDJ0NJQF3TeglA3T5frjtesTpOtYXJ-rbpGBDKKh2TFy6k6EBN_AH0hY5eutyjFRxiuP5-LRmk4PjtoeH5639lFzPj-PyH3DCRumTcMurXx3wB084ReAHSZUv_oARILDk6bykkB58FQeIt8shL1u9-JdL6O-_JRT0WmtQ13CmRZ6Mi9l8iC-t4EB-5K3PYmLNLpIt5RS7vt_CDY4Z7MF6ty0Oy8Q",
  },
  {
    id: "4",
    title: "Cozy Self-Contained 1-Bed Flat",
    neighborhood: "Osu",
    subLocation: "Ringway Estate",
    propertyType: "apartment",
    beds: 1,
    baths: 1,
    price: 2800,
    amenities: ["Walk to Cafes", "Fitted Kit."],
    hostBadge: "Inspected",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADCIqrWlBg6nSUJNC2RoGIMx8RfrcC_6t37Df9nhqsd1V4Smlw_DW5KcdWzBdLfgPd8mDa-oJu1nOlKjh43fjfBlzlbzHVl5krJNyUQGa02yi604YjL2wSioKC2RyHPwEktOXwVZsovOIce7JvQacMXq2IYun1dK9-MbpbrNZui4jbn3DD2pbovoHgPoEE8jArVCcrikVFcOzU4DdtzD98ZHHtVR-9RTVvdavRQ50gufcxJ77MTxWDWg",
  },
  {
    id: "5",
    title: "Spacious 2-Bed Terrace with Rooftop",
    neighborhood: "Dzorwulu",
    subLocation: "Near Bloomberg Office",
    propertyType: "apartment",
    beds: 2,
    baths: 2,
    price: 5500,
    amenities: ["Air-Conditioned", "Paved Lot"],
    hostBadge: "Direct Host",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDURacPNpcdzpEprsVpJmgHZ6wmrMqkTBFpnPqIpn1QYeIe-Bipfbm8OeF55uUAOvre5Fg1H4Vx_dhsQk5Rns_UnJ_qKNzwyaDggYGhtzswaVPfRu5753xEdhkRUVRIeEpiz9tyh946kHo1_Nzat-t_l_i2FRKJ9VEXV61ZZjkJOu4wK_Y2JcF7gFeOrykYaPYc9hyEdzrzn64Mifn8PyDKRZVdoe3fzpoHgkwpzCGggvn4rQnbJ8yAfw",
  },
  {
    id: "6",
    title: "Budget Master Bedroom in Shared Villa",
    neighborhood: "Spintex",
    subLocation: "Near Junction Mall",
    propertyType: "room",
    beds: 1,
    baths: "En-suite",
    price: 1800,
    amenities: ["Shared Kit.", "Poly Tank"],
    hostBadge: "Verified Room",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvso2xgfaSQMZ0GCxYhlky5FKStqXdW0klgANZj3PC-i_nExnxo07WRMYu9Hg_u9knr_263VrsiYtSZbfUYmVbiEqrA1U1HFuqm_fSS99of5_DRDP6uriHLcrtGdQulKIs4KqhunqPTeiLPfMEm9my7J145zA55Uz1HfHfOL1CDrmXzNg3Me45BLrWPttqD2OaXvtVjVJ_R5LoyqQKTdbBKJ-AH-FiZi4pyOanWX6m0RhdX8oOvAC2-g",
  },
  {
    id: "7",
    title: "Sunlit 2-Bed Flat with Balcony View",
    neighborhood: "Labone",
    subLocation: "Near East Ridge",
    propertyType: "apartment",
    beds: 2,
    baths: 2,
    price: 6100,
    amenities: ["Solar Backup", "Laundry Room"],
    hostBadge: "Verified Host",
    imgUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "8",
    title: "Minimalist 1-Bed Apartment in Prime Zone",
    neighborhood: "Abelemkpe",
    subLocation: "Close to Achimota Road",
    propertyType: "apartment",
    beds: 1,
    baths: 1,
    price: 2600,
    amenities: ["Fitted Kitchen", "Water Tank"],
    hostBadge: "Inspected",
    imgUrl:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "9",
    title: "Modern 3-Bed Family House with Yard",
    neighborhood: "East Legon",
    subLocation: "Bawaleshie Extension",
    propertyType: "villa",
    beds: 3,
    baths: 3,
    price: 9800,
    amenities: ["Compound", "Backup Power"],
    hostBadge: "Verified Property",
    imgUrl:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "10",
    title: "Chic Studio with Smart Home Features",
    neighborhood: "Airport Residential",
    subLocation: "Near 37 Military Hospital",
    propertyType: "studio",
    beds: 1,
    baths: 1,
    price: 3600,
    amenities: ["Smart Lock", "Generator"],
    hostBadge: "Direct Landlord",
    imgUrl:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "11",
    title: "Loft-Style 2-Bed Apartment with Terrace",
    neighborhood: "Cantonments",
    subLocation: "Off Dr. Isert Road",
    propertyType: "apartment",
    beds: 2,
    baths: 2,
    price: 7200,
    amenities: ["Terrace", "24/7 Security"],
    hostBadge: "Verified Host",
    imgUrl:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "12",
    title: "Private Room in Secure Compound",
    neighborhood: "Dzorwulu",
    subLocation: "Near Roman Ridge",
    propertyType: "room",
    beds: 1,
    baths: "Shared",
    price: 2100,
    amenities: ["High-Speed Wi-Fi", "Shared Lounge"],
    hostBadge: "Verified Room",
    imgUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "13",
    title: "Bright 2-Bed Apartment near the Park",
    neighborhood: "Ridge",
    subLocation: "Behind Ridge Hospital",
    propertyType: "apartment",
    beds: 2,
    baths: 2,
    price: 5200,
    amenities: ["Gated Compound", "Water Tank"],
    hostBadge: "Verified Host",
    imgUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "14",
    title: "Compact Studio for City Professionals",
    neighborhood: "North Ridge",
    subLocation: "Near Independence Avenue",
    propertyType: "studio",
    beds: 1,
    baths: 1,
    price: 3300,
    amenities: ["Furnished", "Security"],
    hostBadge: "Inspected",
    imgUrl:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "15",
    title: "Family Townhouse with Private Garden",
    neighborhood: "Trasacco",
    subLocation: "North Legon Hills",
    propertyType: "townhouse",
    beds: 3,
    baths: 3,
    price: 12500,
    amenities: ["Private Garden", "Carport"],
    hostBadge: "Verified Property",
    imgUrl:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "16",
    title: "Affordable 1-Bed Flat near Transit",
    neighborhood: "Madina",
    subLocation: "Close to the Main Station",
    propertyType: "apartment",
    beds: 1,
    baths: 1,
    price: 1900,
    amenities: ["Paved Access", "Water Tank"],
    hostBadge: "Direct Landlord",
    imgUrl:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "17",
    title: "Elegant 4-Bed Home with Pool",
    neighborhood: "East Legon",
    subLocation: "Lagos Avenue Extension",
    propertyType: "villa",
    beds: 4,
    baths: 4,
    price: 18000,
    amenities: ["Swimming Pool", "Backup Power"],
    hostBadge: "Verified Property",
    imgUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "18",
    title: "Furnished 2-Bed Executive Suite",
    neighborhood: "Labone",
    subLocation: "Near Labone Coffee Shop",
    propertyType: "serviced-apartment",
    beds: 2,
    baths: 2,
    price: 8500,
    amenities: ["Housekeeping", "Generator"],
    hostBadge: "Direct Host",
    imgUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "19",
    title: "Quiet Single Room with Private Entrance",
    neighborhood: "Teshie",
    subLocation: "Near the Community Centre",
    propertyType: "room",
    beds: 1,
    baths: "Shared",
    price: 1400,
    amenities: ["Private Entrance", "Wi-Fi"],
    hostBadge: "Verified Room",
    imgUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "20",
    title: "Modern 3-Bed Duplex with Study",
    neighborhood: "Oyarifa",
    subLocation: "Off the Adenta-Dodowa Road",
    propertyType: "townhouse",
    beds: 3,
    baths: 3.5,
    price: 6800,
    amenities: ["Study Room", "Borehole"],
    hostBadge: "Inspected",
    imgUrl:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "21",
    title: "Rooftop Studio with City Views",
    neighborhood: "Osu",
    subLocation: "Oxford Street Area",
    propertyType: "studio",
    beds: 1,
    baths: 1,
    price: 3900,
    amenities: ["Rooftop Access", "Furnished"],
    hostBadge: "Direct Landlord",
    imgUrl:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "22",
    title: "Spacious 2-Bed Home near Schools",
    neighborhood: "Adenta",
    subLocation: "Near Frafraha Junction",
    propertyType: "house",
    beds: 2,
    baths: 2,
    price: 3600,
    amenities: ["Compound", "Polytank"],
    hostBadge: "Verified Host",
    imgUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "23",
    title: "Luxury 3-Bed Apartment with Sea Breeze",
    neighborhood: "Cantonments",
    subLocation: "Near the American Embassy",
    propertyType: "apartment",
    beds: 3,
    baths: 3,
    price: 11000,
    amenities: ["Gym Access", "Swimming Pool"],
    hostBadge: "Verified Property",
    imgUrl:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "24",
    title: "Cozy Room in a Shared Creative Home",
    neighborhood: "Kokomlemle",
    subLocation: "Close to the Arts Centre",
    propertyType: "room",
    beds: 1,
    baths: "Shared",
    price: 1600,
    amenities: ["Shared Kitchen", "High-Speed Wi-Fi"],
    hostBadge: "Verified Room",
    imgUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "25",
    title: "Classic 2-Bed Flat with Fitted Kitchen",
    neighborhood: "Dansoman",
    subLocation: "Near the Roundabout",
    propertyType: "apartment",
    beds: 2,
    baths: 2,
    price: 3000,
    amenities: ["Fitted Kitchen", "Paved Lot"],
    hostBadge: "Inspected",
    imgUrl:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "26",
    title: "Contemporary 4-Bed House with Staff Quarters",
    neighborhood: "Spintex",
    subLocation: "Flowerpot Junction",
    propertyType: "house",
    beds: 4,
    baths: 4,
    price: 9000,
    amenities: ["Staff Quarters", "CCTV"],
    hostBadge: "Verified Property",
    imgUrl:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "27",
    title: "Serviced 1-Bed Apartment with Concierge",
    neighborhood: "Airport Residential",
    subLocation: "Near Marina Mall",
    propertyType: "serviced-apartment",
    beds: 1,
    baths: 1,
    price: 7600,
    amenities: ["Concierge", "Gym Access"],
    hostBadge: "Direct Host",
    imgUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "28",
    title: "Peaceful 2-Bed Garden Apartment",
    neighborhood: "Roman Ridge",
    subLocation: "Off Dr. Hilla Limann Highway",
    propertyType: "apartment",
    beds: 2,
    baths: 2,
    price: 5700,
    amenities: ["Garden", "Gated"],
    hostBadge: "Verified Host",
    imgUrl:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "29",
    title: "Budget Studio near University Campus",
    neighborhood: "Legon",
    subLocation: "Near the University Entrance",
    propertyType: "studio",
    beds: 1,
    baths: 1,
    price: 1700,
    amenities: ["Study Desk", "Water Tank"],
    hostBadge: "Direct Landlord",
    imgUrl:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "30",
    title: "Secure 3-Bed Home with Large Compound",
    neighborhood: "Ashaley Botwe",
    subLocation: "Near Lakeside Estate",
    propertyType: "house",
    beds: 3,
    baths: 3,
    price: 6200,
    amenities: ["Large Compound", "Borehole"],
    hostBadge: "Inspected",
    imgUrl:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "31",
    title: "Open-Plan 1-Bed Loft in a Walkable Area",
    neighborhood: "Osu",
    subLocation: "Behind Danquah Circle",
    propertyType: "apartment",
    beds: 1,
    baths: 1,
    price: 4100,
    amenities: ["Open Plan", "Walk to Cafes"],
    hostBadge: "Verified Host",
    imgUrl:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "32",
    title: "Premium 2-Bed Flat with Backup Solar",
    neighborhood: "Labone",
    subLocation: "Near Labadi Road",
    propertyType: "apartment",
    beds: 2,
    baths: 2,
    price: 6800,
    amenities: ["Solar Backup", "Balcony"],
    hostBadge: "Verified Property",
    imgUrl:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "33",
    title: "Simple Furnished Room for Young Professionals",
    neighborhood: "East Legon Hills",
    subLocation: "Near the Community Park",
    propertyType: "room",
    beds: 1,
    baths: "En-suite",
    price: 2200,
    amenities: ["Furnished", "Shared Lounge"],
    hostBadge: "Verified Room",
    imgUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "34",
    title: "Newly Built 3-Bed Townhouse with Balcony",
    neighborhood: "North Legon",
    subLocation: "Near Atomic Junction",
    propertyType: "townhouse",
    beds: 3,
    baths: 3,
    price: 7800,
    amenities: ["New Build", "Balcony"],
    hostBadge: "Verified Host",
    imgUrl:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "35",
    title: "Airy 2-Bed Apartment near Shopping Centre",
    neighborhood: "Dzorwulu",
    subLocation: "Near the Fiesta Royal Road",
    propertyType: "apartment",
    beds: 2,
    baths: 2,
    price: 4900,
    amenities: ["Air-Conditioned", "Parking"],
    hostBadge: "Inspected",
    imgUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "36",
    title: "Executive 5-Bed Villa with Guest Annex",
    neighborhood: "Cantonments",
    subLocation: "Quiet Diplomatic Enclave",
    propertyType: "villa",
    beds: 5,
    baths: 5,
    price: 22000,
    amenities: ["Guest Annex", "Swimming Pool"],
    hostBadge: "Verified Property",
    imgUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "37",
    title: "Modern 1-Bed Flat with Co-Working Lounge",
    neighborhood: "Ridge",
    subLocation: "Near the Financial Centre",
    propertyType: "serviced-apartment",
    beds: 1,
    baths: 1,
    price: 5800,
    amenities: ["Co-Working Lounge", "24/7 Security"],
    hostBadge: "Direct Host",
    imgUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "38",
    title: "Sunny 2-Bed Home with Covered Parking",
    neighborhood: "Teshie",
    subLocation: "Near the Main Highway",
    propertyType: "house",
    beds: 2,
    baths: 2,
    price: 3200,
    amenities: ["Covered Parking", "Gated"],
    hostBadge: "Verified Host",
    imgUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "39",
    title: "Furnished 3-Bed Apartment with Gym",
    neighborhood: "Airport Residential",
    subLocation: "Near the Airport Bypass",
    propertyType: "apartment",
    beds: 3,
    baths: 3,
    price: 13500,
    amenities: ["Furnished", "Gym Access"],
    hostBadge: "Verified Property",
    imgUrl:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "40",
    title: "Private Studio with Courtyard Access",
    neighborhood: "Kanda",
    subLocation: "Off the Ring Road",
    propertyType: "studio",
    beds: 1,
    baths: 1,
    price: 2500,
    amenities: ["Courtyard", "Fitted Kitchen"],
    hostBadge: "Inspected",
    imgUrl:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "41",
    title: "Spacious 4-Bed Family Residence",
    neighborhood: "East Legon",
    subLocation: "Near American House",
    propertyType: "house",
    beds: 4,
    baths: 4,
    price: 15000,
    amenities: ["Garden", "Staff Quarters"],
    hostBadge: "Verified Property",
    imgUrl:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "42",
    title: "Affordable 1-Bed Apartment with Generator",
    neighborhood: "Abelemkpe",
    subLocation: "Near the Police Station",
    propertyType: "apartment",
    beds: 1,
    baths: 1,
    price: 2400,
    amenities: ["Generator", "Water Tank"],
    hostBadge: "Direct Landlord",
    imgUrl:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "43",
    title: "Quiet 2-Bed Flat with Work-From-Home Nook",
    neighborhood: "Roman Ridge",
    subLocation: "Close to the Ridge Roundabout",
    propertyType: "apartment",
    beds: 2,
    baths: 2,
    price: 6000,
    amenities: ["Home Office", "Standby Gen"],
    hostBadge: "Verified Host",
    imgUrl:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "44",
    title: "Private En-Suite Room near the Beach",
    neighborhood: "Labadi",
    subLocation: "Near Labadi Beach Hotel",
    propertyType: "room",
    beds: 1,
    baths: "En-suite",
    price: 2300,
    amenities: ["Private Bath", "Wi-Fi"],
    hostBadge: "Verified Room",
    imgUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "45",
    title: "Stylish 2-Bed Terrace in Gated Estate",
    neighborhood: "Ashaley Botwe",
    subLocation: "Near the Lakeside Mall",
    propertyType: "townhouse",
    beds: 2,
    baths: 2.5,
    price: 4700,
    amenities: ["Gated Estate", "Paved Lot"],
    hostBadge: "Inspected",
    imgUrl:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "46",
    title: "High-Floor 3-Bed City Apartment",
    neighborhood: "Osu",
    subLocation: "Near Ako Adjei Park",
    propertyType: "apartment",
    beds: 3,
    baths: 3,
    price: 8200,
    amenities: ["Elevator", "Balcony"],
    hostBadge: "Verified Host",
    imgUrl:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "47",
    title: "One-Bed Serviced Suite for Short Stays",
    neighborhood: "Labone",
    subLocation: "Near the Oxford Street Link",
    propertyType: "extended-stay",
    beds: 1,
    baths: 1,
    price: 6900,
    amenities: ["Housekeeping", "Wi-Fi"],
    hostBadge: "Direct Host",
    imgUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "48",
    title: "Family-Friendly 3-Bed House with Veranda",
    neighborhood: "Spintex",
    subLocation: "Near the Coca-Cola Roundabout",
    propertyType: "house",
    beds: 3,
    baths: 3,
    price: 5800,
    amenities: ["Veranda", "Compound"],
    hostBadge: "Verified Property",
    imgUrl:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "49",
    title: "Renovated 1-Bed Flat near Market Street",
    neighborhood: "Kaneshie",
    subLocation: "Near the Main Market",
    propertyType: "apartment",
    beds: 1,
    baths: 1,
    price: 2000,
    amenities: ["Renovated", "Secure Entry"],
    hostBadge: "Inspected",
    imgUrl:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "50",
    title: "Luxury 3-Bed Residence with Rooftop Lounge",
    neighborhood: "Cantonments",
    subLocation: "Near the El-Wak Stadium",
    propertyType: "serviced-apartment",
    beds: 3,
    baths: 3,
    price: 14500,
    amenities: ["Rooftop Lounge", "Pool Access"],
    hostBadge: "Verified Property",
    imgUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "51",
    title: "Simple Furnished Studio for Students",
    neighborhood: "Legon",
    subLocation: "Near the Night Market",
    propertyType: "studio",
    beds: 1,
    baths: 1,
    price: 1500,
    amenities: ["Furnished", "Study Desk"],
    hostBadge: "Direct Landlord",
    imgUrl:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "52",
    title: "Modern 2-Bed Home with Solar Water Heating",
    neighborhood: "Adenta",
    subLocation: "Near the Housing Down Junction",
    propertyType: "house",
    beds: 2,
    baths: 2,
    price: 3400,
    amenities: ["Solar Water Heater", "Gated"],
    hostBadge: "Verified Host",
    imgUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "53",
    title: "Executive 4-Bed Townhouse with Pool",
    neighborhood: "Trasacco",
    subLocation: "Near the Country Club",
    propertyType: "townhouse",
    beds: 4,
    baths: 4,
    price: 16500,
    amenities: ["Swimming Pool", "24/7 Security"],
    hostBadge: "Verified Property",
    imgUrl:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "54",
    title: "Comfortable Room with Kitchenette",
    neighborhood: "Madina",
    subLocation: "Near the Zongo Junction",
    propertyType: "room",
    beds: 1,
    baths: "En-suite",
    price: 1750,
    amenities: ["Kitchenette", "Polytank"],
    hostBadge: "Verified Room",
    imgUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "55",
    title: "Bright 2-Bed Apartment with City Skyline",
    neighborhood: "North Ridge",
    subLocation: "Near the Jubilee House",
    propertyType: "apartment",
    beds: 2,
    baths: 2,
    price: 6400,
    amenities: ["City View", "Generator"],
    hostBadge: "Direct Host",
    imgUrl:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "56",
    title: "Peaceful 1-Bed Garden Flat",
    neighborhood: "Abelemkpe",
    subLocation: "Near the Papafio Hills",
    propertyType: "apartment",
    beds: 1,
    baths: 1,
    price: 2900,
    amenities: ["Garden", "Parking"],
    hostBadge: "Inspected",
    imgUrl:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "57",
    title: "Premium 3-Bed Duplex with Garage",
    neighborhood: "East Legon",
    subLocation: "Near the Lagos Avenue Park",
    propertyType: "townhouse",
    beds: 3,
    baths: 3.5,
    price: 12000,
    amenities: ["Private Garage", "Solar Backup"],
    hostBadge: "Verified Property",
    imgUrl:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "58",
    title: "Relaxed 2-Bed Coastal Apartment",
    neighborhood: "Labadi",
    subLocation: "Near the Beach Road",
    propertyType: "apartment",
    beds: 2,
    baths: 2,
    price: 5300,
    amenities: ["Balcony", "Water Tank"],
    hostBadge: "Verified Host",
    imgUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "59",
    title: "Furnished 1-Bed Business Suite",
    neighborhood: "Airport Residential",
    subLocation: "Close to the Kotoka Airport Link",
    propertyType: "serviced-apartment",
    beds: 1,
    baths: 1,
    price: 6300,
    amenities: ["Airport Transfer", "Housekeeping"],
    hostBadge: "Direct Host",
    imgUrl:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "60",
    title: "Spacious 3-Bed Home with Family Yard",
    neighborhood: "Dzorwulu",
    subLocation: "Near the Dzorwulu School",
    propertyType: "house",
    beds: 3,
    baths: 3,
    price: 7000,
    amenities: ["Family Yard", "Backup Power"],
    hostBadge: "Verified Host",
    imgUrl:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
  },
];

const GENERATED_LISTING_COUNT = 540;
export const LISTINGS_PER_PAGE = 12;
const GENERATED_NEIGHBORHOODS = [
  "East Legon",
  "Cantonments",
  "Airport Residential",
  "Osu",
  "Dzorwulu",
  "Spintex",
  "Abelemkpe",
  "Labone",
  "Adabraka",
  "Dansoman",
  "Roman Ridge",
  "Tesano",
];
const GENERATED_TYPES: PropertyType[] = [
  "apartment",
  "studio",
  "townhouse",
  "house",
  "room",
  "villa",
  "serviced-apartment",
  "guesthouse",
];
const GENERATED_AMENITIES = [
  ["Standby Gen", "Gated"],
  ["Polytank", "24/7 Security"],
  ["Solar Backup", "Parking"],
  ["Furnished", "Air-Conditioned"],
  ["Water Storage", "Paved Lot"],
  ["Fiber Internet", "CCTV"],
];
const GENERATED_IMAGES = [
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
];

const GENERATED_LISTINGS: Listing[] = Array.from(
  { length: GENERATED_LISTING_COUNT },
  (_, index) => {
    const neighborhood =
      GENERATED_NEIGHBORHOODS[index % GENERATED_NEIGHBORHOODS.length];
    const propertyType = GENERATED_TYPES[index % GENERATED_TYPES.length];
    const beds =
      propertyType === "studio" || propertyType === "room"
        ? 1
        : (index % 4) + 1;
    const price = 1800 + ((index * 725) % 15700);
    const adjective = [
      "Bright",
      "Quiet",
      "Modern",
      "Spacious",
      "Newly Renovated",
      "Secure",
    ][index % 6];
    const typeLabel = propertyType
      .replaceAll("-", " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());

    return {
      id: `mock-${index + 61}`,
      title: `${adjective} ${beds}-Bedroom ${typeLabel} in ${neighborhood}`,
      neighborhood,
      subLocation: [
        "Near Main Road",
        "Quiet Residential Lane",
        "Close to Shops and Cafes",
        "Gated Community",
      ][index % 4],
      propertyType,
      beds,
      baths: beds === 1 ? 1 : beds,
      price,
      amenities: GENERATED_AMENITIES[index % GENERATED_AMENITIES.length],
      hostBadge: [
        "Verified Host",
        "Direct Landlord",
        "Inspected",
        "Verified Property",
      ][index % 4],
      imgUrl: GENERATED_IMAGES[index % GENERATED_IMAGES.length],
      featured: index % 10 === 0,
    };
  },
);

export const INITIAL_LISTINGS = [...SEED_LISTINGS, ...GENERATED_LISTINGS];
