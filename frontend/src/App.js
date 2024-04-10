import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components 
import ProgressBar from "./components/ProgressBar/ProgressBar";
import FormBody from "./components/FormBody/FormBody";
import StartBody from "./components/StartBody/StartBody";
import FinishBody from "./components/FinishBody/FinishBody";


function App() {
  const dispatch = useDispatch();
  const porgressId = useSelector((state) => state.progress.progressId);

  const getBodyWithId = () => {
    if (porgressId === 1) {
      return <StartBody />
    }
    else if (porgressId === 2) {
      return <FormBody />
    }
    else if (porgressId === 3) {
      return <FinishBody />
    }

  }

  return (
    <div className="App w-full h-full bg-red-500 ">
      <div className="flex flex-row bg-red-500 w-full h-full justify-center">
        <div className="basis-3/6 h-full flex flex-col items-center justify-center bg-red-500 ">
          {/* Progress Bar */}
          <div className='basis-1/6 flex flex-row justify-center items-center bg-red-500 w-full '>
            <ProgressBar />
          </div>

          {/* Form */}
          {
            getBodyWithId()
          }

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
