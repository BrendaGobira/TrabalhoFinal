import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onLogin(email);
    setLoading(false);
  }

  return (
    <div className="menu">
      <div className="ladoEsquerdo">
      </div>
      <form className="ladoDireito" onSubmit={onSubmit}>
        <div className="caixaLogin">
          <h1>LOGIN</h1>
          <div className="preenchimento">
            <label htmlFor="usuario">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="usuario" id="usuario" placeholder="Digite seu email" />
          </div>
          <div className="preenchimento">
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" id="senha" placeholder="Digite a sua senha" />
          </div>
          <button className="botaoLogin" disabled={loading}>
            {
              loading ? <AiOutlineLoading className="loading-icon" /> : "LOGIN"
            }
          </button>
        </div>
      </form>
    </div>
  )
}
export default Login