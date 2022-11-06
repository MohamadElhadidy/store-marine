import { MdNotificationsActive, MdAccountCircle } from 'react-icons/md'
import { AiOutlineLogout, AiOutlineUser, AiFillAppstore, AiOutlineBars } from 'react-icons/ai'
import { FaStoreAlt } from 'react-icons/fa'
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="container mx-auto px-4 w-full py-6 flex items-center justify-between shadow shadow-black">
      <Link href="/" legacyBehavior><a className="font-bold text-black text-xl hover:text-blue-600">منظومة المخازن</a></Link>
      <nav className='hidden md:block '>
        <ul className="flex items-center justify-center font-semibold">
          <li className="relative group px-3 py-2 cursor-pointer">
            <button className=" group-hover:text-blue-600 cursor-default text-xl">الأصناف</button>
            <div
              className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[300px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="relative z-10">
                  <div>
                    <ul className="mt-3 text-[15px]">
                      <li>

                        <Link href="/items/add"
                          className="block p-2 border-[1px] border-black mb-2 text-bold  -mx-1 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-blue-600" >
                          إضافة صنف
                          <p className="text-gray-500 font-normal"> لإضافة صنف جديد</p>
                        </Link>

                      </li>
                      <li>

                        <a
                          className="block border-[1px]  border-black  p-2 -mx-1 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-blue-600">
                          <Link href="/items" >   تقرير حصر الأصناف</Link>
                          <p className="text-gray-500 font-normal"> لطباعة - تعديل - حذف الأصناف</p>
                        </a>

                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </li>
          <li className="relative group px-3 py-2 cursor-pointer">
            <button className=" group-hover:text-blue-600 cursor-default text-xl">الموردين</button>
            <div
              className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[300px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="relative z-10">
                  <div>
                    <ul className="mt-3 text-[15px]">
                      <li>
                        <a href="#"
                          className="block p-2 border-[1px] border-black mb-2 text-bold  -mx-1 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-blue-600" >
                          إضافة مورد
                          <p className="text-gray-500 font-normal"> لإضافة مورد جديد</p>
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          className="block border-[1px]  border-black  p-2 -mx-1 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-blue-600">
                          تقرير حصر الموردين
                          <p className="text-gray-500 font-normal"> لطباعة - تعديل - حذف الموردين</p>
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </li>
          <li className="relative group px-3 py-2 cursor-pointer">
            <button className=" group-hover:text-blue-600 cursor-default text-xl">الورش الخارجية</button>
            <div
              className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[300px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="relative z-10">
                  <div>
                    <ul className="mt-3 text-[15px]">
                      <li>
                        <a href="#"
                          className="block p-2 border-[1px] border-black mb-2 text-bold  -mx-1 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-blue-600" >
                          إضافة ورشة خارجية
                          <p className="text-gray-500 font-normal"> لإضافة ورشة خارجية</p>
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          className="block border-[1px]  border-black  p-2 -mx-1 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-blue-600">
                          تقرير حصر الورش الخارجية
                          <p className="text-gray-500 font-normal"> لطباعة - تعديل - حذف الورش الخارجية</p>
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </li>
          <li className="relative group px-3 py-2 cursor-pointer">
            <button className=" group-hover:text-blue-600 cursor-default text-xl">حركة المخزن</button>
            <div
              className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[300px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="relative z-10">
                  <div>
                    <ul className="mt-3 text-[15px]">
                      <li>
                        <a href="#"
                          className="block p-2 border-[1px] border-black mb-2 text-bold  -mx-1 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-blue-600" >
                          اذن دخول  صنف او اصناف
                          {/* <p className="text-gray-500 font-normal"> لإضافة مورد جديد</p> */}
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          className="block border-[1px]  border-black mb-2  p-2 -mx-1 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-blue-600">
                          اذن خروج  صنف او اصناف
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          className="block border-[1px]  border-black  mb-2  p-2 -mx-1 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-blue-600">
                          اذن صيانة خارجية
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          className="block border-[1px]  border-black  p-2 -mx-1 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-blue-600">
                          طباعة  مستند
                          <p className="text-gray-500 font-normal"> لطباعة وتعديل وحذف مستند (  الدخول - الخروج - صيانة خارجية) </p>
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className='flex'>
          <li className="relative group px-3 py-2 ">
            <button className=" group-hover:text-blue-600 cursor-pointer text-2xl">
              <MdNotificationsActive /></button>
            <div
              className="absolute top-0  -left-5 md:-left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[250px] sm:min-w-[350px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="relative z-10">
                  <div className='text-center'>
                    <p className=" text-black text-center font-bold text-xl">الإشعارات</p>
                    <Link href="#" className=" text-blue-600 text-center font-bold text-md underline">أظهر جميع الإشعارات</Link>
                    <ul className="mt-3 text-[15px]">
                      <li>
                        <div className='flex border-[1px] hover:text-blue-600 border-black mb-2 text-bold  -mx-1 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 '>
                          <img alt="image" src="http://equip.marine-co.live/storage/uploads/1654594768_شخصية ماجد.jpg1591436647.jpg" className='sm:w-[80px] w-[70px]' />
                          <a href="#"
                            className="flex p-2 flex-col justify-center" >
                            <p className="font-bold text-gray-800">ماجد نبيل</p>
                            <p className="font-bold text-gray-800">تم تسجيل الدخول بنجاح</p>
                            <p className="text-gray-500 font-normal"> 2022-10-18 10:10:17</p>
                          </a>

                        </div>
                      </li>
                      <li>
                        <div className='flex border-[1px] hover:text-blue-600 border-black mb-2 text-bold  -mx-1 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 '>
                          <img alt="image" src="http://equip.marine-co.live/storage/uploads/1654594768_شخصية ماجد.jpg1591436647.jpg" className='sm:w-[80px] w-[70px] ' />
                          <a href="#"
                            className="flex p-2 flex-col justify-center" >
                            <p className="font-bold text-gray-800">ماجد نبيل</p>
                            <p className="font-bold text-gray-800">تم تسجيل الخروج بنجاح</p>
                            <p className="text-gray-500 font-normal"> 2022-10-18 10:11:17</p>
                          </a>

                        </div>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </li>
          <li className="relative group px-3 py-2 ">
            <button className=" group-hover:text-blue-600 cursor-pointer text-2xl">
              <MdAccountCircle /></button>
            <div
              className="absolute top-0 -left-10 md:-left-30 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="relative z-10">
                  <div>
                    {/* <p className=" text-black text-center font-bold text-xl">الإشعارات</p> */}
                    <ul className="mt-3 text-[15px]">
                      <li>
                        <a href="#"
                          className="flex p-2 border-[1px] border-black mb-2 text-bold  -mx-1 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-blue-600" >
                          <AiOutlineUser className='mt-[5px] ml-[5px]' />
                          الحساب الشخصي
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          className="flex  p-2 border-[1px] border-black mb-2 text-bold  -mx-1 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-blue-600" >
                          <AiOutlineLogout className='mt-[5px] ml-[5px]' />
                          تسجيل الخروج
                        </a>
                      </li>

                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </li>
          <li className="relative group px-3 py-2 ">
            <button className=" group-hover:text-blue-600 cursor-pointer text-2xl">
              <FaStoreAlt /></button>
            <div
              className="absolute top-0 -left-5 md:-left-30 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="relative z-10">
                  <div>
                    <p className=" text-black text-center font-bold text-lg">اختر المخزن</p>
                    <ul className="mt-3 text-[15px]">
                      <li>
                        <a href="#"
                          className="flex p-2 border-[1px] border-black mb-2 text-bold  -mx-1 rounded-lg bg-gradient-to-br from-blue-50 to-pink-50 hover:via-blue-50 transition ease-in-out duration-300  font-bold text-blue-600" >
                          <AiFillAppstore className='mt-[5px] ml-[5px]' />
                          مخزن قطع الغيار
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          className="flex  p-2 border-[1px] border-black mb-2 text-bold  -mx-1 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-blue-600" >
                          <AiFillAppstore className='mt-[5px] ml-[5px]' />
                          مخزن الزيوت
                        </a>
                      </li>

                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>

    </header>


  )
}