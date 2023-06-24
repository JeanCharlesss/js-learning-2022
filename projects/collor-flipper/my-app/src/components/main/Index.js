import { MainContainer } from "./Style";
import Box from "../box/Index";

export default function Main(props){
    return (
        <MainContainer>
            {console.log(props.color)}
            <Box type={props.type}/>
        </MainContainer>
    )
}