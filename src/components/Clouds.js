import {useState} from 'react'
//images
import LargeCloud1 from '../assets/clouds/LargeCloud1.png'
import LargeCloud2 from '../assets/clouds/LargeCloud2.png'
import LargeCloud3 from '../assets/clouds/LargeCloud3.png'
import MediumCloud1 from '../assets/clouds/MediumCloud1.png'
import MediumCloud2 from '../assets/clouds/MediumCloud2.png'
import MediumCloud3 from '../assets/clouds/MediumCloud3.png'
import SmallCloud1 from '../assets/clouds/SmallCloud1.png'
import SmallCloud2 from '../assets/clouds/SmallCloud2.png'
import SmallCloud3 from '../assets/clouds/SmallCloud3.png'



export default function CloudContainer() {
    // eslint-disable-next-line
    const [cloudArray, setCloudArray] = useState([
      {posX: 0, posY: 10, imgSrc: LargeCloud1},
      {posX: 15, posY: 6, imgSrc: SmallCloud2},
      {posX: 20, posY: 2, imgSrc: LargeCloud3},
      {posX: 25, posY: 9, imgSrc: SmallCloud2},
      {posX: 30, posY: 4, imgSrc: LargeCloud2},
      {posX: 35, posY: 15, imgSrc: MediumCloud3},
      {posX: 55, posY: 4, imgSrc: MediumCloud2},
      {posX: 60, posY: 13, imgSrc: SmallCloud1},
      {posX: 70, posY: 7, imgSrc: LargeCloud3},
      {posX: 75, posY: 9, imgSrc: SmallCloud3},
      {posX: 80, posY: 3, imgSrc: MediumCloud3},
      {posX: 90, posY: 14, imgSrc: SmallCloud3}
    ])

    const parseCloudSize = (imgSrc) => {
      switch (imgSrc) {
        case LargeCloud1: case LargeCloud2: case LargeCloud3:
          return 'w-60 h-48';
        case MediumCloud1: case MediumCloud2: case MediumCloud3:
          return 'w-48 h-32';
        case SmallCloud1: case SmallCloud2: case SmallCloud3:
          return 'w-18 h-12';
        default:
          return null;
      }
    }

    return (
      <>
      <div className="w-full h-full absolute z-10 animate-cloudsLeft">
        {cloudArray.map(cloud => 
          <Cloud key={cloud.posX + cloud.posY} posX={cloud.posX} posY={cloud.posY} imgSrc={cloud.imgSrc} cloudSize={parseCloudSize(cloud.imgSrc)} />
          )}
      </div>
      <div className="w-full h-full absolute -right-full animate-cloudsLeft2">
        {cloudArray.map(cloud => 
          <Cloud key={cloud.dur} posX={cloud.posX} posY={cloud.posY} imgSrc={cloud.imgSrc} cloudSize={parseCloudSize(cloud.imgSrc)} />
          )}
      </div>
      </>
    )
  }

const Cloud = ({posX, posY, imgSrc, cloudSize}) => {

  return (
    <img className={`${cloudSize} absolute object-contain`} style={{left: `${posX}%`, top: `${posY}%`}} src={imgSrc} alt="cloud" />
  )
}