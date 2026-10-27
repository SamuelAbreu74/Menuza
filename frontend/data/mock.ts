import type { Category } from "../types/category";
import type { Product } from "../types/product";
import type { Restaurant } from "../types/restaurant";

/**
 * Dados fictícios para desenvolver o frontend antes da integração com a API.
 * Estes arrays são somente leitura por convenção: alterações feitas neles
 * durante a execução não representam persistência real.
 */
export const mockRestaurant: Restaurant[] = [
    {
        id: "restaurant-sabor-da-vila",
        name: "Sabor da Vila",
        slug: "sabor-da-vila",
        description: "Comida brasileira feita com carinho, pratos executivos e carnes na brasa.",
        imageUrl: 'https://images.unsplash.com/photo-1592212671263-5da5627c5819?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    },
    {
        id: "restaurant-tempero-mineiro",
        name: "Tempero Mineiro",
        slug: "tempero-mineiro",
        description: "Comida mineira autêntica e saborosa, com receitas tradicionais passadas por gerações.",
        imageUrl: null,
    },
    {
        id: "restaurant-cafeteria-helena",
        name: "Cafeteria Helena",
        slug: "cafeteria-helena",
        description: "Conforto, aroma e sabor em cada detalhe, tudo feito artesanalmente.",
        imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }
];

export const mockCategories: Category[] = [
    // Sabor da Vila
    {
        id: "category-sabor-pratos-executivos",
        restaurantId: "restaurant-sabor-da-vila",
        name: "Pratos executivos",
    },
    {
        id: "category-sabor-salgados",
        restaurantId: "restaurant-sabor-da-vila",
        name: "Salgados",
    },
    {
        id: "category-sabor-doces",
        restaurantId: "restaurant-sabor-da-vila",
        name: "Doces",
    },
    {
        id: "category-sabor-bebidas",
        restaurantId: "restaurant-sabor-da-vila",
        name: "Bebidas",
    },

    // Tempero Mineiro
    {
        id: "category-tempero-bebidas",
        restaurantId: "restaurant-tempero-mineiro",
        name: "Bebidas",
    },

    // Cafeteria Helena
    {
        id: "category-helena-cafes",
        restaurantId: "restaurant-cafeteria-helena",
        name: "Cafés",
    },
    {
        id: "category-helena-doces",
        restaurantId: "restaurant-cafeteria-helena",
        name: "Doces",
    },
    {
        id: "category-helena-salgados",
        restaurantId: "restaurant-cafeteria-helena",
        name: "Salgados",
    },
    {
        id: "category-helena-bebidas",
        restaurantId: "restaurant-cafeteria-helena",
        name: "Bebidas",
    }
];

const placeholderImage = "/images/mock/food-placeholder.svg";

export const mockProducts: Product[] = [
    // Sabor da Vila
    {
        id: "product-suco-sabor",
        categoryId: "category-sabor-bebidas",
        name: "Suco natural",
        description: "Suco preparado na hora.",
        price: 8,
        imageUrl: placeholderImage,
        available: true,
    },
    {
        id: "product-agua-sabor",
        categoryId: "category-sabor-bebidas",
        name: "Agua",
        description: "Agua",
        price: 2,
        imageUrl: placeholderImage,
        available: true,
    },
    {
        id: "product-executivo-01-sabor",
        categoryId: "category-sabor-pratos-executivos",
        name: "Executivo 01",
        description: "Executivo com frango",
        price: 25,
        imageUrl: placeholderImage,
        available: true,
    },
    {
        id: "product-executivo-02-sabor",
        categoryId: "category-sabor-pratos-executivos",
        name: "Executivo 02",
        description: "Executivo com carne",
        price: 25,
        imageUrl: placeholderImage,
        available: true,
    },
    {
        id: "product-executivo-03-sabor",
        categoryId: "category-sabor-pratos-executivos",
        name: "Executivo 03",
        description: "Executivo com peixe",
        price: 25,
        imageUrl: placeholderImage,
        available: true,
    },
    {
        id: "product-enrroladinho-sabor",
        categoryId: "category-sabor-salgados",
        name: "Enrroladinho de salsicha",
        description: "Delicioso enrroladinho de salsicha",
        price: 10,
        imageUrl: placeholderImage,
        available: true,
    },
    {
        id: "product-bolinha-queijo-sabor",
        categoryId: "category-sabor-salgados",
        name: "Bolinha de queijo",
        description: "Deliciosa bolinha de queijo",
        price: 10,
        imageUrl: placeholderImage,
        available: false,
    },
    {
        id: "product-coxinha-sabor",
        categoryId: "category-sabor-salgados",
        name: "Coxinha",
        description: "Deliciosa coxinha de frango",
        price: 10,
        imageUrl: placeholderImage,
        available: true,
    },
    {
        id: "product-empadao-sabor",
        categoryId: "category-sabor-salgados",
        name: "Empadao",
        description: "Delicioso empadão de frango",
        price: 15,
        imageUrl: placeholderImage,
        available: true,
    },
    {
        id: "product-kibe-sabor",
        categoryId: "category-sabor-salgados",
        name: "Kibe",
        description: "Delicioso kibe de carne",
        price: 8,
        imageUrl: placeholderImage,
        available: false,
    },
    {
        id: "product-brigadeiro-sabor",
        categoryId: "category-sabor-doces",
        name: "Brigadeiro",
        description: "Delicioso brigadeiro",
        price: 5,
        imageUrl: placeholderImage,
        available: true,
    },
    {
        id: "product-beijinho-sabor",
        categoryId: "category-sabor-doces",
        name: "Beijinho",
        description: "Delicioso beijinho",
        price: 5,
        imageUrl: placeholderImage,
        available: true,
    },
    {
        id: "product-pudim-sabor",
        categoryId: "category-sabor-doces",
        name: "Pudim",
        description: "Delicioso pudim de leite condensado",
        price: 5,
        imageUrl: placeholderImage,
        available: true,
    },
    // Tempero Mineiro
    {
        id: "product-cafe-tempero",
        categoryId: "category-tempero-bebidas",
        name: "Café coado",
        description: "Café coado na hora.",
        price: 5,
        imageUrl: placeholderImage,
        available: true,
    },
    // cafeteria helena
    {
        id: "product-cafe-helena-expresso",
        categoryId: "category-helena-cafes",
        name: "Café expresso",
        description: "Café expresso preparado na hora.",
        price: 6,
        imageUrl: placeholderImage,
        available: true,
    },
    {
        id: "product-cafe-helena",
        categoryId: "category-helena-doces",
        name: "Bolo de chocolate",
        description: "Bolo de chocolate feito com ingredientes selecionados.",
        price: 12,
        imageUrl: placeholderImage,
        available: true,
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
    return mockRestaurant.filter((restaurant) => restaurant.slug === slug)[0] ?? undefined;
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
    restaurantId: string = mockRestaurant[0].id,
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