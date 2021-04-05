import {useState} from 'react'
//components
import Intro from './components/Intro'
import Background from './components/Background/index'
import CloudContainer from './components/Clouds'
import Building from './components/Building'
import Car from './components/Car'
import SocialLinks from './components/SocialLinks'
import Audio from './components/Audio'



function App() {
  const [isEntered, setIsEntered] = useState(false);
  
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {!isEntered && <Intro setIsEntered={setIsEntered} /> }
      <Background />
      
      <Building />
      <Car isEntered={isEntered} />
      {isEntered && <CloudContainer /> }
      {isEntered && <Audio /> }

      <SocialLinks />
    </div>
  );
}

export default App;