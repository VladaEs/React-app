import React from 'react'

import "./CostsFilter.css";

const CostFilter =(props)=>{

    
    const SelectChangeHandler=(event)=>{
        //console.log(event.target.value);
        
        props.OnYearSelect(event.target.value);
    } 


    return(
        <div className="costs-filter">
        <div className="costs-filter__control">
            <div className="text_year">Choose year</div>
            <select onChange={SelectChangeHandler} value={props.YearNow}>
                <option value ='2023'>2023</option>
                <option value ='2022'>2022</option>
                <option value ='2021'>2021</option>
                <option value ='2020'>2020</option>
                <option value ='2019'>2019</option>

            </select>

        </div>
        </div>
    );


}

export default CostFilter;
