import  { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [emails, setemails] = useState('')

    const { setUser, setemail } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (username == null || emails == null) {
            alert("error")
        }
        else {
            setUser(username)
            setemail(emails)
            setUsername("");
            setemails("")
        }



    }
    return (
        <div className=' bg-slate-800 w-[100%] h-[91.4%] flex items-center justify-center'>
            <div className="flex  flex-col justify-evenly Login-Form border-2 rounded-[30px] h-[380px] w-[450px] bg-[#100707c8] hover:border-blue-500 hover:border-2   transtion-all ease-in-out duration-200">
                <div className="name ml-4 mr-4">
                    <label
                        htmlFor="Username"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        id="Username"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Username"
                        required=""
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-email ml-4 mr-4">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="john.doe@company.com"
                        required=""
                        value={emails}
                        onChange={(e) => setemails(e.target.value)}
                    />
                </div>
                <div className="btn flex items-center justify-center">

                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                        onClick={handleSubmit}
                    >
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Submite
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login