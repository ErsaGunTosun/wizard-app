import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

// Redux

// icons
import { FaCheck } from "react-icons/fa6";
import { HiChatBubbleLeftRight, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";

function ProgressBar() {
    const dispatch = useDispatch();
    const progressId = useSelector((state) => state.progress.progressId);
    return (
        <>
            <FaCheck
                className={`text-6xl ${progressId == 1 ? "bg-white text-red-500" : "bg-tranparent text-white"}  border-2 border-white rounded-full p-3`}
            />

            <div className={`${progressId > 1 ? "bg-white" : "bg-gray-100/50"} rounded-full h-4 w-4 mx-1`}></div>
            <div className={`${progressId > 1 ? "bg-white" : "bg-gray-100/50"} rounded-full h-4 w-4 mx-1`}></div>
            
            <HiChatBubbleLeftRight
                className={`text-6xl ${progressId == 2 ? "bg-white text-red-500" : "bg-tranparent text-white"}  border-2 border-white rounded-full p-3`} />

            <div className={`${progressId > 1 ? "bg-white" : "bg-gray-100/50"} rounded-full h-4 w-4 mx-1`}></div>
            <div className={`${progressId > 1 ? "bg-white" : "bg-gray-100/50"} rounded-full h-4 w-4 mx-1`}></div>

            <FaUserAlt className={`text-6xl ${progressId == 3 ? "bg-white text-red-500" : "bg-tranparent text-white"}  border-2 border-white rounded-full p-3`} />
        </>
    )
}

export default ProgressBar