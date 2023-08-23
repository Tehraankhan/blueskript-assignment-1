



import React, { useEffect, useState, useContext } from 'react';
import List from './List';
import Header from './Header'
import { ThemeContext } from '../context/themContext';



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

    const [data, setdata] = useState(" ");
    const [item, setitem] = useState(getlocalstorge);
    const [target, settarget] = useState();
    const [visible, setvisible] = useState(false)



    const input = (e) => {

        setdata(e.target.value)


    }

    //These function allows us to store the data which is written into the input tag 
    const additem = () => {



        if (data === ' ') {

            alert("blank text is not allowed")
        }
        else {


            const alldata = { id: new Date().getTime().toString(), name: data, checkdata: false, complete: false }

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
                    return { ...elem, checkdata: val, complete: val, }
                }
                console.log(item)
                return elem

            })
        )

    }



    useEffect(() => {

        localStorage.setItem("item", JSON.stringify(item))
        settarget('All')
        setvisible(true)

    }, [item]



    )
    const Display = (e) => {

        if (e.target.value === "Complete") {

            setvisible(false)

        }
        else {
            setvisible(true)
        }

        settarget(e.target.value)
        return [item]
    }

    const Remove = () => {



        let i = item.filter((data) => data.complete === false)
        setitem(i)
        setvisible(true)
    }




    return (
        <>




            <div className=' w-[94%] '>

                <Header />


                <div className='w-full px-[auto] 2xl:px-[auto]'>

                    <input type="text" className=" ml-[3px] w-[15rem] h-[2.5rem]  bg-[#dfffe0] rounded-[5px] text-[black] sm:w-[450px] sm:ml-[30px] md:w-[600px] lg:ml-[150px] lg:w-[700px] xl:w-[800px] 2xl:ml-[290px]" id="input" onChange={input} value={data}></input>

                    <button className=" h-[40px] w-[100px] bg-[#6262ffa4] ml-[4px] rounded-[5px]" onClick={additem}>Add</button>


                </div>







            </div>
            <div className='w-[346px] h-[66px]  bg-[#6262ffa4] rounded-[5px] mx-auto my-[25px] flex flex-row'>
                <button className="basis-[11rem] text-[24px] hover:bg-[#414a4c] hover:text-[white] hover:rounded-[5px] " onClick={Display} value='All'>All</button>
                <button className="basis-[64%] text-[24px] hover:bg-[#414a4c] hover:text-[white] hover:rounded-[5px]" onClick={Display} value='Active'>Active</button>
                <button className="basis-[64%] text-[24px] hover:bg-[#414a4c] hover:text-[white] hover:rounded-[5px]" onClick={Display} value='Complete'>Complete</button>
            </div>

            <div className='ml-[auto] flex flex-col'>

                {item.map((elem) => {
                    if (target === 'All') {


                        return (

                            <List title={elem.name} id={elem.id} item={item} onDelete={Delete} complete={elem.checkdata} check={check} />
                        );
                    }

                    else if (target === 'Complete') {






                        if (elem.complete) {





                            return (



                                <>
                                    <List title={elem.name} id={elem.id} item={item} onDelete={Delete} complete={elem.checkdata} check={check} />
                                </>
                            )






                        }




                    }
                    else if (target === 'Active') {
                        if (!elem.complete) {
                            return (

                                <List title={elem.name} id={elem.id} item={item} onDelete={Delete} complete={elem.checkdata} check={check} />



                            );


                        }


                    }
                    else {


                        <List title={elem.name} id={elem.id} item={item} onDelete={Delete} complete={elem.checkdata} check={check} />


                    }
                }



                )


                }



                <button className="w-[140px] h-[40px] bg-[#ffe7ca] rounded-[2px] mx-auto mt-[14px] dark:text-[black]" style={{ visibility: visible ? 'hidden' : '' }} onClick={Remove}>Remove All</button>
            </div>





        </>


    );



}

export default Createnote;