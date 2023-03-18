import Card from '../UI/Card';
import DiagramData from './DiagramData';
import './WrapperCost.css';
import CostFilter from './CostFilter';
import WrapperCostList from './WrapperCostList';
import React , {useState} from 'react';



function WrapperCost(props) {
    const YearSelectHandler =(inputYear)=>{
        SetYear(inputYear);
    }
    const [Year , SetYear]= useState('2022');
    
    const filterYears= props.costs.filter( (cost)=>{
        return cost.date.getFullYear().toString()=== Year;    
    })

    

    return (
        <div>
            <Card className="costs">
                <CostFilter OnYearSelect = {YearSelectHandler} YearNow ={Year} />
                    <DiagramData costs ={filterYears}/>
                    <WrapperCostList DataList={filterYears}/>
            </Card>
        </div>
        );

}

export default WrapperCost;