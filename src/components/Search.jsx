import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { items } from "./Data";
import Product from "./Product";


function Search() {

    const { term } = useParams();
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
     const filtereData = () =>{
        const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
        setFilterData(data);
     }
     filtereData();
    }, [])
    

  return (
    <>
    <Product items={filterData} />
    </>
  )
}

export default Search