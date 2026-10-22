import type { Category } from "../types/category";
import type { Product } from "../types/product";
import type { Restaurant } from "../types/restaurant";

/**
 * Dados fictícios para desenvolver o frontend antes da integração com a API.
 * Estes arrays são somente leitura por convenção: alterações feitas neles
 * durante a execução não representam persistência real.
 */
export const mockRestaurant: Restaurant = {
  id: "restaurant-sabor-da-vila",
  name: "Sabor da Vila",
  slug: "sabor-da-vila",
  description:
    "Comida brasileira feita com carinho, pratos executivos e carnes na brasa.",
  imageUrl: null,
};

export const mockCategories: Category[] = [
  {
    id: "category-pratos-executivos",
    restaurantId: mockRestaurant.id,
    name: "Pratos executivos",
  },
  {
    id: "category-carnes-na-brasa",
    restaurantId: mockRestaurant.id,
    name: "Carnes na brasa",
  },
  {
    id: "category-acompanhamentos",
    restaurantId: mockRestaurant.id,
    name: "Acompanhamentos",
  },
  {
    id: "category-bebidas",
    restaurantId: mockRestaurant.id,
    name: "Bebidas",
  },
  {
    id: "category-sobremesas",
    restaurantId: mockRestaurant.id,
    name: "Sobremesas",
  },
];

const placeholderImage = "/images/mock/food-placeholder.svg";

export const mockProducts: Product[] = [
  {
    id: "product-carne-de-sol",
    categoryId: "category-pratos-executivos",
    name: "Carne de sol com macaxeira",
    description: "Carne de sol acebolada, macaxeira cozida, arroz e farofa da casa.",
    price: 34.9,
    imageUrl: placeholderImage,
    available: true,
  },
  {
    id: "product-feijoada",
    categoryId: "category-pratos-executivos",
    name: "Feijoada da casa",
    description: "Feijoada tradicional servida com arroz, couve e farofa.",
    price: 32,
    imageUrl: placeholderImage,
    available: true,
  },
  {
    id: "product-frango-grelhado",
    categoryId: "category-pratos-executivos",
    name: "Filé de frango grelhado",
    description: "Filé de frango grelhado com arroz, feijão e salada.",
    price: 27.5,
    imageUrl: placeholderImage,
    available: true,
  },
  {
    id: "product-peixe-do-dia",
    categoryId: "category-pratos-executivos",
    name: "Peixe do dia",
    description: "Peixe grelhado com legumes e arroz temperado.",
    price: 36.9,
    imageUrl: placeholderImage,
    available: false,
  },
  {
    id: "product-picanha",
    categoryId: "category-carnes-na-brasa",
    name: "Picanha na brasa",
    description: "Picanha fatiada na brasa, acompanhada de vinagrete.",
    price: 59.9,
    imageUrl: placeholderImage,
    available: true,
  },
  {
    id: "product-costela",
    categoryId: "category-carnes-na-brasa",
    name: "Costela bovina",
    description: "Costela assada lentamente na brasa.",
    price: 48.9,
    imageUrl: placeholderImage,
    available: true,
  },
  {
    id: "product-linguica",
    categoryId: "category-carnes-na-brasa",
    name: "Linguiça artesanal",
    description: "Linguiça grelhada na brasa, servida com molho da casa.",
    price: 29.9,
    imageUrl: placeholderImage,
    available: true,
  },
  {
    id: "product-macaxeira",
    categoryId: "category-acompanhamentos",
    name: "Macaxeira cozida",
    description: "Porção de macaxeira cozida e finalizada com manteiga.",
    price: 10,
    imageUrl: placeholderImage,
    available: true,
  },
  {
    id: "product-farofa",
    categoryId: "category-acompanhamentos",
    name: "Farofa da casa",
    description: "Farofa temperada preparada na cozinha do restaurante.",
    price: 8,
    imageUrl: placeholderImage,
    available: true,
  },
  {
    id: "product-arroz",
    categoryId: "category-acompanhamentos",
    name: "Arroz branco",
    description: "Porção individual de arroz branco soltinho.",
    price: 7,
    imageUrl: placeholderImage,
    available: true,
  },
  {
    id: "product-suco",
    categoryId: "category-bebidas",
    name: "Suco natural",
    description: "Suco natural preparado na hora. Consulte os sabores disponíveis.",
    price: 8,
    imageUrl: placeholderImage,
    available: true,
  },
  {
    id: "product-refrigerante",
    categoryId: "category-bebidas",
    name: "Refrigerante em lata",
    description: "Lata de refrigerante de 350 ml.",
    price: 6,
    imageUrl: placeholderImage,
    available: true,
  },
  {
    id: "product-agua",
    categoryId: "category-bebidas",
    name: "Água mineral",
    description: "Garrafa de água mineral de 500 ml.",
    price: 3.5,
    imageUrl: placeholderImage,
    available: true,
  },
  {
    id: "product-pudim",
    categoryId: "category-sobremesas",
    name: "Pudim de leite",
    description: "Fatia de pudim de leite condensado com calda de caramelo.",
    price: 9,
    imageUrl: placeholderImage,
    available: true,
  },
  {
    id: "product-bolo-chocolate",
    categoryId: "category-sobremesas",
    name: "Bolo de chocolate",
    description: "Fatia de bolo de chocolate com cobertura cremosa.",
    price: 10.5,
    imageUrl: placeholderImage,
    available: false,
  },
];

export interface MockMenuCategory extends Category {
  products: Product[];
}

export interface MockMenu {
  restaurant: Restaurant;
  categories: MockMenuCategory[];
}

export interface DashboardStats {
  categoryCount: number;
  productCount: number;
  availableProductCount: number;
  unavailableProductCount: number;
}

/** Busca um restaurante pelo slug usado na URL pública do cardápio. */
export function getMockRestaurantBySlug(slug: string): Restaurant | undefined {
  return mockRestaurant.slug === slug ? mockRestaurant : undefined;
}

/** Retorna as categorias cadastradas para um restaurante. */
export function getMockCategoriesByRestaurant(
  restaurantId: string,
): Category[] {
  return mockCategories.filter((category) => category.restaurantId === restaurantId);
}

/** Retorna os produtos vinculados a uma categoria. */
export function getMockProductsByCategory(categoryId: string): Product[] {
  return mockProducts.filter((product) => product.categoryId === categoryId);
}

/** Monta os dados necessários para exibir o cardápio público por slug. */
export function getMockMenuBySlug(slug: string): MockMenu | undefined {
  const restaurant = getMockRestaurantBySlug(slug);

  if (!restaurant) {
    return undefined;
  }

  const categories = getMockCategoriesByRestaurant(restaurant.id).map((category) => ({
    ...category,
    products: getMockProductsByCategory(category.id),
  }));

  return { restaurant, categories };
}

/** Calcula os indicadores previstos para o dashboard administrativo. */
export function getMockDashboardStats(
  restaurantId: string = mockRestaurant.id,
): DashboardStats {
  const categories = getMockCategoriesByRestaurant(restaurantId);
  const categoryIds = new Set(categories.map((category) => category.id));
  const products = mockProducts.filter((product) => categoryIds.has(product.categoryId));
  const availableProductCount = products.filter((product) => product.available).length;

  return {
    categoryCount: categories.length,
    productCount: products.length,
    availableProductCount,
    unavailableProductCount: products.length - availableProductCount,
  };
}