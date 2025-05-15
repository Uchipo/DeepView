import styled from "styled-components";

interface Props{
    children:React.ReactNode;
}

function Layout({children}:Props) {
    return (
        <LayoutStyle>
            {children}
        </LayoutStyle>
    )
}

const LayoutStyle = styled.div`
    margin: 10px;
`;

export default Layout;