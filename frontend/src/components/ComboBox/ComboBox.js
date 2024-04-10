import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

import { setIsOpen, setValue } from "../../stores/form";

// icons 
import { TiTick } from "react-icons/ti";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function ComboBox({ placeholder, name }) {
    const itemsData = [
        {
            name: 'Option 1',
            isSelect: false
        },
        {
            name: 'Option 2',
            isSelect: false
        },
        {
            name: 'Option 3',
            isSelect: false
        },
        {
            name: 'Option 4',
            isSelect: false
        }
    ]

    const dispatch = useDispatch();
    const form = useSelector((state) => state.form);
    const [items, setItems] = useState(itemsData)
    const [selectedItem, setSelectedItem] = useState('')
    const [open, setOpen] = useState(false)


    useEffect(() => {
        Object.keys(form).map((key) => {
            if (key == name) {
                setOpen(form[key].isOpen)
            }
        })
    }, [form])


    const handleOpen = (e) => {
        Object.keys(form).map((key) => {
            dispatch(setIsOpen({ name: key, isOpen: false }))
        })
        setOpen(!open)
        dispatch(setIsOpen({ name: name, isOpen: !open }))
    }

    const handleSelect = (index) => {
        let tempItems = [...items]
        if (tempItems[index].isSelect == true) {
            tempItems[index].isSelect = false
            setSelectedItem('')
            dispatch(setValue({ name: name, value: ''}))
        } else {
            tempItems[index].isSelect = !tempItems[index].isSelect
            setSelectedItem(tempItems[index].name)
            dispatch(setValue({ name: name, value: tempItems[index].name }))
        }
        setItems(tempItems)
    }

    return (
        <div className="relative flex flex-col p-2 basis-1/2 h-fit mb-1 ">

            <div className='relative'
                onClick={(e) => handleOpen(e)}>
                <div className=' border border-gray-300 p-2  flex flex-row w-full rounded-sm cursor-pointer '>
                    <p className='basis-4/5 text-gray-500'>
                        {selectedItem.length == 0 ?
                            placeholder
                            :
                            selectedItem
                        }
                    </p>
                    <div className='flex basis-1/5 justify-end'>
                        {
                            open ?
                                <MdKeyboardArrowUp className='text-gray-500 text-xl' />
                                :
                                <MdKeyboardArrowDown className='text-gray-500 text-xl' />
                        }

                    </div>
                </div>

                {open && <div className='absolute bg-white border top-10 border-gray-300 w-full rounded-sm z-40'>
                    {
                        items.map((item, index) => (
                            <div className={`p-2 cursor-pointer border border-l-4 border-white border-b-gray-300 ${item.isSelect ? "border-l-red-500" : ""} `}
                                onClick={() => handleSelect(index)}>
                                <p className="flex">
                                    {item.name}
                                    <span className='flex-grow  justify-end flex px-2'>
                                        {
                                            item.isSelect && <TiTick className='text-red-500 text-xl' />

                                        }
                                    </span>
                                </p>
                            </div>
                        ))
                    }
                </div>}
            </div>



        </div>
    )
}

export default ComboBox