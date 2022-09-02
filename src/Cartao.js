const Cartao = (props) => {
  return (
    <div className="card">
      {/* cabeçalho*/}
      <div className="card-header text-muted">{props.cabecalho}</div>
      {/* conteudo */}
      <div className="card-body">{props.children}</div>
    </div>
  )
}


export default Cartao