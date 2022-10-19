
import './App.css';
import Navbar from './componets/Navbar';
import Textform from './componets/Textform';

function App() {
  return(
    <>
     <Navbar title='TextUtils' about='About-TextUtils'/>
     <div className='container'>
     <Textform heading='Enter the text to analyze below.'/>
     </div>
    </>
  ) 
}

export default App;
