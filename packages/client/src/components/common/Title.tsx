import styled from "styled-components";

interface Props{
    children: React.ReactNode;
}
function Title({children}:Props) {
    return (
        <TitleStyle>
            {children}
        </TitleStyle>
    )
}

const TitleStyle = styled.h1`
    display:flex;
    justify-content: center;
`;

export default Title;