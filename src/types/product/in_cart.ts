import { Product } from ".";

export type InCartProduct = Product & {
  quantity: number
}