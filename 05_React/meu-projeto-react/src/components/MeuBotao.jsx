export default function MeuBotao(props) {
  return (
    <button>
      {String(`${props.conteudo} ${props.idade}`)}
    </button>
  );
}
