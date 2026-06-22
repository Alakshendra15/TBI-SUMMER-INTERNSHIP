export interface Room {
  id: number;
  name: string;
  type: string;
  price: number;
  capacity: number;
  amenities: string[];
  image: string;
  description: string;
}

export const roomsData: Room[] = [
  {
    id: 1,
    name: "Mountain View Room",
    type: "Deluxe Suite",
    price: 2500,
    capacity: 2,
    amenities: ["WiFi", "AC", "TV", "Mini Bar", "Mountain View"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=400&fit=crop",
    description: "Stunning room with panoramic mountain views, perfect for a romantic getaway.",
  },
  {
    id: 2,
    name: "Ocean Breeze Suite",
    type: "Premium Room",
    price: 3000,
    capacity: 2,
    amenities: ["WiFi", "AC", "Balcony", "Sea View", "Jacuzzi"],
    image: "https://images.unsplash.com/photo-1611632622527-e6a6e5a5e6e0?w=500&h=400&fit=crop",
    description: "Luxurious beachfront room with exclusive balcony and premium amenities.",
  },
  {
    id: 3,
    name: "Classic Standard Room",
    type: "Standard Room",
    price: 1500,
    capacity: 2,
    amenities: ["WiFi", "AC", "TV", "Workspace"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=400&fit=crop",
    description: "Comfortable and cozy room ideal for budget-conscious travelers.",
  },
  {
    id: 4,
    name: "Family Villa",
    type: "Villa",
    price: 4500,
    capacity: 4,
    amenities: ["WiFi", "AC", "Kitchen", "Garden", "Pool", "TV"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=400&fit=crop",
    description: "Spacious villa perfect for families with full amenities and private garden.",
  },
];
