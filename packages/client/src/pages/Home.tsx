import styled from "styled-components";
import Header from "components/common/Header";

function Home() {
    return (
        <HomeStyle>
            <Header title="HOME" user="여기 유저이름"/>
        </HomeStyle>
    )
}

const HomeStyle = styled.div``;

export default Home;