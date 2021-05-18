import {useState, useEffect} from 'react';
import axios from "axios";

const API_KEY = 'AIzaSyAhPbHVDH-gkFuzsbPuNDvgOsLiM06iiKU'
const CONTEXT_KEY = '2e3939f32e5e1cd2f'

const UseGoogleSearch = (term) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            axios.get(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            ).then(res => {
                setData(res.data)
            })
        }

        fetchData()
    }, [term])

    return {data}
};

export default UseGoogleSearch;