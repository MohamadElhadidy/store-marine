"use client"
import React from 'react'
import {
  Column,
  Table,
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  FilterFn,
  ColumnFiltersState,
  getPaginationRowModel
} from '@tanstack/react-table'
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { useState } from 'react'
import AddItem from './add'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin5Fill } from 'react-icons/ri'

import {
  RankingInfo,
  rankItem,
  compareItems,
} from '@tanstack/match-sorter-utils'
import Select from 'react-select'
import { fabClasses } from '@mui/material'


declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>
  }
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value)

  addMeta({
    itemRank,
  })
  return itemRank.passed
}


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
  {
    id: 6,
    code: '1536',
    name: "خرطوم طول 60 سم ، 2/1 بوصة ، عدل * كوع",
    type: "قطع غيار",
    balance: 6,
    unit: "سم مربع",
    price: 50,
    notes: "تم الجرد يوم 17 / 9 / 2019",
    actions: <div className="flex"><button className="cursor-pointer    ml-3 "><BiEdit className="text-2xl text-blue-800" /></button><button className="cursor-pointer"><RiDeleteBin5Fill className="text-2xl text-red-800" /></button></div>
  },
  {
    id: 6,
    code: '1536',
    name: "خرطوم طول 60 سم ، 2/1 بوصة ، عدل * كوع",
    type: "قطع غيار",
    balance: 6,
    unit: "سم مربع",
    price: 50,
    notes: "تم الجرد يوم 17 / 9 / 2019",
    actions: <div className="flex"><button className="cursor-pointer    ml-3 "><BiEdit className="text-2xl text-blue-800" /></button><button className="cursor-pointer"><RiDeleteBin5Fill className="text-2xl text-red-800" /></button></div>
  },
  {
    id: 6,
    code: '1536',
    name: "خرطوم طول 60 سم ، 2/1 بوصة ، عدل * كوع",
    type: "قطع غيار",
    balance: 6,
    unit: "سم مربع",
    price: 50,
    notes: "تم الجرد يوم 17 / 9 / 2019",
    actions: <div className="flex"><button className="cursor-pointer    ml-3 "><BiEdit className="text-2xl text-blue-800" /></button><button className="cursor-pointer"><RiDeleteBin5Fill className="text-2xl text-red-800" /></button></div>
  },
  {
    id: 6,
    code: '1536',
    name: "خرطوم طول 60 سم ، 2/1 بوصة ، عدل * كوع",
    type: "قطع غيار",
    balance: 6,
    unit: "سم مربع",
    price: 50,
    notes: "تم الجرد يوم 17 / 9 / 2019",
    actions: <div className="flex"><button className="cursor-pointer    ml-3 "><BiEdit className="text-2xl text-blue-800" /></button><button className="cursor-pointer"><RiDeleteBin5Fill className="text-2xl text-red-800" /></button></div>
  },
  {
    id: 6,
    code: '1536',
    name: "خرطوم طول 60 سم ، 2/1 بوصة ، عدل * كوع",
    type: "قطع غيار",
    balance: 6,
    unit: "سم مربع",
    price: 50,
    notes: "تم الجرد يوم 17 / 9 / 2019",
    actions: <div className="flex"><button className="cursor-pointer    ml-3 "><BiEdit className="text-2xl text-blue-800" /></button><button className="cursor-pointer"><RiDeleteBin5Fill className="text-2xl text-red-800" /></button></div>
  },
  {
    id: 6,
    code: '1536',
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

const defaultColumns = [
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

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = React.useState(initialValue)

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return (
    <input {...props} value={value} onChange={e => setValue(e.target.value)} />
  )
}


function Filter({
  column,
  table,
}: {
  column: Column<any, unknown>
  table: Table<any>
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  // const sortedUniqueValues = React.useMemo(
  //   () =>
  //     typeof firstValue === 'number'
  //       ? []
  //       : Array.from(column.getFacetedUniqueValues().keys()).sort(),
  //   [column.getFacetedUniqueValues()]
  // )
  console.log()
  return typeof firstValue === 'object' || column.id === 'balance' || column.id === 'unit' || column.id === 'price' || column.id === 'notes' ?  '':
    (
    <>
      {/* <datalist id={column.id + 'list'}>
        {sortedUniqueValues.slice(0, 5000).map((value: any) => (
          <option value={value} key={value} />
        ))}
      </datalist> */}
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? '') as string}
        onChange={value => column.setFilterValue(value)}
        placeholder='ابحث'
        className="w-36 border shadow rounded text-black bg-white text-center py-0"
        list={column.id + 'list'}
      />
      <div className="h-1" />
    </>
  )
}
function Items() {
  const [data, setData] = React.useState(() => [...defaultData])
  const [columns] = React.useState(() => [...defaultColumns])

  const [columnVisibility, setColumnVisibility] = React.useState({})
  const [globalFilter, setGlobalFilter] = React.useState('')
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState(false)
  const columnVisibilityRef = React.useRef(null);

  const table = useReactTable({
    data,
    columns, 
    onColumnFiltersChange: setColumnFilters,
    state: {
      columnVisibility,
      globalFilter,
      columnFilters
    },
    onColumnVisibilityChange: setColumnVisibility,
    globalFilterFn: fuzzyFilter,
    onGlobalFilterChange: setGlobalFilter,
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel()

  })
  React.useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (columnVisibilityRef.current && !columnVisibilityRef.current.contains(event.target)) {
        setColumnVisibilityModel(false)
      } 
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [columnVisibilityModel]);


  
   const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const option = [
    { value: '10', label: '10' },
    { value: '15', label: '15' },
    { value: '25', label: '25' },
    { value: '50', label: '50' },
    { value: '100', label: '100' }
  ] 
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
                <button  onClick={open} className="bg-black text-white hover:bg-blue-800  text-xs font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">إضافة صنف</button>
              </div>
          </div>
            <div className=" shadow  flex py-3 justify-between items-center">
              <div className='relative  px-4'>
                <button onClick={() => setColumnVisibilityModel(!columnVisibilityModel)} className="bg-black text-white hover:bg-blue-800  text-sm font-bold 
                 px-3 py-2  rounded-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">أظهر / أخفي الأعمده</button>
                
                <div ref={columnVisibilityRef}  className={`absolute  ${columnVisibilityModel ? 'visible' : 'invisible'} px-3  flex flex-wrap w-[15rem] bg-white rounded-lg  shadow-black shadow-lg` }>
                  {table.getAllLeafColumns().map(column => {
                    return (
                      <div key={column.id} className="px-1">
                        <label className='text-lg'>
                          <input
                            className='w-4 h-4 text-blue-600 bg-gray-100 rounded-lg border-gray-300 cursor-pointer '
                            {...{
                              type: 'checkbox',
                              checked: column.getIsVisible(),
                              onChange: column.getToggleVisibilityHandler(),
                            }}
                          />{' '}
                          {column.id}
                        </label>
                      </div>
                    )
                  })} 
                </div>
            </div> 

              <DebouncedInput
                  value={globalFilter ?? ''}
                  onChange={value => setGlobalFilter(String(value))}
                  className="mx-4 px-3 py-2 font-lg    shadow-lg rounded-xl border-blue-500 border-2"
                  placeholder="ابحث في جميع الأعمده"
                />
             
          </div>
          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead className='bg-black'>
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <th key={header.id} colSpan={header.colSpan} className="bg-black px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-1  border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-lg text-white">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
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
            <div className="flex items-center  justify-between">
              <Select 
                options={option}
                // defaultValue={{ value: table.getState().pagination.pageSize, label: table.getState().pagination.pageSize }}
                onChange={(e: Event) => { table.setPageSize(Number(e.value)) }}

                className="font-[600] peer appearance-none   bg-white py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" isSearchable={false} placeholder={'اختر عدد الصفوف'} menuPlacement={"top"} />
              

              {/* <select
                value={table.getState().pagination.pageSize}
                onChange={e => {
                  table.setPageSize(Number(e.target.value))
                }}
              > 
                {[5, 20, 30, 40, 50].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select> */}

              <div className='flex items-center  '>
                <button
                  className="border rounded p-1"
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                >
                  {'<<'}
                </button>
                <button
                  className="border rounded p-1"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  {'<'}
                </button>
                <button
                  className="border rounded p-1"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  {'>'}
                </button>
                <button
                  className="border rounded p-1"
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                >
                  {'>>'}
                </button>
                <span className="flex items-center gap-1">
                  <div>Page</div>
                  <strong>
                    {table.getState().pagination.pageIndex + 1} of{' '}
                    {table.getPageCount()}
                  </strong>
                </span>
              </div>

              
              {/* <span className="flex items-center gap-1">
                | Go to page:
                <input
                  type="number"
                  defaultValue={table.getState().pagination.pageIndex + 1}
                  onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                    table.setPageIndex(page)
                  }}
                  className="border p-1 rounded w-16"
                />
              </span> */}

              

            </div>
            {/* <div>{table.getPrePaginationRowModel().rows.length} Rows</div> */}
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