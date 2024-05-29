import { T_Product } from "~/types"

export default defineEventHandler<T_Product>((event) => {
    return ({
        id: "2",
        name: "Пицца 1",
        slug: "pizza-1",
        catalog_id: "2",
        checked: true,
        variants: [
            {
                id: 'big',
                name: 'большой',
                price: 1050,
                photo: '',
                checked: true
            },
            {
                id: 'middle',
                name: 'средний',
                price: 850,
                photo: '',
                checked: true
            },
            {
                id: 'small',
                name: 'маленький',
                price: 650,
                photo: '',
                checked: true
            }
        ]
    })
})