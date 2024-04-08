import React from 'react'

function ComboBox({ placeholder }) {
    return (
        <div className="relative flex flex-col p-2 basis-1/2 h-fit mb-1">

            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                class="text-gray-500 bg-transparent border border-gray-300 px-4 py-2 inline-flex items-center rounded-sm" type="button">
                {placeholder}

                <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>


            {/* <div className='absolute searchRslt bg-gray-500 top-14 w-full p-4 flex flex-col gap-2 rounded-md max-h-48 overflow-y-scroll'>

            </div> */}
        </div>
    )
}

export default ComboBox