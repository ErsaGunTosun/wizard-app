import React from "react";

// Components 
import ProgressBar from "./components/ProgressBar/ProgressBar";
import ComboBox from "./components/ComboBox/ComboBox";



import { TiTick } from "react-icons/ti";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";

function App() {
  return (
    <div className="App w-full h-full bg-red-500 ">
      <div className="flex flex-row bg-red-500 w-full h-full justify-center">
        <div className="basis-3/6 h-full flex flex-col items-center justify-center bg-red-500 ">
          <div className='basis-1/6 flex flex-row justify-center items-center bg-red-500 w-full '>
            <TiTick className='text-6xl text-white border-2 border-white rounded-full p-3' />

            <div className="bg-white rounded-full h-4 w-4 mx-1"></div>
            <div className="bg-white rounded-full h-4 w-4 mx-1"></div>

            <HiChatBubbleLeftRight className='text-6xl text-white border-2  border-white rounded-full p-3' />

            <div className="bg-gray-100/50 rounded-full h-4 w-4 mx-1"></div>
            <div className="bg-gray-100/50 rounded-full h-4 w-4 mx-1"></div>

            <FaUserAlt className='text-6xl text-gray-100/50 border-2  border-gray-100/50 rounded-full p-3' />
          </div>
          <div className="basis-3/6 flex flex-col bg-white w-full px-16 justify-center rounded-xl">
            <div className="basis-1/5">
              <p className="text-2xl text-center">Tell Us About Your Requirements</p>
            </div>

            <div className="hasis-3/5 w-full flex flex-row flex-wrap ">
              <ComboBox placeholder={"You are"} />
              <ComboBox placeholder={"You have"}/>
              <ComboBox placeholder={"Type of Project/Query"}/>
              <ComboBox placeholder={"Budget"}/>
            </div>
            <div className="basis-1/5 flex flex-row items-center justify-center">
              <button type="button" class=" text-gray-500 bg-transparent border border-gray-500 font-medium rounded-sm text-sm px-12 py-2 me-2 mb-2 ">{"< Previous"}</button>
              <button type="button" class=" text-white bg-red-500 font-medium rounded-sm text-sm px-12 py-2 me-2 mb-2 ">{"Next >"}</button>
            </div>
          </div>
          <div>
            <p className="text-white mt-4 text-lg">
              Want to contact us? Call us on +91 9945203372, +91 4844851617
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
