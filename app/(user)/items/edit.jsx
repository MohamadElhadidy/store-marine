"use client"
import { motion } from "framer-motion";
import Backdrop from "./backdrop";
import Select from 'react-select'
import React from 'react'
import { EditData, UpdateData } from "./api";
const flip = {
  hidden: {
    transform: "scale(0)",
    opacity: 0,
    transition: {
      delay: 0.3,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  visible: {
    transform: " scale(1)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) ",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};


const options = [
  { value: 1, label: 'عدد' },
  { value: 2, label: 'جم' },
  { value: 3, label: 'كم' },
  { value: 4, label: 'متر' }
]
const options2 = [
  { value: 1, label: 'قطع الغيار' },
  { value: 2, label: 'الزيوت' }
]
const options3 = [
  { value: 1, label: ' مخزن قطع الغيار' },
  { value: 2, label: ' مخزن الزيوت' }
]


const Edit = ({ handleClose, fetch, data }) => {
  const [loading, setLoading] = React.useState(false)
  const [messages, setMessages] = React.useState(null)
  const [loadingData, seLoadingData] = React.useState(true)
  const [item, setItem] = React.useState(null)
  const { id } = data
  const code = React.useRef(null)
  const name = React.useRef(null)
  const type = React.useRef(null)
  const balance = React.useRef(null)
  const price = React.useRef(null)
  const unit = React.useRef(null)
  const notes = React.useRef(null)
  const end = React.useRef(null)
  const store = React.useRef(null)

  const getItem = async(id)=>{
    const response = await EditData(id);
    if(response.item){
      setItem(response.item)
      seLoadingData(false)    
    }
  }

  React.useEffect(()=>{
    getItem(id);

  },[])

  const handleChangeUnit = (value)=> setItem({ ...item, unit : value})
  const handleChangeType = (value)=> setItem({ ...item, type : value})
  const handleChangeStore = (value)=> setItem({ ...item, store : value})
  

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const result = await UpdateData({id, code: code.current.value, name: name.current.value, balance: balance.current.value, unit: unit.current?.getValue()[0]?.value, price: price.current.value, end: end.current.value, type: type.current?.getValue()[0]?.value, store: store.current?.getValue()[0]?.value, notes: notes.current.value })
    if (result) {
      if (!result.message) {
        setMessages({ message: result, status: false })
      } else {
        setMessages({ message: result.message, status: true })
        fetch()
      }
    }
    setLoading(false)
  }
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="mx-auto  justify-content shadow shadow-black p-5 bg-white relative"
        variants={flip}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {loadingData && 
        
            <svg className="absolute top-[40%] left-[50%]  h-12 w-12 animate-spin stroke-blue-500" viewBox="0 0 256 256">
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

}
        <>
            <button onClick={handleClose} type="button" className="absolute top-3 right-2.5 text-black bg-transparent   rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white" data-modal-toggle="popup-modal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
            <h1 className="text-3xl font-bold text-center">تعديل صنف</h1>
            <h3 className={`text-xl ${messages?.message && messages.status ? "text-green-600" : "text-red-600"} text-center  font-bold mt-5`}>{messages?.message && messages.message}</h3>
          <form action="" className={`${loadingData && 'animate-pulse'} mt-10 flex flex-col  items-center`} onSubmit={submit}>
              <div className="grid gap-5 sm:grid-cols-8">
                <div className="relative z-0 col-span-2">
                <input dir="auto" type="text" disabled={loadingData} ref={code}   defaultValue={item ? item?.code : ''} className="text-center font-[600] peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                  <label className="font-bold absolute top-3 -z-10 origin-[0] -translate-y-6 scale-85 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-90  peer-focus:text-blue-500">كود الصنف</label>
                </div>
                <div className="relative z-0 col-span-3">
                <input dir="auto" type="text" ref={name} disabled={loadingData} defaultValue={item ? item?.name : ''} className="text-center font-[600] peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                  <label className="font-bold absolute top-3 -z-10 origin-[0] -translate-y-6 scale-85 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-90  peer-focus:text-blue-500">اسم الصنف</label>
                </div>
                <div className="relative z-0 col-span-3">
                <input dir="auto" type="text" ref={balance}  disabled={loadingData} defaultValue={item ? item?.balance : ''} className="text-center font-[600] peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                  <label className="font-bold absolute top-3 -z-10 origin-[0] -translate-y-6 scale-85 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-90  peer-focus:text-blue-500">رصيد أول المدة</label>
                </div>

                <div className="relative z-2 col-span-2">
                <Select ref={unit} isDisabled={loadingData} value={options.find((e) => e.value == item?.unit)} 
                onChange={value => handleChangeUnit(value)} className=" font-[600] peer block w-full appearance-none   bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" isSearchable={true} isClearable={true} isRtl={true} options={options} placeholder={'اختر الوحدة'} />
                </div>
                <div className="relative z-0 col-span-3">
                <input dir="auto" type="text" disabled={loadingData}  ref={price}  defaultValue={item ? item?.price : ''} className="text-center font-[600] peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                  <label className="text-center font-bold absolute top-3 -z-10 origin-[0] -translate-y-6 scale-85 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-90  peer-focus:text-blue-500"> سعر الوحدة </label>
                </div>
                <div className="relative z-0 col-span-3">
                <input dir="auto" type="text" ref={end} disabled={loadingData} defaultValue={item ? item?.end : ''} className="text-center font-[600] peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                  <label className="font-bold absolute top-3 -z-10 origin-[0] -translate-y-6 scale-85 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-90  peer-focus:text-blue-500"> حد الطلب </label>
                </div>

                <div className="relative z-1 col-span-2">
                <Select ref={type} isDisabled={loadingData} onChange={value => handleChangeType(value)} value={options2.find((e) => e.value == item?.type)} className="font-[600] peer block w-full appearance-none   bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" isSearchable={true} isClearable={true} isRtl={true} options={options2} placeholder={'اختر  نوع الصنف'} />
                </div>
                <div className="relative z-1 col-span-3">
                <Select ref={store} isDisabled={loadingData} onChange={value => handleChangeStore(value)}  value={options3.find((e) => e.value == item?.store)} className="font-[600] peer block w-full appearance-none   bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" isSearchable={true} isClearable={true} isRtl={true} options={options3} placeholder={'اختر  المخزن '} />
                </div>
                <div className="relative z-0 col-span-3">
                <input dir="auto" type="text" ref={notes} disabled={loadingData} defaultValue={item ? item?.notes : ''} className="text-center font-[600] peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                  <label className="font-bold absolute top-3 -z-10 origin-[0] -translate-y-6 scale-85 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-90  peer-focus:text-blue-500">ملاحظات</label>
                </div>
              </div>
              <div className="flex mt-5 ">
              <button type="submit" className={` relative rounded-md bg-green-800 ${loading ? "pl-10 pr-3" : "px-5"}  py-2 text-white flex items-center z-0 ml-3 hover:bg-green-700`} disabled={loadingData | loading}>
                  حفظ البيانات
                  {loading ? <svg aria-hidden="true" className=" absolute left-0 w-10 h-8 text-white animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg> : ''}
                </button>
                <button onClick={handleClose}  disabled={loadingData | loading} type="button" className="   focus:ring-4 focus:outline-none rounded-md border font-medium px-5 py-2  focus:z-10 bg-gray-700 text-white border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600">إلغاء</button>
              </div>


            </form>
        </>
      </motion.div>
    </Backdrop>
  );
};


export default Edit;