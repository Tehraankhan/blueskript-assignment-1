import React, { useEffect, useState } from 'react';






function List(props) {
    const [line, setline] = useState(false)


    const checked = (e) => {
        if (e.target.checked) {
            setline(true)

            props.check(props.id, true)

        }
        else {


            setline(false)
            props.check(props.id, false)




        }

    }
    useEffect(() => {

        if (props.complete) {
            setline(true)
        }
        else {
            setline(false)
        }
    }, [])




    return (

        <>
            <div className='flex flex-row bg-[#c4f9ff85] w-[346px] h-[4.5rem] mx-[auto] rounded-[5px] mt-[18px] sm:mx-[auto] sm:w-[450px] md:w-[600px] md:h-[5rem] lg:w-[700px] lg:mx-[auto] xl:w-[900px] 2xl:w-[900px] 2xl:mx-[auto]'>


                <input className="basis-[19px] w-[1px] h-[13px] mt-8 ml-2" type="checkbox" onClick={checked} defaultChecked={props.complete} ></input>
                <h1 className=" w-[800px] mt-5 text-[21px]" style={{ textDecoration: line ? 'line-through' : 'none' }}>{props.title}</h1>


                <button onClick={() => props.onDelete(props.id)}>
                    <i className="fa-solid fa-trash-can fa-2xl mt-[0px]" ></i>


                </button>



            </div>




        </>



    );


}

export default List