import CostItem from "./CostItem";
import './WrapperCostList.css';
import React from 'react'

const WrapperCostList= (props)=>{
    
    if(props.DataList.length=== 0){
        return <h2 className="cost-list-fallback">В этом году расходов нет</h2>
    }
    return <ul className="cost-list">
        {props.DataList.map((cost)=>(
            <CostItem  key={cost.id} date={cost.date} description={cost.description} amount={cost.amount}/>
            
       ))}
    </ul>
}

export default WrapperCostList;