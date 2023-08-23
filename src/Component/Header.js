
import React, { useEffect, useState, useContext } from 'react';

import { ThemeContext } from '../context/themContext';

function Header() {
    const { theme, handleOnClcik } = useContext(ThemeContext)
    return (
        <>
            <div className='flex flex-row mb-10 mx-[auto] sm:mx-[auto] md:mx-[auto] lg:mx-[auto] 2xl:mx-[auto] xl:mx-[auto]'>

                <h1 className=" text-[56px] w-[651px] mx-[auto]">Todo</h1>

                <label class="relative inline-flex items-center cursor-pointer mr-[4px] mt-[40px] 2xl:mr-[40px]">
                    <input type="checkbox" value="" class="sr-only peer mt-[10px]" onClick={handleOnClcik} />
                    <div class="xl:w-[2.7rem] lg:w-[2.7rem] 2xl:w-[2.7rem] mt-[-20px] w-[3.75rem] h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ml-3 text-sm font-medium text-[black] dark:text-[white] mt-[-19px]">{theme} mode</span>
                </label>



            </div>




        </>
    )
}

export default Header