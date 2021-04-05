import {useEffect, useState} from 'react'
import {animated, useSpring} from 'react-spring'
//components
import Intro from './components/Intro'
import CloudContainer from './components/Clouds'
import Building from './components/Building'
import Car from './components/Car'
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
    } else if (5 < hour && hour < 8) {
      return setTimeOfDay('dawn');
    } else if (8 < hour && hour < 11) {
      return setTimeOfDay('sunrise');
    } else if (11 < hour && hour < 16) {
      return setTimeOfDay('midday');
    } else if (16 < hour && hour < 19) {
      return setTimeOfDay('sunset');
    } else if (19 < hour && hour < 24) {
      return setTimeOfDay('night');
    }
  }, [])

  const genBgColor = () => {
    switch (timeOfDay) {
      case 'dawn':
        return 'bg-gradient-to-b from-blue-800 to-yellow-100';
      case 'sunrise':
        return 'bg-gradient-to-b from-blue-600 to-yellow-200';
      case 'midday':
        return 'bg-gradient-to-b from-blue-400 to-blue-400';
      case 'sunset':
        return 'bg-gradient-to-b from-blue-600 to-red-200';
      case 'dusk':
        return 'bg-gradient-to-b from-blue-800 to-yellow-600';
      case 'night':
        return 'bg-gradient-to-b from-gray-900 to-gray-700';
      default:
        break;
    }
  }
  
  return (
    <div className={`w-full h-screen relative overflow-hidden ${genBgColor()}`}>
      {!isEntered && <Intro setIsEntered={setIsEntered} /> }
      
      <Building />
      <Car isEntered={isEntered} />
      {isEntered && <CloudContainer /> }
      {isEntered && <Audio /> }

      <SocialLinks />

      <SetTimeOfDay timeOfDay={timeOfDay} setTimeOfDay={setTimeOfDay}  />
    </div>
  );
}

const SetTimeOfDay = ({timeOfDay, setTimeOfDay}) => {
  return (
    <div className="absolute z-30 top-4 left-4 p-4 flex flex-col gap-1 rounded-xl bg-gray-200 bg-opacity-50">
      <h1 className={`cursor-pointer ${timeOfDay === 'dawn' && 'font-bold'}`}
        onClick={() => setTimeOfDay('dawn')}>Dawn</h1>
      <h1 className={`cursor-pointer ${timeOfDay === 'sunrise' && 'font-bold'}`}
        onClick={() => setTimeOfDay('sunrise')}>Sunrise</h1>
      <h1 className={`cursor-pointer ${timeOfDay === 'midday' && 'font-bold'}`}
        onClick={() => setTimeOfDay('midday')}>Midday</h1>
      <h1 className={`cursor-pointer ${timeOfDay === 'sunset' && 'font-bold'}`}
        onClick={() => setTimeOfDay('sunset')}>Sunset</h1>
      <h1 className={`cursor-pointer ${timeOfDay === 'dusk' && 'font-bold'}`}
        onClick={() => setTimeOfDay('dusk')}>Dusk</h1>
      <h1 className={`cursor-pointer ${timeOfDay === 'night' && 'font-bold'}`}
        onClick={() => setTimeOfDay('night')}>Night</h1>
    </div>
  )
}

export default App;