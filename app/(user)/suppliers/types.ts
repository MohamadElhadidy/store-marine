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

export type NewSupplier = {
  code: string
  name: string
  store: number
  notes: string
}

export type UpdateSupplier = {
  id:number,
  code: string
  name: string
  store: number
  notes: string
}