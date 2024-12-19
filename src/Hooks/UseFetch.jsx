import React, { useState } from 'react'
import axios from "axios";

export default function UseFetch() {
     const [results, steResults] = useState([]);
        const [loding, setLoding] = useState(false);
        const [error, steError] = useState(null)
        const API = `AIzaSyApVNug0f1NMIaX_fkjJZczBQg99c-S4kA`;
        // const searchTerms = "react";    
        const ID = `5482e9e4490b84ea6`;
        
        const getResults = async (query) => {
            const BASE_URL = `https://www.googleapis.com/customsearch/v1?key=${API}&q=${query}&num=1&cx=${ID}`;
        try{
            steError(null)
            setLoding(true);
            const response = await axios.get(BASE_URL);
            console.log(response.data.items);
            steResults(response.data.items || []);
        }catch (err){
        console.log(err);
        steError(err.message)
        } finally{
            setLoding(false);
        };
    
       };
  return [results, loding, error, getResults]
}
