//building exterior
import Wall from '../assets/building/wall.png'
import TopSection from '../assets/building/topSection.png'
import BottomWall from '../assets/building/bottomWall.png'
import BottomSection from '../assets/building/bottomSection.png'
import roofTopLightsOff from '../assets/building/roofTopLightsOff.png'
import roofTopLightsOn from '../assets/building/roofTopLightsOn.png'
//rooms
import lobbyLightsOff from '../assets/building/lobbyLightsOff.png'
import lobbyLightsOn from '../assets/building/lobbyLightsOn.png'
import room1_lightsOff from '../assets/building/room1_lightsOff.png'
import room1_lightsOn from '../assets/building/room1_lightsOn.png'
import room2_lightsOff from '../assets/building/room2_lightsOff.png'
import room2_lightsOn from '../assets/building/room2_lightsOn.png'
import room3_lightsOff from '../assets/building/room3_lightsOff.png'
import room3_lightsOn from '../assets/building/room3_lightsOn.png'
import room4_lightsOff from '../assets/building/room4_lightsOff.png'
import room4_lightsOn from '../assets/building/room4_lightsOn.png'
import room5_lightsOff from '../assets/building/room5_lightsOff.png'
import room5_lightsOn from '../assets/building/room5_lightsOn.png'
import room6_lightsOff from '../assets/building/room6_lightsOff.png'
import room6_lightsOn from '../assets/building/room6_lightsOn.png'



export default function Building({timeOfDay}) {

    return (
        <div className="w-64 md:w-80 h-5/6 absolute z-20 left-1/2 transform -translate-x-1/2 bottom-0 flex flex-col justify-end">
            {timeOfDay === 'midday' && <img className="w-full" src={roofTopLightsOff} alt="rooftop" /> }
            {timeOfDay === 'night' && <img className="w-full" src={roofTopLightsOn} alt="rooftop" /> }            
            <img className="w-full" src={TopSection} alt="building top" />
            <Floor timeOfDay={timeOfDay} borderImg={Wall} backgroundImgDay={room6_lightsOff} backgroundImgNight={room6_lightsOn} />
            <Floor timeOfDay={timeOfDay} borderImg={Wall} backgroundImgDay={room5_lightsOff} backgroundImgNight={room5_lightsOn} />
            <Floor timeOfDay={timeOfDay} borderImg={Wall} backgroundImgDay={room4_lightsOff} backgroundImgNight={room4_lightsOn} />
            <Floor timeOfDay={timeOfDay} borderImg={Wall} backgroundImgDay={room3_lightsOff} backgroundImgNight={room3_lightsOn} />
            <Floor timeOfDay={timeOfDay} borderImg={Wall} backgroundImgDay={room2_lightsOff} backgroundImgNight={room2_lightsOn} />
            <Floor timeOfDay={timeOfDay} borderImg={Wall} backgroundImgDay={room1_lightsOff} backgroundImgNight={room1_lightsOn} />
            <Floor timeOfDay={timeOfDay} borderImg={BottomWall} backgroundImgDay={lobbyLightsOff} backgroundImgNight={lobbyLightsOn} />
            <img className="w-full transform scale-x-105" src={BottomSection} alt="building bottom" />
        </div>
    )
}

const Floor = ({timeOfDay, borderImg, backgroundImgDay, backgroundImgNight}) => {
    const parseBackgroundImg = () => {
        switch (timeOfDay) {
            case 'midday':
                return backgroundImgDay;
            case 'night':
                return backgroundImgNight;
            default:
                return null;
        }
    }

    const wallStyle = {
        border: '5px solid transparent',
        borderImage: `url(${borderImg}) 30 round`,
        backgroundImage: `url(${parseBackgroundImg()})`,
        backgroundSize: 'cover'
    }

    return (
        <div style={wallStyle} className="w-full h-20 md:h-24 border-t-2 border-r-2 border-l-2 border-gray-800 bg-gray-400 hover:bg-gray-200" />
    )
}