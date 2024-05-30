export type T_Product = {
    id: number
    name: string
    slug: string
    catalog_id: number
    checked: boolean
    variants: T_ProductVariant[]
    createdAt?: Date
    updatedAt?: Date
}
export type T_ProductVariant = {
    id: number
    name: string
    price: number
    photo: string
    checked: boolean
    createdAt?: Date
    updatedAt?: Date
}
export type T_Subdivision = {
    id: number
    name: string
    slug: string
    createdAt?: Date
    updatedAt?: Date
}
export type T_User = {
    id: number
    name: string
    createdAt?: Date
    updatedAt?: Date
}
export type T_Order = {
    id: number
    status_id: T_OrderStatus['id']
    user: string
    items_ids: T_Product['id'][]
    items: T_Order_Item[]
    sum: number
    type: 'delivery' | 'pickup'
    addres: T_Addres
    createdAt?: Date
    updatedAt?: Date
}
export type T_OrderStatus = {
    id: number
    label: string
    value: string
    color?: string
}
export type T_Order_Item = {
    product_id: T_Product['id']
    product_option: T_ProductVariant['id']
    count: number
    price: number
    sum: number
}

export type T_Addres = {
    city: string
    street: string
    house: string
    entrance: string
    floor: string
    room: string
}
export type T_Link = {
    label: string
    href: string
}