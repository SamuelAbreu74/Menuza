/** Representa um restaurante no frontend do Menuza. */
export interface Restaurant {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string | null;
}