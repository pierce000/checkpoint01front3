import { useState } from 'react'
import './global.css'
import Card from "./components/card"

function App() {
  const [id, setId] = useState("");
  const [tarefa, setTarefa] = useState("")
  const [categoria, setCategoria] = useState("")
  const [data, setData] = useState("")
  const [descricao, setDescricao] = useState("")

  const [listaTarefa, setListaTarefa] = useState([])

  function addItem(event) {
    event.preventDefault();

    if (tarefa === "" || categoria === "" || data === "" || descricao === "") {
      alert("Preencha todas as informações");
      return;
    }

    setListaTarefa([
      ...listaTarefa,
      {
        id: Date.now(),
        tarefa: tarefa,
        categoria: categoria,
        data: data,
        descricao: descricao
      },
    ]);

    setTarefa(""),
    setCategoria(""),
    setData(""),
    setDescricao(""),
    setId("")
  }

  function editItem(event) {
    event.preventDefault();

    const copyListaTarefas = [...listaTarefa];

    const index = copyListaTarefas.findIndex(
      (tarefa) => tarefa.id === id
    );

    copyListaTarefas[index].tarefa = tarefa;
    copyListaTarefas[index].categoria = categoria;
    copyListaTarefas[index].data = data;
    copyListaTarefas[index].descricao = descricao;

    setListaTarefa(copyListaTarefas);

    setTarefa(""),
    setCategoria(""),
    setData(""),
    setDescricao(""),
    setId("")
  }

  function apagarItem(id) {
    if (confirm("Deseja realmente apagar o item?")) {
      const result = listaTarefa.filter((item) => item.id !== id);
      setListaTarefa(result);
    }
  }

  function preencheEstados(item) {
    setTarefa(item.tarefa);
    setCategoria(item.categoria);
    setData(item.data);
    setDescricao(item.descricao);
    setId(item.id);
  }

  return (
    <div className="app">
      <div className="cadastro">
        <form className="taskCreator" onSubmit={id ? editItem : addItem}>
          <p className="formTitle">Cadastrar tarefa</p>
          <input className="inputTaskName" value={tarefa} onChange={(event) => setTarefa(event.target.value)} placeholder='Titulo' />
          <select className="inputTaskCategory" value={categoria} onChange={(event) => setCategoria(event.target.value)} >
            <option value="">Categorias</option>
            <option value="trabalho">Trabalho</option>
            <option value="lazer">Lazer</option>
            <option value="prioridade">Prioridade</option>
            <option value="outros">Outros</option>
          </select>
          <input className="inputTaskDate" type="date" value={data} placeholder='Data' onChange={(event) => setData(event.target.value)} />
          <textarea className="inputTaskDescription"  cols="25" rows="2" placeholder='Descrição' value={descricao} onChange={(event) => setDescricao(event.target.value)}> </textarea>

          {id ? <button className="formButton" type="submit" >Salvar</button> : <button className="formButton" type="submit" >Cadastrar</button>}
        </form>
      </div>

      <div className="lista">
        <h1 className="listTitle">Minhas Tarefas</h1>
        <ul>
          {listaTarefa.map((item) =>
            <div className="listCard">
              <Card key={item.id} item={item}></Card>
              <div className="taskListButtons">
              <img src="../img/editIcon.png" onClick={() => preencheEstados(item)}></img>
              <img src="../img/trashIcon.png" onClick={() => apagarItem(item.id)}></img>
              </div>
            </div>)}

        </ul>
      </div>
    </div>
  )
}

export default App;
