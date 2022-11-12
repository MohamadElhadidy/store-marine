"use client"
import React from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { useState } from 'react'
import AddItem from './add'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin5Fill } from 'react-icons/ri'


type Item = {
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

const defaultData: Item[] = [
  {
    id: 5,
    code: '1537',
    name: "خرطوم طول 60 سم ، 2/1 بوصة ، عدل * كوع",
    type: "قطع غيار",
    balance: 6,
    unit: "سم مربع",
    price: 50,
    notes: "تم الجرد يوم 17 / 9 / 2019",
    actions: <div className="flex"><button className="cursor-pointer    ml-3 "><BiEdit className="text-2xl text-blue-800" /></button><button className="cursor-pointer"><RiDeleteBin5Fill className="text-2xl text-red-800" /></button></div>
  },
]

const columnHelper = createColumnHelper<Item>()

const columns = [
  columnHelper.accessor('code', {
    header: () => 'كود الصنف',
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('name', {
    header: () => 'اسم الصنف',
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('type', {
    header: () => 'نوع الصنف',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('balance', {
    header: () => "الرصيد الحالي",
    footer: info => info.column.id,
  }),
  columnHelper.accessor('unit', {
    header: 'الوحده',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('price', {
    header: 'السعر',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('notes', {
    header: 'ملاحظات',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('actions', {
    header: '',
    cell: info => info.getValue(),
    footer: '',
  }),
]
function Items() {
  const [data, setData] = React.useState(() => [...defaultData])
  const table = useReactTable({
    data,
    columns, 
    getCoreRowModel: getCoreRowModel(),
  })
   const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <>
    <div className="py-1  container">
      <div className="w-full mb-12 xl:mb-0 px-4 mx-auto mt-24 ">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded  ">
          <div className="rounded-t mb-0 px-4 py-3 border-0 flex flex-wrap items-center justify-between w-full ">
              <div className="relative  px-4">
              <h3 className="font-semibold text-xl text-blueGray-700 underline underline-offset-[6px] decoration-blue-800 decoration-[4px]">تقرير الأصناف</h3>
              </div>
              <div className="relative  px-4">
                <button onClick={open} className="bg-black text-white hover:bg-blue-800  text-xs font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">إضافة صنف</button>
              </div>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead className='bg-black'>
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <th key={header.id} className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-lg text-white">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </th>
                    ))}
                  </tr>
                ))}   
              </thead>

              <tbody>
                {table.getRowModel().rows.map(row => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id} className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center font-bold">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
      </div>
      </div>
  </div>
 <AnimatePresence
        initial={false}
        mode='wait'
      >
        {modalOpen && <AddItem  handleClose={close} text="Hi" />}
      </AnimatePresence>

    </>
  )
}

export default Items