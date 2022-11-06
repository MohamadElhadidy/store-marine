import React from 'react'

function Login() {
  return (
    <div className=" py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-center">منظومة المشتريات</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input autoComplete="off" id="username" name="username" type="text" required className="text-center peer placeholder-transparent h-10 w-full border-b-2  border-gray-300 valid:border-green-500 text-gray-900 focus:outline-none focus:borer-rose-600 focus:border-blue-500" placeholder="Email address" />
                  <label htmlFor="username" className="absolute right-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">اسم الدخول</label>
                </div>
                <div className="relative">
                  <input autoComplete="off" id="password" name="password" type="password" required className="valid:border-green-500 text-center peer placeholder-transparent h-10 w-full border-b-2 border-gray-300  text-gray-900 focus:outline-none focus:borer-rose-600 focus:border-blue-500" placeholder="Password" />
                  <label htmlFor="password" className="absolute right-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">كلمة المرور</label>
                </div>
                <div className="relative flex justify-center ">
                  <button className="bg-blue-500  text-white rounded-md px-2 py-1 mt-[15px] hover:bg-blue-800">تسجيل الدخول</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login