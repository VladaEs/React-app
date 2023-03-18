import './NewCost.css';
import CostForm from './CostForm';
import { useState } from 'react';
import CostFormDefault from './CostFormDefault';
import React from 'react'
import ReactDOM from 'react-dom'
const NewCost =(props)=>{
    
    
    
    const [IsFormVisible, SetIsFormVisible]= useState(false);
    const DataSavingHandler =(inputCostData)=>{
        const Data = {
            ...inputCostData,
            id: Math.random().toString(),
        }
        props.onAddCost(Data);
        SetIsFormVisible(false)    
    }

   const inputCostDataHandler =()=>{
    SetIsFormVisible(true);
   }
   const cancelVisionHandler=()=>{
    SetIsFormVisible(false);
   }
    
    return (
    <div className="new-cost">
        {!IsFormVisible &&<button onClick={inputCostDataHandler}>Добавить новый расход</button>}
        {IsFormVisible &&<CostForm onDataSave={DataSavingHandler} onCancel={cancelVisionHandler}/>} 
        
    </div>
    )}

export default NewCost;