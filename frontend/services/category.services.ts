import { mockCategories } from "@/data/mock";
// Importa os types
import type { Category } from "@/types/category";
import type { CategoryIconName } from "@/lib/category-icons";

// Cria a interface dos dados que vão ser inputados (contrato de dados)
interface CreateCategoryInput {
    name: string;
    icon: CategoryIconName;
}

interface EditCategoryInput {
    name: string;
    icon: CategoryIconName;
}


export const CATEGORY_STORAGE_KEY = "menuza:categories";

export const CATEGORY_STORAGE_EVENT = "menuza:categories-updated";


// Função para recuperar todas as categorias do localStorage
export function getAllCategories(): Category[] {

    const storedCategories = localStorage.getItem(CATEGORY_STORAGE_KEY)

    // Primeiro acesso inicializa os dados com o mock
    if (!storedCategories) {

        const initialCategories = mockCategories.map(category => ({
            ...category,
        }));

        saveAllCategories(initialCategories)

        return initialCategories;
    }

    try {
        const parsedData: unknown = JSON.parse(storedCategories);

        if (Array.isArray(parsedData)) {
            return parsedData as Category[];
        }
    } catch {
        console.log("Erro ao parsear os dados das categorias.");
    }

    const initialCategories = mockCategories.map(category => ({
        ...category,
    }));

    saveAllCategories(initialCategories)

    return initialCategories;

}

// Função de salvar todas as categorias
export function saveAllCategories(categories: Category[]): void {
    localStorage.setItem(CATEGORY_STORAGE_KEY, JSON.stringify(categories));

    window.dispatchEvent(new Event(CATEGORY_STORAGE_EVENT))
}

// Função para listar todas as categorias
export function listAllCategories(restaurantId: string) {
    const categories = getAllCategories()

    return categories.filter(category => category.restaurantId === restaurantId);
}

// Função de criar uma nova categoria
export function createCategory(restaurantId: string, data: CreateCategoryInput): Category {

    const categories = getAllCategories()

    const newCategory: Category = {
        id: crypto.randomUUID(),
        restaurantId,

        name: data.name.trim(),

        icon: data.icon,

    }

    const updatedCategories = [...categories, newCategory];

    // Salva no localStorage
    saveAllCategories(updatedCategories);

    // Retorna objeto da nova categoria
    return newCategory;

}

// Função de editar uma categoria
export function editCategory(restaurantId: string, categoryId: string, data: EditCategoryInput): Category {

    // Pega as categorias atuais no localstorage
    const categories = getAllCategories()

    // Verifica se a categoria existe com base no categoryid e restaurantId
    const existingCategories = categories.find(category => category.id === categoryId && category.restaurantId === restaurantId)

    // Se não existir lança erro
    if (!existingCategories) {
        throw new Error("Categoria não encontrada.");
    }


    const editedCategory: Category = {
        id: categoryId,
        restaurantId,
        name: data.name.trim(),
        icon: data.icon,
    }

    // Gera um novo array com a categoria editada
    const updatedCategories = categories.map(category => category.id === categoryId && category.restaurantId === restaurantId ? editedCategory : category)

    // Salva no localStorage
    saveAllCategories(updatedCategories);

    return editedCategory
}

// Função de excluir uma categoria
export function deleteCategory(restaurantId: string, categoryId: string): void {

    // Busca categorias atuais do localStorage
    const categories = getAllCategories()

    
    const updatedCategories = categories.filter(
        (category) => category.id !== categoryId ||
            category.restaurantId !== restaurantId
    );

    // Salva o novo array no localStorage
    saveAllCategories(updatedCategories);

}
