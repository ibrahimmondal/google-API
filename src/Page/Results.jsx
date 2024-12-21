import { useEffect } from "react";
import UseFetch from "../Hooks/UseFetch";
import Loder from "../Components/Loder";
import { useLocation } from "react-router";


export default function Results() {
  const location = useLocation()
  const querys = new URLSearchParams(location.search).get("query");

    const [results, loding, error, getResults] = UseFetch();
   
    // if(error){
    //     return <h2>Something went wrong</h2>
    //      }
    //      if(loding){
    //     return <div className="text-center">
    //       <Loder/>
    //     </div>
    //      }
    useEffect(() => {
        getResults(querys)
    }, [])
  return (
    <div className="max-w-[700px] mx-auto">
      {loding && <Loder/>}
      {error && <h2>{error}</h2>}
      {results.length > 0 && (
      <div>
        {
          results.map((result, index) => (
            <div className="card bg-base-100 w-full" key={index}>
  <div className="card-body">
    <h2 className="card-title text-primary">{result.displayLink}</h2>
    <p>{result.snippet}</p>
    <p className="text-green-500">{result.formattedUrl}</p>

  </div>
</div>
          ))
        }
      </div>
    )}</div>
    // <div>ni</div>
  )
}
