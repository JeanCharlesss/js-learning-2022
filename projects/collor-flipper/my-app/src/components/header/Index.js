import { HeaderContainer } from "./Style";

export default function Header(){
    return(
        <HeaderContainer>
            <a href="#" className="logo">Color <span>Flipper</span></a>
            <nav>
                <ul>
                    <li><a href="#">Hexa</a></li>
                    <li><a href="#" >RGB</a></li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}