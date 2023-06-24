import { useState } from "react";
import Main from "../main/Index";
import { BoxContainer } from "./Style"

export default function Box(props){

    var control
    var hexa = 'FFFFFF';
    
    if(props.type == 'hexa'){
        control = 1;
    }else if(props.type == 'rgb'){
        control = 0;
    }

    const [colorHex, setColorHex] = useState('FFFFFF');

    function changeColor(){

        if(control == 1){
            hexa = '';
            const hexList = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

    
            for(var i=0; i < 6; i++){
                hexa = hexa + hexList[Math.floor(Math.random()*16)]
            }

            setColorHex(hexa);
        }

    }

    return(
        <BoxContainer>
            <h1>BackgroundColor: <span>{control ? '#' :'RGB'}</span>{colorHex}</h1>
            <button onClick={changeColor}>Click me</button>
        </BoxContainer>
    )
}