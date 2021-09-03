interface Item {
  amount: number
  goodsId: string
}

declare enum OrderStatus {
  UNPAID = '未支付',
  PAID = '已支付',
  DELIVERED = '已完成',
}

interface Order {
  id: string
  deliverDate: string
  items: Item[]
  status: OrderStatus
  totalPrice: number
}

interface CreditCard {
  id: string
  code: string
  year: number
  month: number
  cvc: number
  postCode: number
  isDefault: string
}
