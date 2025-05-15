import styled from "styled-components";
import Header from "components/common/Header";
import CardGrid from "components/CardGrid";
import { NoteDisplay } from "models/note.model";
import { useNavigate } from "react-router-dom";

function Learning() {
    const navigate = useNavigate()

    const notes:NoteDisplay[] = [
        {id: 1,title: "노트1" },
        {id: 2,title: "노트2" },
        {id: 3,title: "노트3" },
        {id: 4,title: "노트4" },
        {id: 5,title: "노트5" }
    ]
    const quizzes:NoteDisplay[] =[
        {id: 1,title: "퀴즈1" }
    ]

    function handleNoteNavigate(id:number){
        navigate(`/notes/${id}`)
    }

    function handleQizeNavigate(id:number){
        navigate(`/quizzes/${id}`)
    }

    return (
        <LearningStyle>
            <Header title="학습" user="유저이름" />
                <section className="note">
                    <button onClick={()=>{/* 노트 생성 로직 */}}>노트 생성하기</button>
                    <CardGrid items={notes} onClick={handleNoteNavigate} />
                </section>
                <section className="quiz">
                    <button onClick={()=>{/* 퀴즈 생성 로직 */}}>퀴즈 생성하기</button>
                    <CardGrid items={quizzes} onClick={handleQizeNavigate} />
                </section>
        </LearningStyle>
    )
}

const LearningStyle = styled.div`
    section{
        display: flex;
        flex-direction: column;
    }

    /* note/quiz 컨테이너 안의 버튼을 오른쪽 끝으로 보냅니다 */
    section > button{
        align-self: flex-end;
        /* 필요하다면 margin-top, margin-bottom 추가 가능 */
        margin-bottom: 8px;
    }
`;

export default Learning;