import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const [data, setdata] = useState([{ name: "ChiragJariya", emails: "Chirag@gmail.com" }])

    const { user, email } = useContext(UserContext)

 

    if (user && email) {
       data.push({
        name: user,
        emails: email
       })
        console.log(data);
    }







    return (
        <div className=" bg-blue-600 h-[91.4%] flex items-center justify-center  w-[100%] overflow-y-hidden">
            <div className="overflow-x-auto isolate aspect-video p-10 rounded-lg bg-white/20 shadow-lg ring-1 ring-black/5">
                <table className="table w-[700px] text-center ">
                    {/* head */}
                    <thead className=' border-[2px] border-black'>
                        <tr className='border-[2px] border-black text-[25px]'>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>

                        </tr>
                    </thead>

                    <tbody className='border-[2px] border-black mt-5'>
                        {/* row 1 */}
                     
                        {

                            data.map((i, index) => (

                                <tr className='mt-5 text-[20px] text-ellipsis border-[2px] border-black p-3' key={index}>
                                    <th>{index + 1}</th>
                                    <td className=' overflow-hidden text-ellipsis  '>{i.name}</td>
                                    <td className=' overflow-hidden text-ellipsis w-[500px]  '>{i.emails}</td>
                                </tr>

                            ))
                        }


                        {/* row 2 */}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Profile