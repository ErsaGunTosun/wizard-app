import React from 'react'
import { useDispatch } from 'react-redux'

// Redux
import { nextProgress, prevProgress } from '../../stores/progress'

//Components
import ComboBox from '../ComboBox/ComboBox'

//Icons
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function FormBody() {
    const dispatch = useDispatch()

    return (
        <div className="basis-3/6 flex flex-col bg-white w-full px-16 justify-center rounded-xl">
            <div className="basis-1/5">
                <p className="text-2xl text-center">Tell Us About Your Requirements</p>
            </div>


            <div className="hasis-3/5 w-full flex flex-row flex-wrap ">
                <ComboBox placeholder={"You are"} name={"youAre"} />
                <ComboBox placeholder={"You have"} name={"youHave"} />
                <ComboBox placeholder={"Type of Project/Query"} name={"typeOfProject"} />
                <ComboBox placeholder={"Budget"} name={"budget"} />
            </div>


            <div className="basis-1/5 flex flex-row items-center justify-center">
                <button type="button" className="flex  items-center text-gray-500 bg-transparent border border-gray-500 font-medium rounded-md text-sm px-9 py-2 me-2 mb-2 "
                    onClick={() => dispatch(prevProgress())}>
                    <MdKeyboardArrowLeft className="text-xl" />
                    Previous
                </button>
                <button type="button" className="flex items-center text-white bg-red-500 border border-red-500 font-medium rounded-md text-sm px-12 py-2 me-2 mb-2 "
                    onClick={() => dispatch(nextProgress())}>
                    Next
                    <MdKeyboardArrowRight className="text-xl" />
                </button>
            </div>
        </div>
    )
}

export default FormBody