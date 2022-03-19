import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import ToDos from './MyComponents/ToDos';
import Footer from './MyComponents/Footer';



function App() {
  var name="Avinash Kumar"

let todos=[

  {
    id:1,
    title:"Wake Up"
  },
  {
    id:2,
    title:"Rise Again"
  },
  {
    id:3,
    title:"Hard Work"
  },
  
{
  id:4,
  title:"Be +ve"
}

]





  return (
    <>
  <Header title="REACT APP" searchBar={false}/>
    <ToDos todos={todos}/>
    <Footer/>
  </>
      );
}

export default App;
