import { NoteDisplay } from "models/note.model";
import styled from "styled-components";

interface Props{
    items: NoteDisplay[];
    onClick: (item:number) => void
}

function CardGrid({items, onClick}:Props) {

    return (
        <CardGridStyle>
            {items.map(item=>(
                    <Card key={item.id} onClick={()=>onClick(item.id)}>
                        {item.title}
                    </Card>
            ))}
        </CardGridStyle>
    )
}

const CardGridStyle = styled.div`
    max-height: calc(80px * 2 + 12px);
    overflow-y: hidden;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 12px;
    margin: 12px 0;
    padding: 12px;
    transition: overflow-y 0.2s ease;

    &:hover {
    overflow-y: auto;
    }

    @media (hover: none){
        overflow-y: auto;
    }

    -webkit-overflow-scrolling: touch;
`;

const Card = styled.div`
    background: #fff;
    border-radius: 12px;
    height: 8vh;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    cursor: pointer;
`;

export default CardGrid;