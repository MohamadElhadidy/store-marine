"use client"
import React from 'react'
import { GetData } from '../api'
import Loading from '../../../loading'
function Print({ params: any, searchParams: any }) {
  const [data, setData] = React.useState(() => [])

  const get = async () => {
    const result = await GetData()
    setData(result?.items?.slice(0, params.print))
  }

  React.useEffect(() => {
    get()
  }, [])
  return (
    !data.length ?
      <Loading/>
      :<div className="w-full px-1 py-1 flex flex-col justify-center items-center">
        <p
          className="text-center w-36 px-0 py-2 border-[1px] mb-2 border-black rounded-lg  text-gray-800 font-bold">
          تقرير الأصناف 
        </p>
      <table className="items-center bg-transparent w-full border-collapse  ">
        <thead className='bg-black'>
          <tr>
              <th className="  bg-black p-0 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-black  whitespace-nowrap font-semibold text-center text-sm text-white">
              كود الصنف
            </th>
            <th className="bg-black p-0 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-black whitespace-nowrap font-semibold text-center text-sm text-white">
              اسم الصنف
            </th>
            <th className="bg-black p-0 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-black  whitespace-nowrap font-semibold text-center text-sm text-white">
              نوع الصنف
            </th>
            <th className="bg-black p-0 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-black  whitespace-nowrap font-semibold text-center text-sm text-white">
              الرصيد الحالي
            </th>
            <th className="bg-black p-0 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-black  whitespace-nowrap font-semibold text-center text-sm text-white">
              الوحده
            </th>
            <th className="bg-black p-0 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-black  whitespace-nowrap font-semibold text-center text-sm text-white">
              السعر
            </th>
            <th className="bg-black p-0 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-black  whitespace-nowrap font-semibold text-center text-sm text-white">
              ملاحظات
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map(row => 
            <tr key={row.id}>
              <td className=" align-middle text-xs whitespace-nowrap  text-center font-bold border border-solid border-black">
              {row.code}
            </td>
              <td className=" align-middle text-xs  text-center font-bold border border-solid border-black">
                {row.name}
            </td>
              <td className=" align-middle text-xs whitespace-nowrap  text-center font-bold border border-solid border-black">
                {row.type}
            </td>
              <td className=" align-middle text-xs whitespace-nowrap  text-center font-bold border border-solid border-black">
                {row.balance}
            </td>
              <td className=" align-middle text-xs whitespace-nowrap  text-center font-bold border border-solid border-black">
                {row.unit}
            </td>
              <td className=" align-middle text-xs whitespace-nowrap  text-center font-bold border border-solid border-black">
                {row.price}
            </td>
              <td className=" align-middle text-xs whitespace-nowrap  text-center font-bold border border-solid border-black">
                {row.notes}
            </td>
          </tr>
          
        
          ) }


        </tbody>

    </table>


    </div>
  )
}

export default Print