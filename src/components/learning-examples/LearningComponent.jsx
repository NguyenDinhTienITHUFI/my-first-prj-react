import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import FourComponent from './FourComponent'
import {FifthComponent} from './FirstComponent'
import LearningJavaScript from './LearningJavaScript'

export  default function LearningComponent() {
    return (
      <div className="App">
        My Todo Application
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <FourComponent></FourComponent>
        <FifthComponent></FifthComponent>
        <LearningJavaScript></LearningJavaScript>
      </div>
    );
  }