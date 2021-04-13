//building exterior
import Wall from '../assets/building/wall.png'
import TopSection from '../assets/building/topSection.png'
import BottomSection from '../assets/building/bottomSection.png'
import roofTopLightsOff from '../assets/building/roofTopLightsOff.png'
import roofTopLightsOn from '../assets/building/roofTopLightsOn.png'
//rooms
import lobbyLightsOff from '../assets/building/lobbyLightsOff.png'
import lobbyLightsOn from '../assets/building/lobbyLightsOn.png'



export default function Building({timeOfDay}) {

    return (
        <div className="w-64 md:w-80 h-5/6 absolute z-20 left-1/2 transform -translate-x-1/2 bottom-0 flex flex-col justify-end">
            {timeOfDay === 'midday' && <img className="w-full" src={roofTopLightsOff} alt="rooftop" /> }
            {timeOfDay === 'night' && <img className="w-full" src={roofTopLightsOn} alt="rooftop" /> }            
            <img className="w-full" src={TopSection} alt="building top" />
            <Floor timeOfDay={timeOfDay} borderImg={Wall} backgroundImgDay={lobbyLightsOff} backgroundImgNight={lobbyLightsOn} />
            <Floor timeOfDay={timeOfDay} borderImg={Wall} backgroundImgDay={lobbyLightsOff} backgroundImgNight={lobbyLightsOn} />
            <Floor timeOfDay={timeOfDay} borderImg={Wall} backgroundImgDay={lobbyLightsOff} backgroundImgNight={lobbyLightsOn} />
            <Floor timeOfDay={timeOfDay} borderImg={Wall} backgroundImgDay={lobbyLightsOff} backgroundImgNight={lobbyLightsOn} />
            <Floor timeOfDay={timeOfDay} borderImg={Wall} backgroundImgDay={lobbyLightsOff} backgroundImgNight={lobbyLightsOn} />
            <Floor timeOfDay={timeOfDay} borderImg={Wall} backgroundImgDay={lobbyLightsOff} backgroundImgNight={lobbyLightsOn} />
            <Floor timeOfDay={timeOfDay} borderImg={Wall} backgroundImgDay={lobbyLightsOff} backgroundImgNight={lobbyLightsOn} />
            <img className="w-full" src={BottomSection} alt="building bottom" />
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