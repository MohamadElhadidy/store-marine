export type Item = {
  id: number
  code: string
  name: string
  type: string
  balance: number
  unit: string
  price: number
  notes: string
  actions: any
}

export type NewItem = {
  code: string
  name: string
  type: string
  balance: number
  unit: string
  price: number
  end: number
  store: number
  notes: string
}