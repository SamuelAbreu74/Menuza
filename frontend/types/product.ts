/** Produto pertencente a uma categoria do cardápio. */
export interface Product {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  /** Preço em reais (BRL), representado como número. */
  price: number;
  imageUrl: string | null;
  available: boolean;
}