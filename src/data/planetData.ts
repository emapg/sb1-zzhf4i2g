export interface PlanetData {
  name: string;
  description: string;
  diameter: string;
  dayLength: string;
  yearLength: string;
  position: [number, number, number];
  radius: number;
  textureUrl: string;
  rotationSpeed: number;
}

export const planets: PlanetData[] = [
  {
    name: "Mercury",
    description: "The smallest and innermost planet in the Solar System.",
    diameter: "4,879 km",
    dayLength: "176 Earth days",
    yearLength: "88 Earth days",
    position: [10, 0, 0],
    radius: 0.8,
    textureUrl: "https://images.unsplash.com/photo-1614728894747-a83421789f10?auto=format&fit=crop&q=80",
    rotationSpeed: 0.01
  },
  {
    name: "Venus",
    description: "Often called Earth's sister planet due to similar size and mass.",
    diameter: "12,104 km",
    dayLength: "243 Earth days",
    yearLength: "225 Earth days",
    position: [15, 0, 0],
    radius: 1.2,
    textureUrl: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?auto=format&fit=crop&q=80",
    rotationSpeed: 0.008
  },
  {
    name: "Earth",
    description: "Our home planet and the only known planet to harbor life.",
    diameter: "12,742 km",
    dayLength: "24 hours",
    yearLength: "365.25 days",
    position: [20, 0, 0],
    radius: 1.2,
    textureUrl: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80",
    rotationSpeed: 0.01
  }
];