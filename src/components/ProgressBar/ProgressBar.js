import React from 'react'

// icons
import { FaCheck } from "react-icons/fa6";
import { HiChatBubbleLeftRight, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";

function ProgressBar() {
    return (
        <>
            <FaCheck className='text-6xl text-white border-2 border-white rounded-full p-3' />

            <div className="bg-white rounded-full h-4 w-4 mx-1"></div>
            <div className="bg-white rounded-full h-4 w-4 mx-1"></div>

            <HiOutlineChatBubbleLeftRight className='text-6xl bg-white text-red-500 border-2 border-white rounded-full p-3' />

            <div className="bg-gray-100/50 rounded-full h-4 w-4 mx-1"></div>
            <div className="bg-gray-100/50 rounded-full h-4 w-4 mx-1"></div>

            <FaUserAlt className='text-6xl text-gray-100/50 border-2  border-gray-100/50 rounded-full p-3' />
        </>
    )
}

export default ProgressBar