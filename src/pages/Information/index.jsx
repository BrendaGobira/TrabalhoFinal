import './Information.css';

function Information() {
  return (
    <div style={{ marginTop: '90px' }}>
      <div className="container">
        <h2>MOTIVAÇÃO</h2>
        <p>A Color Pixel é um site que oferece a criação de pinturas de pixel, impulsionado por uma variedade de
            motivações, incluindo expressão artística, nostalgia, simplicidade, acessibilidade, compartilhamento com a
            comunidade, customização, diversão, relaxamento, educação e aprendizado. Essa plataforma proporciona uma
            maneira única de expressar a criatividade, evocar nostalgia, simplificar a arte digital, compartilhar
            criações, personalizar imagens e, ao mesmo tempo, oferece diversão, relaxamento e oportunidades de
            aprendizado e ensino de conceitos de design gráfico.</p>
      </div>
      <div className="container">
        <h2>COMO FUNCIONA?</h2>
        <p>Um site de pintura de pixel é onde você cria imagens com quadradinhos coloridos (pixels) escolhendo cores e
            pintando os pixels individualmente. É uma maneira divertida e acessível de fazer arte pixelada.</p>
      </div>

      <h3>Benefícios e Desafios da Pixel Art</h3>
      <table>
        <thead>
          <tr>
            <th>Benefícios</th>
            <th>Desafios</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: 'gray' }}>
          <tr>
            <td>Estilo Único</td>
            <td>Limitações de Resolução</td>
          </tr>
          <tr>
            <td>Fácil de Começar</td>
            <td>Detalhes Finos</td>
          </tr>
          <tr>
            <td>Nostalgia</td>
            <td>Tempo Consumido</td>
          </tr>
          <tr>
            <td>Compartilhamento</td>
            <td>Aprendizado Constante</td>
          </tr>
          <tr>
            <td>Customização</td>
            <td>Limitações de Cores</td>
          </tr>
          <tr>
            <td>Criatividade</td>
            <td>Não é para todos</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Information