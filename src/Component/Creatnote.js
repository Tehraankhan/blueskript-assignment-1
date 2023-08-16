import React, { useEffect, useState } from 'react';
import List from './List';



function Createnote() {

    //These function use to store the data on local storage 

    const getlocalstorge = () => {
        let li = localStorage.getItem('item');

        if (li) {
            return (JSON.parse(localStorage.getItem("item")))
        }
        else
            return ([])


    }
    const [data, setdata] = useState("");
    const [item, setitem] = useState(getlocalstorge);



    const input = (e) => {

        setdata(e.target.value)


    }

    //These function allows us to store the data which is written into the input tag 
    const additem = () => {



        if (data === '') {

            alert("Please Enter the data")
        }
        else {
            const alldata = { id: new Date().getTime().toString(), name: data, checkdata: false }

            setitem([...item, alldata])



            setdata(" ")

        }




    }
    console.log(item)


    const Delete = (id) => {


        setitem(prevData => {



            return [...prevData.filter((elem) =>
                elem.id !== id
            )]

        })


    }
    const check = (id, val) => {
        console.log(id, val)
        setitem(
            item.map((elem) => {
                if (elem.id === id) {
                    return { ...elem, checkdata: val }
                }
                console.log(item)
                return elem

            })
        )

    }



    useEffect(() => {

        localStorage.setItem("item", JSON.stringify(item))

    }, [item]

    )





    return (
        <>


            <div className='container-1'>

                <h1>Todo</h1>
                <input type="text" className="Input-1" onChange={input} value={data}></input>

                <button className="Add-btn" onClick={additem}>Add</button>


            </div>




            {item.map((elem) => {
                return (

                    <List title={elem.name} id={elem.id} item={item} onDelete={Delete} complete={elem.checkdata} check={check} />
                );

            }



            )


            }








        </>


    );



}

export default Createnote;