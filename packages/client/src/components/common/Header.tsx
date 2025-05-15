import styled from "styled-components";
import Title from "./Title";

interface Props{
    title: string;
    user:string;
}
function Header({title,user}:Props) {
    const now = new Date();
    const time = `${now.getFullYear()}년 
        ${String(now.getMonth() + 1).padStart(2, "0")}월
        ${String(now.getDate()).padStart(2, "0")}일
        ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`


    return (
        <HeaderStyle>
            <Title>{title}</Title>
            <div className="info">
                <span>{user}</span>
                <span>{time}</span>
            </div>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`

    .info{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
    }
`;

export default Header;