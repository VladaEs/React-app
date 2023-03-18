import React,{useState} from 'react';
import WrapperCost from './components/Costs/WrapperCost';
import NewCost from './components/NewCost/NewCost';

const initialCosts = [
    {
        id: "c1",
        date: new Date(2021, 2, 12),
        description: 'Холодильник',
        amount: 999.99,
    },
    {
        id: "c2",
        date: new Date(2021, 10, 9),
        description: 'Iphone',
        amount: 1500.43,
    },
    {
        id: "c3",
        date: new Date(2021, 7, 25),
        description: 'TV',
        amount: 500.25,
    },  
    {
        id: "c4",
        date: new Date(2022, 7, 25),
        description: 'TV',
        amount: 500.25,
    },  
    {
        id: "c5",
        date: new Date(2022, 7, 25),
        description: 'TV',
        amount: 500.25,
    },  
];
function App() {

    const addCostHandler =(cost)=>{
        SetCosts(prevCost=>{
            console.log(cost);
            console.log(prevCost);
            return([cost,... prevCost])
        });
    
    }

    const [costs, SetCosts]=useState(initialCosts);



    return (
            <div>
                <NewCost onAddCost={addCostHandler}/>
                <WrapperCost costs={costs} />
            </div>
       
  );
}

export default App;
