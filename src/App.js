import {useState} from 'react'
//components
import Intro from './components/Intro'
import CloudContainer from './components/Clouds'
import Building from './components/Building'
import Car from './components/Car'
import SocialLinks from './components/SocialLinks'
import Audio from './components/Audio'



function App() {
  const [isEntered, setIsEntered] = useState(false);

  return (
    <div className="w-full h-screen relative bg-blue-300 overflow-hidden">
      {!isEntered && <Intro setIsEntered={setIsEntered} /> }
      
      <Building />
      <Car isEntered={isEntered} />
      {isEntered && <CloudContainer /> }
      {isEntered && <Audio /> }

      <SocialLinks />
    </div>
  );
}

export default App;
