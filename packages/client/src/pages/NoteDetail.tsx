import Header from "components/common/Header";
import { Note } from "models/note.model";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Markdown from 'react-markdown'

function NoteDetail() {
    const { note_id } = useParams<{ note_id: string }>()
    // 대충 여기서 id로 받아오는 내용
    const note:Note = {
        id: Number(note_id),
        title: `노트${note_id}`,
        text: `
    # 첫 번째 노트

    **마크다운** 형식의 예시입니다.

    - 항목 1
    - 항목 2
    `,
        author: '홍길동',
        createdAt: '2025-05-15T09:00:00Z',
        tags: ['예시', '테스트']
    }

    if(!note){
        // useAlert만들어서 리다이렉트하기
    }
    
    return (
        <NoteDetailStyle>
            <Header title={note.title} user="유저이름" />
            <div className="Content">
                <Markdown>
                    {note.text}
                </Markdown>
            </div>
        </NoteDetailStyle>
    )
}

const NoteDetailStyle = styled.div``;

export default NoteDetail;