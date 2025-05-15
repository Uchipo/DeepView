import Header from "components/common/Header";
import styled from "styled-components";

function Quiz() {
    return (
        <QuizStyle>
            <Header title="퀴즈" user="유저이름" />
        </QuizStyle>
    )
}

const QuizStyle = styled.div``;

export default Quiz;