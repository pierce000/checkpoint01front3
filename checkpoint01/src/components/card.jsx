

function Card(props) {
    return (
        <li >
            <p>{props.item.tarefa}</p>
            <p>{props.item.data}</p>
            <p>{props.item.categoria}</p>
            <p>{props.item.descricao}</p>
        </li >
    )
}

export default Card;