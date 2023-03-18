import './CostForm.css';
import React, {useState} from 'react';


const FormCost =(props)=>{







    const [Name, SetName] = useState('');
    const [Cost, SetCost]= useState('');
    const [date , SetDate]= useState('');


    const NameChangeHandler=(event)=>{
        SetName(event.target.value);
    };
   
    const CostChangeHandler =(event)=>{
        SetCost(event.target.value)
    }
    
    const DateChangeHandler=(event)=>{
        SetDate(event.target.value);
        console.log(event.target.value);
    }

    const SubmitHandler =(event)=>{
        event.preventDefault()
        const CostData={
            description: Name, 
            amount: Cost,
            date: new Date(date),
        }
        props.onDataSave(CostData);
        SetCost('');
        SetName('');
        SetDate('');
        
    };

    return(
    <form onSubmit={SubmitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Название</label>
                <input type='text' value={Name} onChange={NameChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Сумма</label>
                <input type='number' min='0.01' step='0.01' value={Cost} onChange={CostChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>дата</label>
                <input type='date' value={date} onChange={DateChangeHandler}/>
            </div>
           
            <div className="new-cost__actions">
                <button type='submit'  >Добавить расход </button>
                <button type='reset' onClick={props.onCancel}>Отмена</button>
            </div>

        </div>

    </form>)
}
export default FormCost;