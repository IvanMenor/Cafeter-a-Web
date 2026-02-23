export type Category =
  | "bebidasFrias"
  | "bebidasCalientes"
  | "postres"
  | "cafeCasa";

export interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
  category: string
  featured?: boolean
}