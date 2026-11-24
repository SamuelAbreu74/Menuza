
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


// Função de criar uma nova categoria
export function createCategory(restaurantId: string, data: CreateCategoryInput): Category {

    const newCategory: Category = {
        id: crypto.randomUUID(),
        restaurantId,

        name: data.name.trim(),
        

        icon: data.icon,

    }

    // Retorna objeto da nova categoria
    return newCategory;

}

// Função de editar uma categoria
export function editCategory(restaurantId: string, categoryId: string, data: EditCategoryInput): Category {

    const editedCategory: Category = {
        id: categoryId,
        restaurantId,
        name: data.name.trim(),
        icon: data.icon,
    }

    return editedCategory
}

// Função de excluir uma categoria
export function deleteCategory(categories: Category[], restaurantId: string, categoryId: string): Category[] {
    
    const updatedCategories = categories.filter(
        (category) => category.id !== categoryId ||
        category.restaurantId !== restaurantId
    );

    return updatedCategories
    
}
