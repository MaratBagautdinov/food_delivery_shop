export type T_Product = {
    id: string,
    name: string,
    slug: string,
    catalog_id: string,
    checked: boolean
    variants: T_ProductVariant[]
}
export type T_ProductVariant = {
    id: string
    name: string,
    price: number,
    photo: string
    checked: boolean
}
export type T_Subdivision = {
    id: string,
    name: string,
    slug: string
}
export type T_User = {
    id: string,
    name: string,
}
export type T_Order = {
    id: string,
    date: string,
    user: string,
    items_ids: T_Product['id'][],
    items: T_Order_Item[],
    sum: number,
    type: 'delivery' | 'pickup',
    addres: T_Addres | 'pickup'
}

export type T_Order_Item = {
    product_id: T_Product['id']
    product_option: T_ProductVariant['id']
    count: number
    price: number
    sum: number
}

export type T_Addres = {
    city: string,
    street: string,
    house: string,
    entrance: string,
    floor: string,
    room: string
}
export type T_Link = {
    label: string
    href: string
}