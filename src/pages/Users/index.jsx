import { useEffect, useState } from "react";
import axios from "axios";
import { FaPencil, FaTrashCan } from 'react-icons/fa6';
import './users.css';

const URL = import.meta.env.VITE_BACKEND_URL + "/usuarios/";

export default function Users() {
  const [usuarios, setUsuarios] = useState([]);
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch(URL)//requisição para uma URL (Promessa) pode dar certo ou errado
      .then((respFetch) => respFetch.json())
      .then((respJson) => setUsuarios(respJson))
      .catch((err) => console.log(err));
  }, []);

  function limparDados() {
    setId("");
    setNome("");
    setEmail("");
  }

  function editarDados(cod) {
    let usuario = usuarios.find((item) => item.id === cod);
    const { id, nome, email } = usuario;
    setId(id);
    setNome(nome);
    setEmail(email);
  }

  function atualizaListaUsuarioEditado(response) {
    console.log(response);
    let { id } = response.data;
    const index = usuarios.findIndex(item => item.id == id);
    let users = usuarios;
    users[index].nome = nome;
    users[index].email = email;
    setUsuarios(users);
    limparDados("");
  }

  function atualizaListaComNovoUsuario(response) {
    console.log(response);
    let { id, nome, email } = response.data;
    let obj = {id, nome, email};
    let users = usuarios;
    users.push(obj);
    setUsuarios(users);
    limparDados("");
  }

  function apagarDados(cod) {
    axios.delete(URL + cod)
      .then(() => setUsuarios(usuarios.filter(item => item.id !== cod)))
      .catch((erro) => console.log(erro));
  }

  function gravarDados() {
    if (nome !== "" && email !== "") {
      if (id === "") {
        axios
          .post(URL, {
            nome: nome,
            email: email,
          })
          .then((response) => atualizaListaComNovoUsuario(response))
          .catch((err) => console.log(err));
      }
      else if (id !== "") {
        axios.put(URL + id, {
          id: id,
          nome: nome,
          email: email,
        })
          .then((response) => atualizaListaUsuarioEditado(response))
          .catch((err) => console.log(err));
      }
    }
    else {
      console.log("Preencha os campos");
    }
  }

  return (
    <div id="containerGeral">
      <input
        type="text"
        name="txtNome"
        value={nome}
        onChange={(e) => setNome(e.target.value) }
        placeholder="Nome"
      />
      <input
        type="text"
        name="txtEmail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="button" onClick={limparDados}>Cancelar</button>
      <button type="button" onClick={gravarDados}>Gravar</button>
      {
        usuarios && usuarios.map((item) => (
          <div key={item.id}>
            {item.id} - {item.nome} - {item.email} - {" "}
            <FaPencil onClick={() => editarDados(item.id)} />
            <FaTrashCan onClick={() => apagarDados(item.id)} />
          </div>
        ))
      }
    </div>
  );
}