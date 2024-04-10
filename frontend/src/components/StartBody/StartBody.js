import React from 'react'
import { useDispatch } from 'react-redux'

// Redux
import { nextProgress } from '../../stores/progress'

//Icons
import { MdKeyboardArrowRight } from "react-icons/md";


function StartBody() {
  const dispatch = useDispatch()
  return (
    <div className="basis-3/6 flex flex-col bg-white w-full px-16 justify-center rounded-xl">
      <p className="text-2xl text-center">Welcome the about</p>
      <div className="basis-1/5 flex flex-row items-center justify-center">
        <button type="button" className="flex items-center text-white bg-red-500 border border-red-500 font-medium rounded-md text-sm px-12 py-2 me-2 mb-2 "
          onClick={() => dispatch(nextProgress())}>
          Next
          <MdKeyboardArrowRight className="text-xl" />
        </button>
      </div>

    </div>
  )
}

export default StartBody