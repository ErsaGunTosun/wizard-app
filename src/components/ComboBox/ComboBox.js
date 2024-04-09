import React from 'react'
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";
function ComboBox({ placeholder }) {
    return (
        <div className="relative flex flex-col p-2 basis-1/2 h-fit mb-1">


            <div className='bg-transparent border border-gray-300 p-2 flex flex-row w-full rounded-sm cursor-pointer'>
                <p className='basis-4/5 text-gray-500'>
                    {placeholder}
                </p>
                <div className='flex basis-1/5 justify-end'>
                    <MdKeyboardArrowDown className='text-gray-500 text-xl' />
                </div>
            </div>


        </div>
    )
}

export default ComboBox