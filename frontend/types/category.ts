/** Categoria pertencente a um restaurante. */
import type { CategoryIconName } from "../lib/category-icons";

export interface Category {
  id: string;
  restaurantId: string;
  name: string;
  icon?: CategoryIconName | null;
}