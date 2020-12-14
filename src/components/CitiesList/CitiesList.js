import React from "react";
import {useSelector} from "react-redux";
import City from "../City";

 const CitiesList = () => {
     const cities = useSelector(state=>state.cities);

     return(
         <div className="album py-5 bg-light">
             <div className="container">
                 <div className="row">
                     {cities.map((item)=><City data={item} key={item.id}/>)}
                 </div>
             </div>
         </div>
     )
};

export default CitiesList;