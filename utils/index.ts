import type { T_Order_Item, T_OrderStatus } from "~/types"

export const { format: formatNumber } = Intl.NumberFormat('ru-RU', {
  notation: 'compact',
  maximumFractionDigits: 1
})
export const delOneItem = (oldItems: T_Order_Item[], productOffer: { product_id: number, variant_id: number }): T_Order_Item[] => {
  const index = oldItems.findIndex(i => (i.product_id == productOffer.product_id && i.variant_id == productOffer.variant_id))
  let ii: T_Order_Item[] = []
  if (index > -1) {
    ii = oldItems.splice(index, 1)
  }
  console.log({ oldItems, ii, index });

  return oldItems
}

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
    color: '#f9eab4'
  },
  {
    id: 2,
    label: 'В обработке',
    value: 1,
    color: '#e5f9b4'
  },
  {
    id: 3,
    label: 'Готовится',
    value: 2,
    color: '#7dfb93'
  },
  {
    id: 4,
    label: 'Доставляется',
    value: 3,
    color: '#51f7d8'
  },
  {
    id: 5,
    label: 'Исполнен',
    value: 4,
    color: '#7ee1ff'
  },
  {
    id: 6,
    label: 'Отменён',
    value: 5,
    color: '#ff9b8a'
  },
]
export const getStatusProps = (value: T_OrderStatus['value']) => {
  return orderStatuses.find(o => o.value == value)
}