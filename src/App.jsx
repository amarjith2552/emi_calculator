import './App.css';
import Emi from './Emi';
import Header from './Header';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <section><Header/></section>
      <section><Emi/></section>
      <section>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
