

function Card(props) {
    return (
        <li >
            <h2>{props.item.tarefa}</h2>
            <h2>{props.item.data}</h2>
            <h5>{props.item.categoria}</h5>
            <p>{props.item.descricao}</p>
        </li >
    )
}

export default Card;