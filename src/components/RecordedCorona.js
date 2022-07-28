import React, { useEffect, useState } from 'react'
import { API_TOKEN, API_URL } from '../constant'
import axios from 'axios'

export default function RecordedCorona() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const fetchData = async () => {
        setLoading(true)
        const response = await axios.get(`${API_URL}totalData`, {
            headers: {
                authorization: API_TOKEN
            }
        })
        setLoading(false)
        console.log(response.data.result);
        setData(response.data.result)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='flex flex-col items-center justify-center h-full cursor-pointer'>
            {loading ? <div className='text-xl font-bold'>Yükleniyor...</div> :
                <>
                    <h1 className='text-6xl text-gray-900 mb-4  hover:text-red-100'>Total Cases: {data?.totalCases}</h1>
                    <h1 className='text-6xl text-gray-900 mb-6  hover:text-red-300'>Total Deaths:  {data?.totalDeaths}</h1>
                    <h1 className='text-6xl text-gray-900  hover:text-red-700'>Total Recovered: {data?.totalRecovered}</h1>
                </>
            }
        </div>

    )
}
