import React from "react";

// Components 
import ProgressBar from "./components/ProgressBar/ProgressBar";
import ComboBox from "./components/ComboBox/ComboBox";


//icons
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


function App() {
  return (
    <div className="App w-full h-full bg-red-500 ">
      <div className="flex flex-row bg-red-500 w-full h-full justify-center">
        <div className="basis-3/6 h-full flex flex-col items-center justify-center bg-red-500 ">

          {/* Progress Bar */}
          <div className='basis-1/6 flex flex-row justify-center items-center bg-red-500 w-full '>
            <ProgressBar />
          </div>

          <div className="basis-3/6 flex flex-col bg-white w-full px-16 justify-center rounded-xl">

            {/* Title */}
            <div className="basis-1/5">
              <p className="text-2xl text-center">Tell Us About Your Requirements</p>
            </div>


            {/* Combo Boxes*/}
            <div className="hasis-3/5 w-full flex flex-row flex-wrap ">
              <ComboBox placeholder={"You are"} />
              <ComboBox placeholder={"You have"} />
              <ComboBox placeholder={"Type of Project/Query"} />
              <ComboBox placeholder={"Budget"} />
            </div>

            {/* Action Buttons */}
            <div className="basis-1/5 flex flex-row items-center justify-center">
              <button type="button" class="flex  items-center text-gray-500 bg-transparent border border-gray-500 font-medium rounded-md text-sm px-9 py-2 me-2 mb-2 ">
                <MdKeyboardArrowLeft className="text-xl" />
                Previous
              </button>
              <button type="button" class="flex items-center text-white bg-red-500 border border-red-500 font-medium rounded-md text-sm px-12 py-2 me-2 mb-2 ">
                Next
                <MdKeyboardArrowRight  className="text-xl"/>
              </button>
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
