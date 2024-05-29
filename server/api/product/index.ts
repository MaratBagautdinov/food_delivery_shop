import { T_Product } from "~/types"

export default defineEventHandler<T_Product[]>((event) => {
    return [
        {
            id: "1",
            name: "Бургер 1",
            slug: "burger-1",
            catalog_id: "1",
            checked: true,
            variants: [
                {
                    id: 'default',
                    name: 'обычный',
                    price: 750,
                    photo: '',
                    checked: true
                }
            ]
        },
        {
            id: "3",
            name: "Бургер 2",
            slug: "burger-2",
            catalog_id: "1",
            checked: true,
            variants: [
                {
                    id: 'default',
                    name: 'обычный',
                    price: 700,
                    photo: '',
                    checked: true
                }
            ]
        },
        {
            id: "4",
            name: "Бургер 3",
            slug: "burger-3",
            catalog_id: "1",
            checked: true,
            variants: [
                {
                    id: 'default',
                    name: 'обычный',
                    price: 800,
                    photo: '',
                    checked: true
                }
            ]
        },
        {
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
        },
        {
            id: "5",
            name: "Пицца 2",
            slug: "pizza-2",
            catalog_id: "2",
            checked: true,
            variants: [
                {
                    id: 'big',
                    name: 'большой',
                    price: 900,
                    photo: '',
                    checked: true
                },
                {
                    id: 'middle',
                    name: 'средний',
                    price: 700,
                    photo: '',
                    checked: true
                },
                {
                    id: 'small',
                    name: 'маленький',
                    price: 550,
                    photo: '',
                    checked: true
                }
            ]
        },
        {
            id: "6",
            name: "Пицца 3",
            slug: "pizza-3",
            catalog_id: "2",
            checked: true,
            variants: [
                {
                    id: 'big',
                    name: 'большой',
                    price: 1000,
                    photo: '',
                    checked: true
                },
                {
                    id: 'middle',
                    name: 'средний',
                    price: 750,
                    photo: '',
                    checked: true
                },
                {
                    id: 'small',
                    name: 'маленький',
                    price: 500,
                    photo: '',
                    checked: true
                }
            ]
        }
    ]
})