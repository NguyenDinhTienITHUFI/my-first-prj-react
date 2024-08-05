import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
function App() {
  return (
    <div className="App">
      My Todo Application
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourComponent></FourComponent>
    </div>
  );
}

function FirstComponent(){
  return(
    <div className='firstComponent'>
        FirstComponent
    </div>
  )
}
function SecondComponent(){
  return(
    <div>
      <a>This is SecondComponent</a>

    </div>
  )
}
class ThirdComponent extends Component {
  render(){
    return(
      <div className='ThirdComponent'>
        <a>This is Third Component</a>
  
      </div>
    )
}}
class FourComponent extends Component {
  render(){
    return(
      <div className='FourComponent'>
        <a>This is Four Component</a>
  
      </div>
    )
}}

export default App;
