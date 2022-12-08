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

export type NewWorkshop = {
  code: string
  name: string
  store: number
  notes: string
}

export type UpdateWorkshop = {
  id:number,
  code: string
  name: string
  store: number
  notes: string
}