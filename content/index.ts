import type { T_Link } from '~/types';

export const contacts: {
    label: string,
    value: string
}[] = [
        {
            label: 'Полное наименование',
            value: 'Большая ложка'
        },
        {
            label: 'ИНН',
            value: '165052417035'
        },
        {
            label: 'Контактный телефон',
            value: '+7 996 826-58-25'
        },
        {
            label: 'Контактный e-mail',
            value: 'help@bigspoon.ru'
        },
        {
            label: 'Фактический адрес',
            value: '11-й комплекс, 11 / проспект Раиса Беляева, 21, Новый Город м-н, Центральный район, Набережные Челны, Республика Татарстан, 423812'
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
        href: 'mailto:help@bigspoon.ru',
        label: 'help@bigspoon.ru'
    }
]
export const banners: string[] = [
    '/banner-1.jpg',
    '/banner-2.jpg',
    '/banner-3.jpg',
]