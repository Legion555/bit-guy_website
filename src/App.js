import {useState, useEffect} from 'react'
//components
import Intro from './components/Intro'
import Background from './components/Background/index'
import CloudContainer from './components/Clouds'
import Building from './components/Building'
import Car from './components/Car'
import Tree from './components/Tree'
import SocialLinks from './components/SocialLinks'
import Audio from './components/Audio'



function App() {
  const [isEntered, setIsEntered] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState();

  useEffect(() => {
    let today = new Date();
    let hour = today.getHours();
    if (0 < hour && hour < 6) {
      return setTimeOfDay('night');
    } else if (5 < hour && hour < 19) {
      return setTimeOfDay('midday');
    // } else if (8 < hour && hour < 11) {
    //   return setTimeOfDay('sunrise');
    // } else if (11 < hour && hour < 16) {
    //   return setTimeOfDay('midday');
    // } else if (16 < hour && hour < 19) {
    //   return setTimeOfDay('sunset');
    } else if (19 < hour && hour < 24) {
      return setTimeOfDay('night');
    }
  }, [])
  
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {!isEntered && <Intro setIsEntered={setIsEntered} /> }
      <Background timeOfDay={timeOfDay} setTimeOfDay={setTimeOfDay} />
      
      <Building timeOfDay={timeOfDay} />
      <Car isEntered={isEntered} />
      <Tree />
      {isEntered && <CloudContainer /> }
      {isEntered && <Audio /> }

      <SocialLinks />
    </div>
  );
}

export default App;