import React, { useState } from 'react'
import { useNavigate } from 'react-router';


export default function SearchBar() {
    const [searchTerms, setSearchTerms] = useState("");
    const navigate = useNavigate();

    function handleSubmite(e) {
        e.preventDefault();
        if (searchTerms.trim()){
            navigate(`/results?qurey=${encodeURIComponent(searchTerms)}` )
        }
    }

  return (
    <div>
        
        <form className='max-w-[600px] mx-auto pt-6' onSubmit={handleSubmite}>
        <label className="input input-bordered flex items-center gap-2">
  {/* <input type="text" className="grow" placeholder="Search" onChange={(e) => setSearchTerms(e.target.value)} /> */}
  <input type="text" className="grow" placeholder="Search" value={searchTerms} onChange={(e) => setSearchTerms(e.target.value)} />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
        </form>
    </div>
  )
}
