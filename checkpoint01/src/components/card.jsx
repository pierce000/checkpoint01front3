

function Card(props) {
    return (
        <li >
            <p className="taskName">{props.item.tarefa}</p>
            <p className="taskDate">{props.item.data}</p>
            <p className="taskCategory">{props.item.categoria}</p>
            <p className="taskDescription">{props.item.descricao}</p>
        </li >
    )
}

export default Card;