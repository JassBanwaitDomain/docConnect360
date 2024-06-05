import React from "react";

import {faqsdata} from "../../assets/data/faqsdata.jsx";
import FaqItem from "./FaqItem";

const FaqList=()=>{
    return(
        <>
        <ul className="mt-[38px]">
            {faqsdata.map((item,index)=>(
                <FaqItem item={item} key={index} />
            ))}
        </ul>
        </>
    )
}
export default FaqList;