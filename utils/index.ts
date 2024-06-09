import type { T_Order_Item, T_OrderStatus } from "~/types"

export const { format: formatNumber } = Intl.NumberFormat('ru-RU', {
  notation: 'compact',
  maximumFractionDigits: 1
})

export const uniqueArray = (array: any[]) => Array.from(new Set(array))
export const updateCart = (items: T_Order_Item[], user_id: number, address: string) => {
  let items_ids: number[] = []
  let sum: number = 0
  items.map(i => {
    console.log({ iprice: i.price });
    sum = sum + i.price
    items_ids.push(i.product_id)
  })
  return {
    address,
    items: JSON.stringify(items),
    items_ids: JSON.stringify(uniqueArray(items_ids)),
    status_id: 0,
    sum,
    type: 'delivery',
    user_id,
  }
}
export const orderStatuses: T_OrderStatus[] = [
  {
    id: 1,
    label: 'Новый',
    value: 0,
    color: 'black'
  },
  {
    id: 2,
    label: 'В обработке',
    value: 0,
    color: 'black'
  },
  {
    id: 3,
    label: 'Готовится',
    value: 0,
    color: 'orange'
  },
  {
    id: 4,
    label: 'Доставляется',
    value: 0,
    color: 'yellow'
  },
  {
    id: 5,
    label: 'Исполнен',
    value: 0,
    color: 'green'
  },
  {
    id: 5,
    label: 'Отменён',
    value: 0,
    color: 'red'
  },
]