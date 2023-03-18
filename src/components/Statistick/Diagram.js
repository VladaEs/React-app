import DiagramBar from './DiagramBar';
import './diagram.css';

const Diagram= (props)=>{


    const costsAmountArray= props.dataSets.map(item=> item.value);
    const MaxValueMonth= Math.max(... costsAmountArray);

    return( 
    <div className="diagram">
        {props.dataSets.map(data=><DiagramBar value={data.value} maxValue={MaxValueMonth} label={data.label} key={data.label}/>)}

    </div>
    )
}

export default Diagram;