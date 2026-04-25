import React from 'react';
import Image from 'next/image';

export default function TelegramLogin() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4 font-sans text-gray-900">
      {/* Header Section */}
      <div className="mb-10 flex flex-col items-center text-center">
        <div className="mb-10">
          <Image
            src="/images/tele.png"
            alt="Telegram Logo"
            width={160}
            height={160}
            priority
          />
        </div>

        <h1 className="text-[32px] font-semibold leading-tight">Telegram</h1>
        <p className="mt-4 max-w-[280px] text-[16px] text-gray-500">
          Please confirm your country code and enter your phone number.
        </p>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-[360px] space-y-7">

        {/* Country Dropdown */}
        <div className="group relative">
          <label className="absolute -top-2.5 left-3 z-10 bg-white px-1 text-[13px] text-[#24A1DE] transition-colors group-focus-within:text-[#24A1DE]">
            Country
          </label>
          <div className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-gray-300 p-4 transition-all hover:border-gray-400 focus-within:border-2 focus-within:border-[#24A1DE]">
            <span className="text-[17px]">Philippines</span>
            <svg
              className="h-6 w-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Phone Input */}
        <div className="group relative">
          <label className="absolute -top-2.5 left-3 z-10 bg-white px-1 text-[13px] text-gray-400 transition-colors group-focus-within:text-[#24A1DE]">
            Your phone number
          </label>
          <input
            type="tel"
            defaultValue="+63"
            className="w-full rounded-xl border border-gray-300 p-4 text-[17px] outline-none transition-all focus:border-2 focus:border-[#24A1DE]"
          />
        </div>

        {/* Keep Signed In Checkbox */}
        <label className="flex cursor-pointer items-center space-x-4">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              defaultChecked
              className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 transition-all checked:bg-[#24A1DE] checked:border-[#24A1DE]"
            />
            <svg
              className="absolute h-5 w-5 pointer-events-none hidden peer-checked:block text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-[15px] font-medium text-gray-700">Keep me signed in</span>
        </label>
      </div>

      {/* Bottom Actions */}
      <div className="mt-14 flex flex-col space-y-7 text-center">
        <button className="text-[14px] font-bold uppercase tracking-wide text-[#24A1DE] transition-opacity hover:opacity-70">
          Log in by QR Code
        </button>
        <button className="text-[14px] font-bold uppercase tracking-wide text-[#24A1DE] transition-opacity hover:opacity-70">
          Log in with Passkey
        </button>
      </div>
    </div>
  );
}