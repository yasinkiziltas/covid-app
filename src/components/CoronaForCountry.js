import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_TOKEN, API_URL } from '../constant'
import Card from './Card'

export default function CoronaForCountry() {
    const [data, setData] = useState([])
    const [queryText, setQueryText] = useState("")
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`${API_URL}countriesData?country=${queryText}`, {
                headers: {
                    authorization: API_TOKEN
                }
            })
            setData(response.data.result)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [queryText])


    return (
        <>
            <div className='mb-4'>
                <input
                    value={queryText}
                    onChange={(e) => setQueryText(e.target.value)}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    placeholder="Ülke Ara" />
            </div>

            <div className='grid grid-cols-4 gap-4'>
                {loading && <div className='container justify-center  text-xl font-bold'>Yükleniyor...</div>}

                {data.map((item) => {
                    return (
                        <Card key={item.country}
                            country={item.country}
                            totalDeaths={item.totalDeaths}
                            totalCase={item.totalCases}
                            totalRecovered={item.totalRecovered}
                        />
                    )
                })}
            </div>
        </>
    )
}
