export const products = [
  {
    id: 1,
    name: "iPhone 14 High-Quality Smart Phone Plus With Good Camera",
    price: 999.0,
    originalPrice: 1199.0,
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop&crop=center",
    category: "Smartphones",
    rating: 4.5,
    reviews: 128,
    isNew: false,
    sale: true,
  },
  {
    id: 2,
    name: "JBL ENDURANCE Wireless Headphones High-Quality Sound",
    price: 89.0,
    originalPrice: 129.0,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&crop=center",
    category: "Audio",
    rating: 4.3,
    reviews: 87,
    isNew: true,
    sale: true,
  },
  {
    id: 3,
    name: "LG Classic Electronic LED Smart Television High-Quality",
    price: 1399.0,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop&crop=center",
    category: "Electronics",
    rating: 4.7,
    reviews: 234,
    isNew: true,
    sale: false,
  },
  {
    id: 4,
    name: "Sony Polaroid Camera For Men & With Focus With Good Quality",
    price: 79.0,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop&crop=center",
    category: "Cameras",
    rating: 4.2,
    reviews: 45,
    isNew: true,
    sale: false,
  },
  {
    id: 5,
    name: "MG OVERCOMING 4K Smart TV LED High-Quality With Good Price",
    price: 3799.0,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop&crop=center",
    category: "Electronics",
    rating: 4.8,
    reviews: 156,
    isNew: false,
    sale: false,
  },
  {
    id: 6,
    name: "Gaming Console PlayStation 5 With Wireless Controller",
    price: 599.0,
    originalPrice: 699.0,
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=300&fit=crop&crop=center",
    category: "Gaming",
    rating: 4.9,
    reviews: 342,
    isNew: false,
    sale: true,
  },
  {
    id: 7,
    name: "Apple MacBook Pro 16-inch With M2 Chip High Performance",
    price: 2499.0,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop&crop=center",
    category: "Laptops",
    rating: 4.8,
    reviews: 89,
    isNew: true,
    sale: false,
  },
  {
    id: 8,
    name: "Wireless Gaming Mouse High-DPI Precision RGB Lighting",
    price: 79.99,
    originalPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop&crop=center",
    category: "Accessories",
    rating: 4.4,
    reviews: 67,
    isNew: false,
    sale: true,
  },
];

export const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: "📱",
    count: 156,
  },
  {
    id: 2,
    name: "Gaming",
    icon: "🎮",
    count: 89,
  },
  {
    id: 3,
    name: "Audio",
    icon: "🎧",
    count: 67,
  },
  {
    id: 4,
    name: "Cameras",
    icon: "📷",
    count: 34,
  },
  {
    id: 5,
    name: "Laptops",
    icon: "💻",
    count: 45,
  },
  {
    id: 6,
    name: "Accessories",
    icon: "⌨️",
    count: 78,
  },
];

export const featuredProducts = products.slice(0, 5);
export const newProducts = products.filter((p) => p.isNew).slice(0, 4);
export const saleProducts = products.filter((p) => p.sale).slice(0, 4);
