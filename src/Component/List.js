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
    })




    return (
        <>
            <div className='container-3'>


                <input className="Input-2" type="checkbox" onClick={checked} defaultChecked={props.complete} ></input>
                <h1 style={{ textDecoration: line ? 'line-through' : 'none' }}>{props.title}</h1>


                <button className="Delete-btn" onClick={() => props.onDelete(props.id)}>
                    <i className="fa-solid fa-trash fa-2xl"></i>

                </button>



            </div>




        </>



    );


}

export default List