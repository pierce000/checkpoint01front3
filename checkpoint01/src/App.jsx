import { useState } from 'react'
import './global.css'
function App() {
    const [id, setId] = useState("");
  const [tarefa, setTarefa] = useState("")
  const [categoria, setCategoria] = useState("")
  const [data, setData] = useState("")
  const  [descricao, setDescricao] =useState("")

  const [listaTarefa, setListaTarefa] = useState("")

  function addItem(event) {
    event.preventDefault();

   // if (disciplina === "" || duracao === "") {
     // alert("Preencha todas as informações");
     // return;
  //  }

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

    const copyListaTarefas = [...listaTarefas];

    const index = copyListaTarefas.findIndex(
      (tarefa) => tarefa.id === id
    );

    copyListaTarefas[index].tarefa = tarefa;
    copyListaTarefas[index].categoria = categoria;
    copyListaTarefas[index].data = data;
    copyListaTarefas[index].descricao = descricao;

    setListaTarefa(copyListaTarefas);
  }

  {/*function apagarItem(id) {
    if (confirm("Deseja realmente apagar o item?")) {
      const result = listaDisciplinas.filter((item) => item.id !== id);
      setListaDisciplinas(result);
    }
  }

  function preencheEstados(item) {
    setDisciplina(item.disciplina);
    setDuracao(item.duracao);
    setId(item.id);
  }*/}

  return (
    <div className="App">
      <div className="input">
      <form onSubmit={addItem}>
      <h1>Cadastrar tarefa</h1>
        <input value={tarefa} onChange={(event) => setTarefa(event.target.value)} placeholder='Titulo'/>
        <select value={categoria} onChange={(event) => setCategoria(event.target.value) } >
          <option value="">Categorias</option>
        <option value="trabalho">Trabalho</option>
        <option value="lazer">Lazer</option>
        <option value="prioridade">Prioridade</option>
        <option value="outros">Outros</option>
        </select>
        <input value={data} placeholder='Data' />
        <textarea  cols="25" rows="2" placeholder='Descrição' value={descricao}></textarea>

        <input type="submit" value="salvar" />
      </form>
      </div>

      <div className="lista">
        <h1>Minhas Tarefas</h1>
      <div>
        <h2>Tarefa1</h2>
        <h2>13/03/2023</h2>
        <button>Editar</button>
        <button>Apagar</button>
        <h5>categoria1</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis minima porro laboriosam impedit, labore neque dolore. Dicta, id ipsa, vero cum nobis repellat non ea, natus laborum quas autem.</p>
      </div>

      <div>
        <h2>Tarefa2</h2>
        <h2>13/03/2023</h2>
        <button>Editar</button>
        <button>Apagar</button>
        <h5>categoria2</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis minima porro laboriosam impedit, labore neque dolore. Dicta, id ipsa, vero cum nobis repellat non ea, natus laborum quas autem.</p>
      </div>

      <div>
        <h2>Tarefa3</h2>
        <h2>13/03/2023</h2>
        <button>Editar</button>
        <button>Apagar</button>
        <h5>categoria3</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis minima porro laboriosam impedit, labore neque dolore. Dicta, id ipsa, vero cum nobis repellat non ea, natus laborum quas autem.</p>
      </div>

      </div>
    </div>
  )
}

export default App
