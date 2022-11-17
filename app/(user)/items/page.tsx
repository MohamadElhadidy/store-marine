"use client"
import React from 'react'
import {
  Column,
  Table,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  FilterFn,
  ColumnFiltersState,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
} from '@tanstack/react-table'
import { AnimatePresence, useScroll, useSpring } from "framer-motion"
import { useState } from 'react'
import Add from './add'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { AiFillPlusCircle } from 'react-icons/ai'
import { FaHashtag } from 'react-icons/fa'
import { BsFillPrinterFill } from 'react-icons/bs'
import {
  rankItem,
} from '@tanstack/match-sorter-utils'
import Select from 'react-select'
import Link from 'next/link'
import { Item }  from './types'
import { GetData} from './api'
import Delete from './delete'
import Edit from './edit'

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



const columnHelper = createColumnHelper<Item>()




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
    <input {...props} value={value} onChange={e => setValue(e.target.value)}  dir='auto'/>
  )
}


function Filter({
  column,
  table,
}: {
  column: Column<any, unknown>
  table: Table<any>
}) {
  // const firstValue = table
  //   .getPreFilteredRowModel()
  //   .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  // const sortedUniqueValues = React.useMemo(
  //   () =>
  //     typeof firstValue === 'number'
  //       ? []
  //       : Array.from(column.getFacetedUniqueValues().keys()).sort(),
  //   [column.getFacetedUniqueValues()]
  // )
  return  column.id === 'actions' || column.id === 'balance' || column.id === 'unit' || column.id === 'price' || column.id === 'notes' ?  <></>:
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
  const [data, setData] = React.useState(() => [])
  const [id, setId] = React.useState({})
  const [sorting, setSorting] = React.useState<SortingState>([])

  const get = async () => {
    const result = await GetData()
    setData(result?.items)
  }

  React.useEffect(() => {
    get()
  }, [])



  const [columnVisibility, setColumnVisibility] = React.useState({})
  const [globalFilter, setGlobalFilter] = React.useState('')
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState(false)
  const columnVisibilityRef = React.useRef(null);

    console.log(globalFilter)

  const columns = [
    columnHelper.accessor('id', {
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('code', {
      header: 'كود الصنف',
      cell: info => info.getValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('name', {
      header: 'اسم الصنف',
      cell: info => info.getValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('type', {
      header: 'نوع الصنف',
      cell: info => info.renderValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('balance', {
      header: "الرصيد الحالي",
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
      cell: (props) => <div className="flex">
        <button className="cursor-pointer ml-3 " onClick={() => { setModalEdit(true); setId({ id: props.row.original.id }) }}><BiEdit className="text-2xl text-blue-800" /></button>
        <button onClick={() => { setModalDelete(true); setId({id: props.row.original.id, name : props.row.original.name}) }} className="cursor-pointer"><RiDeleteBin5Fill className="text-2xl text-red-800" /></button>
      </div>,

      footer: '',
    }),
  ]

  const table = useReactTable({
    data,
     // @ts-ignore
    columns, 
    onColumnFiltersChange: setColumnFilters,
    state: {
      columnVisibility: {...columnVisibility, id: false },
      globalFilter,
      columnFilters,
      sorting
    },
    onColumnVisibilityChange: setColumnVisibility,
    globalFilterFn: fuzzyFilter,
    onGlobalFilterChange: setGlobalFilter,
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel()

  })
  // console.log(table.getPageCount())

  // const currentData = table.getRowModel().rows.map(row => row.getVisibleCells())
  // console.log(currentData)

  React.useEffect(() => {
    const handleClickOutside = (event: Event) => {
       // @ts-ignore
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

  const [modalDelete, setModalDelete] = useState(false);

  const [modalEdit, setModalEdit] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const options = [
    { value: 10, label: '10' },
    { value: 15, label: '15' },
    { value: 25, label: '25' },
    { value: 50, label: '50' },
    { value: 100, label: '100' },
    { value: 'All', label: 'الكل' }
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
                <button  onClick={open} className="bg-black text-white hover:bg-blue-800   font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center justify-center" type="button"
                >
                <AiFillPlusCircle className='ml-2 text-xl'/>
                  <span className='text-sm'>إضافة صنف</span>
                </button>
              
              </div>
          </div>
            <div className=" shadow  flex py-3 justify-between items-center">
              <div className='relative  px-4 '>
                <div className='flex'>

                  <button onClick={() => setColumnVisibilityModel(!columnVisibilityModel)} className="bg-black text-white hover:bg-blue-800   font-bold 
                  px-3 py-2  rounded-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center justify-center" type="button"
                  >
                    <FaHashtag className='ml-2 text-xl' />
                    <span className='text-sm'>تخصيص الأعمده</span>
                  </button>
                  <Link  href={`/items/${table?.getState()?.pagination?.pageSize}`} target='_blank' className="bg-black text-white hover:bg-blue-800   font-bold 
                  px-3 py-2  rounded-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center justify-center" type="button"
                  >
                    <BsFillPrinterFill className='ml-2 text-xl' />
                    <span className='text-sm'>طباعة</span>
                  </Link>
                
                </div>
                
                <div ref={columnVisibilityRef}  className={`absolute  ${columnVisibilityModel ? 'visible' : 'invisible'} px-3  flex flex-wrap w-[15rem] bg-white rounded-lg  shadow-black shadow-lg` }>
                  {table.getAllLeafColumns().map(column => {
                    let header: any =  column.columnDef.header
                    if (column.id === 'actions') header = 'الأدوات'
                    if (column.id !== 'id'){
                    return (
                      <div key={column.id} className="px-1">
                        <label className='text-lg'>
                          <input
                            className='w-6 h-4 text-blue-600 bg-gray-100 rounded-lg border-gray-300 cursor-pointer '
                            {...{
                              type: 'checkbox',
                              checked: column.getIsVisible(),
                              onChange: column.getToggleVisibilityHandler(),
                            }}
                          />{' '}
                          {header}
                        </label>
                      </div>
                    )
                          }
                  })} 
                </div>
            </div> 

              <DebouncedInput
                  value={globalFilter ?? ''}
                  onChange={value => setGlobalFilter(String(value))}
                className="mx-4 px-3 py-2 font-lg    shadow-lg rounded-xl border-blue-500 border-2 text-center"
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
                        {/* {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null} */}
                    <div
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                      </th>
                    ))}
                    <th className="bg-black px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-1  border-l-0 border-r-0 whitespace-nowrap font-semibold text-center text-lg text-white"></th>
                  </tr>
                ))}   
              </thead>

              <tbody>
                  { table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map(header => (
                        <td key={header.id} className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center font-bold">
                          {header.column.getCanFilter() ? (
                            <div>
                              <Filter column={header.column} table={table} />
                            </div>
                          ) : null}
                        </td>
                      ))}
                    </tr>
                  ))}   
                  {data?.length ? 
                    table.getRowModel()?.rows?.length ? 
                  
                   table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map(cell => (
                      <td key={cell.id} className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center font-bold">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}

                       {/* <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center font-bold"><div className="flex">
                          <button className="cursor-pointer ml-3 "><BiEdit className="text-2xl text-blue-800" /></button>
                          <button onClick={() => setModalDelete(true)} className="cursor-pointer"><RiDeleteBin5Fill className="text-2xl text-red-800" /></button>
                        </div>
                        </td> */}

                    </tr>
                    
                 )) :
                <tr>
                  <td colSpan={8} className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-center font-bold ">
                      لا يوجد بيانات
                    </td>
                      </tr>
                 :
                   <tr>

                    <td colSpan={8} className='relative h-[3.5rem]'>
                      <svg className="absolute top-2 left-[50%] h-12 w-12 animate-spin stroke-blue-500" viewBox="0 0 256 256">
                        <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                        <line
                          x1="195.9"
                          y1="60.1"
                          x2="173.3"
                          y2="82.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="24"></line>
                        <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                        <line
                          x1="195.9"
                          y1="195.9"
                          x2="173.3"
                          y2="173.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="24"></line>
                        <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                        <line
                          x1="60.1"
                          y1="195.9"
                          x2="82.7"
                          y2="173.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="24"></line>
                        <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                        <line
                          x1="60.1"
                          y1="60.1"
                          x2="82.7"
                          y2="82.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="24"></line>
                      </svg>
                    </td>
                   </tr>
                 } 
              </tbody>

            </table>

            
          </div>
            <div className="flex items-center  justify-between">
                <Select
                  options={options}
                  instanceId='page-size'
                defaultValue={options[0]}
                  onChange={(e) => { 
                    e?.value === 'All' ?
                      table.setPageSize(Number(data?.length)) : table.setPageSize(Number(e?.value))
                    }}
                // value={{ label: table.pageS, value: table.setPageSize}}
                  className="mr-4 font-[600]   bg-white py-2.5 text-sm text-gray-900 focus:border-blue-600 " isSearchable={true} placeholder={'اختر عدد الصفوف'} menuPlacement={"top"} />
              

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
                {/* <button
                  className="border rounded p-1"
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                >
                  {'<<'}
                </button> */}
                {/* <button
                  className="border rounded p-1"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  {'السابق'}
                </button>
                <button
                  className="border rounded p-1"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  {'التالي'}
                </button> */}
                {/* <button
                  className="border rounded p-1"
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                >
                  {'>>'}
                </button> */}
                <span className="flex items-center gap-1 ml-2">
                  <div>إظهار    <strong> {table?.getState().pagination.pageIndex + 1}  من   {table?.getPageCount()} </strong></div>
                </span>

                <button
                  className={`border rounded  mx-1 my-2 p-1  ${table?.getCanPreviousPage()  ? 'text-black' : 'text-gray-400'}`}
                  onClick={() => table?.previousPage()}
                  disabled={!table?.getCanPreviousPage()}

                >
                  {'السابق'}
                </button>
                <button
                  className={`border rounded ml-3  mx-1 my-2 p-1  ${table?.getCanNextPage() ? 'text-black' : 'text-gray-400'}`}
                  onClick={() => table?.nextPage()}
                  disabled={!table?.getCanNextPage()}
                >
                  {'التالي'}
                </button>
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
        {modalDelete && <Delete handleClose={() => setModalDelete(false)} data={id} fetch={get} text="هل أنت متأكد من حذف الصنف ؟ " afterText='تم حذف الصنف بنجاح' />}
        {modalEdit && <Edit handleClose={() => setModalEdit(false)} data={id} fetch={get}/>}

        {modalOpen && <Add handleClose={close} text="Hi" fetch={get} />}
      </AnimatePresence>

    </>
  )
}

export default Items