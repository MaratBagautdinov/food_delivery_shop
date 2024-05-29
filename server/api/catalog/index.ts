import { T_Subdivision } from "~/types"

export default defineEventHandler<T_Subdivision[]>((event) => {
    return [
        {
            id:"1",
            name: "Бургер",
            slug: "burgers"
        },
        {
            id:"2",
            name: "Пицца",
            slug: "pizza"
        }
    ]
  })