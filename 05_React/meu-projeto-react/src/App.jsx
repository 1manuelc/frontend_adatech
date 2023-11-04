import MeuComponente from "./components/MeuComponente";
import MeuBotao from "./components/MeuBotao";
import MeuContador from "./components/MeuContador";

export default function App() {
	return (
		<div>
			<h1>Olá Mundo, React!</h1>
			<MeuComponente />
			<MeuBotao conteudo='me clique' />
			<MeuBotao conteudo='depois aqui' />
			<MeuBotao conteudo='e por fim aqui' idade={2} />
			<MeuContador intervalo={1} />
			<MeuContador intervalo={10} />
		</div>
	);
}
