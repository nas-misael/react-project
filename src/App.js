import './App.css';
import {ListaDeNotas} from './components/listaNotas.jsx'
import {FormularioCadastro} from './components/formularioCadastro.jsx'

function App() {
  return (
  <section>
    <FormularioCadastro />
    <ListaDeNotas />
  </section>
  );
}

export default App;
