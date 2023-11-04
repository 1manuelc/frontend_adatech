/* eslint-disable react/prop-types */

export default function MeuBotao(props) {
  console.log(props.conteudo);
  return (
    <button>
      {String(`${props.conteudo} ${props.idade}`)}
    </button>
  );
}
