import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");

  return (
    <div className="menu">
      <div className="ladoEsquerdo">
      </div>
      <form className="ladoDireito" onSubmit={(e) => { e.preventDefault(); onLogin(email) }}>
        <div className="caixaLogin">
          <h1>LOGIN</h1>
          <div className="preenchimento">
            <label htmlFor="usuario">Usuário</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="usuario" id="usuario" placeholder="Digite seu usuário" />
          </div>
          <div className="preenchimento">
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" id="senha" placeholder="Digite a sua senha" />
          </div>
          <button className="botaoLogin">LOGIN</button>
        </div>
      </form>
    </div>
  )
}
export default Login