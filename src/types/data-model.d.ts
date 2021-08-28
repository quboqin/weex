interface Good {
  id: number
  name: string
  desc: string
  img: string
  price: number
  discount: number
}

interface Item {
  name: string
  amount: number
  price: number
  img: string
}

declare enum OrderStatus {
  UNPAID = '未支付',
  PAID = '已支付',
  DELIVERED = '已完成',
}

interface Order {
  deliverDate: string
  items: Item[]
  id: number
  status: OrderStatus
  totalPrice: number
}

interface Address {
  firstName: string
  lastName: string
  tel: string
  email: string
  address: string
  isDefault: string
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
