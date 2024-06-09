import type { T_Link } from '~/types';

export const contacts: {
    label: string,
    value: string
}[] = [
        {
            label: 'ИНН',
            value: 'й'
        },
        {
            label: 'ОГРН',
            value: 'ф'
        },
        {
            label: 'Фактический адрес',
            value: 'ыы'
        },
    ]
export const menuNavTop: T_Link[] = [
    {
        href: "/",
        label: "Главная"
    },
    {
        href: "/catalog",
        label: "Меню"
    },
    {
        href: "/contacts",
        label: "Контакты"
    },
]
export const menuUserActions: T_Link[] = [
    {
        href: "/profile",
        label: "Профиль"
    },
    {
        href: "/profile/orders",
        label: "Заказы"
    },
]
export const contactsList: { href: string, label: string }[] = [
    {
        href: 'tel:+79968265825',
        label: '+7 (996) 826 58 25'
    },
    {
        href: 'mailto:pizza@mail.ru',
        label: 'pizza@mail.ru'
    }
]
export const banners: string[] = [
    '/banner-1.jpg',
    '/banner-2.jpg',
    '/banner-3.jpg',
]