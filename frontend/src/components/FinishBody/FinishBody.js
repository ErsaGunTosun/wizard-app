import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

// Redux
import { prevProgress } from '../../stores/progress'

//Icons
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { TiTick } from "react-icons/ti";



function FinishBody() {
  const dispatch = useDispatch()
  const form = useSelector(state => state.form)
  const [status, setStatus] = useState('')
  const handleStart = () => {
    axios.post(process.env.REACT_APP_API_URL, { form: form })
      .then(rslt => {
        setStatus('success')
      })
  }

  return (
    <div className="basis-3/6 flex flex-col bg-white w-full px-16 justify-center rounded-xl">

      {
        status === 'success' ?
          <div className='flex justify-center text-center'>
            <p className="text-green-500 font-bold text-center">Success</p>
            <TiTick className="text-2xl text-green-500" />
          </div>
          :
          status === 'error' ?
            <div className='flex justify-center text-center'>
              <p className="text-red-500 font-bold text-center">Error</p>
              <TiTick className="text-2xl text-red-500" />
            </div>
            :
            <>
              <p className="text-2xl text-center">Start or Back</p>
              <div className="basis-1/5 flex flex-row items-center justify-center">
                <button type="button" className="flex  items-center text-gray-500 bg-transparent border border-gray-500 font-medium rounded-md text-sm px-9 py-2 me-2 mb-2 "
                  onClick={() => dispatch(prevProgress())}>
                  <MdKeyboardArrowLeft className="text-xl" />
                  Previous
                </button>
                <button type="button" className="flex  items-center text-white bg-green-500 border border-green-500 font-medium rounded-md text-sm px-9 py-2 me-2 mb-2 "
                  onClick={() => handleStart()}>
                  Start
                  <MdKeyboardArrowRight className="text-xl" />
                </button>
              </div>
            </>
      }


    </div>
  )
}

export default FinishBody