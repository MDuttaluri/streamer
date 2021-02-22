import { useState } from "react";

function DeviceCard(props){
    const [color,setColor] = useState(props.color);
    const [header,setHeader] = useState(props.header);

    return <div style={{backgroundColor:color}} class="DeviceCard">
        <h5 style={{display:"inline"}}>{header}</h5>
    </div>
}


export default DeviceCard;