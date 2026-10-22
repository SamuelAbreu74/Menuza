/** Representa um restaurante no frontend do Menuza. */
export interface Restaurant {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
}