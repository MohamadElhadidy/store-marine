"use client"
import React from 'react'
import Select from 'react-select'


function AddItems() {
  const options = [
    { value: 'chocolate', label: 'عدد' },
    { value: 'strawberry', label: 'جم' },
    { value: 'vanilla', label: 'كم' }
  ] 
  const options2 = [
    { value: 'chocolate', label: 'قطع الغيار' },
    { value: 'strawberry', label: 'الزيوت' }
  ]
 const options3 = [
    { value: 'chocolate', label: ' مخزن قطع الغيار' },
   { value: 'strawberry', label: ' مخزن الزيوت' }
  ]

  return (
    <div className="mx-auto w-full justify-content shadow shadow-black p-5">
      <h1 className="text-3xl font-bold text-center">إضافة صنف جديد</h1>
      <form action="" className="mt-10 flex flex-col  items-center">
        <div className="grid gap-5 sm:grid-cols-8">
          <div className="relative z-0 col-span-2">
            <input type="text" name="name" className="font-[600] peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label className="font-bold absolute top-3 -z-10 origin-[0] -translate-y-6 scale-85 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">كود الصنف</label>
          </div>
          <div className="relative z-0 col-span-3">
            <input type="text" name="name" className="font-[600] peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label className="font-bold absolute top-3 -z-10 origin-[0] -translate-y-6 scale-85 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">اسم الصنف</label>
          </div>
          <div className="relative z-0 col-span-3">
            <input type="text" name="name" className="font-[600] peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label className="font-bold absolute top-3 -z-10 origin-[0] -translate-y-6 scale-85 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">رصيد أول المدة</label>
          </div>

          <div className="relative z-2 col-span-2">
            <Select  className="font-[600] peer block w-full appearance-none   bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" isSearchable={true} isClearable={true} isRtl={true} options={options} placeholder={'اختر الوحدة'} />
          </div>
          <div className="relative z-0 col-span-3">
            <input type="text" name="name" className="font-[600] peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label className="font-bold absolute top-3 -z-10 origin-[0] -translate-y-6 scale-85 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"> سعر الوحدة </label>
          </div>
          <div className="relative z-0 col-span-3">
            <input type="text" name="name" className="font-[600] peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label className="font-bold absolute top-3 -z-10 origin-[0] -translate-y-6 scale-85 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"> حد الطلب </label>
          </div>
  
          <div className="relative z-1 col-span-2">
            <Select  className="font-[600] peer block w-full appearance-none   bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" isSearchable={true} isClearable={true} isRtl={true} options={options2} placeholder={'اختر  نوع الصنف'} />
          </div>
          <div className="relative z-0 col-span-3">
     <Select  className="font-[600] peer block w-full appearance-none   bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" isSearchable={true} isClearable={true} isRtl={true} options={options3} placeholder={'اختر  المخزن '} />
          </div>
          <div className="relative z-0 col-span-3">
             <input type="text" name="name" className="font-[600] peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label className="font-bold absolute top-3 -z-10 origin-[0] -translate-y-6 scale-85 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">ملاحظات</label>
          </div>
        </div>   
          

        <button type="submit" className="mt-5 rounded-md bg-black px-10 py-2 text-white">حفظ البيانات</button>
      </form>
    </div>
  )
}

export default AddItems