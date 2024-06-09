
export type T_Product = {
    id: number
    name: string
    slug: string
    catalog_id: number
    checked: boolean
    variants: T_ProductVariant[]
    createdAt?: Date
    updatedAt?: Date
    Catalog: T_Catalog
}

export type T_ProductDB = {
    id: number
    name: string
    slug: string
    catalog_id: number
    checked: boolean
    variants: string
    createdAt?: Date
    updatedAt?: Date
}
export type T_ProductVariant = {
    id: number
    name: string
    slug: string
    price: number
    photo: string
    checked: boolean
    createdAt?: Date
    updatedAt?: Date
}
export type T_Catalog = {
    id: number
    name: string
    slug: string
    photo: string
    createdAt?: Date
    updatedAt?: Date
}
export type T_User = {
    id: number
    name: string
    phone: string
    password: string
    createdAt?: Date
    updatedAt?: Date
}
export type T_Order = {
    id: number
    status_id: T_OrderStatus['id']
    user_id: T_User['id']
    items_ids: T_Product['id'][]
    items: T_Order_Item[]
    sum: number
    type: 'delivery' | 'pickup'
    address: T_Addres
    createdAt?: Date
    updatedAt?: Date
}
export type T_orderProduct = T_Product & { Catalog: T_Catalog } & { variant: T_ProductVariant }
export type T_OrderStatus = {
    id: number
    label: string
    value: number
    color?: string
}
export type T_Order_Item = {
    product_id: T_Product['id']
    variant_id: T_ProductVariant['id']
    price: number
    count: number
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
    icon?: string
}
export type T_ViewType<value> = {
    label: string
    value: value
}
export interface File {
    name: string
    content: string
}