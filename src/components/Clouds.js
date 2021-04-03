import {useState} from 'react'



export default function CloudContainer() {
    const cloudArray = useState([
      {posX: 0, posY: 10, dur: 10000}, {posX: 15, posY: 6, dur: 15000}, {posX: 35, posY: 15, dur: 20000}, {posX: 55, posY: 3, dur: 25000},
      {posX: 70, posY: 4, dur: 30000}, {posX: 90, posY: 8, dur: 35000}
    ])
    // const goLeft = useSpring({
    //   from: { right: `-100%` },
    //   to: { right: '100%' },
    //   config: { duration: 1000 },
    //   onRest: () => setCloudArray([{posX: 10, posY: 10, dur: 10000}])
    // })

    // useEffect(() => {
    //   setTimeout(() => {
    //     let tempCloudArray = cloudArray;
    //     tempCloudArray.push({posX: -10, posY: 10, dur: 10000})
    //     setCloudArray(tempCloudArray)
    //     console.log('reset')
    //   }, 5e3)
    // }, [])

    return (
      <>
      <div className="w-full h-full absolute animate-cloudsLeft">
        {cloudArray.map(cloud => 
          <Cloud key={cloud.dur} posX={cloud.posX} posY={cloud.posY} />
          )}
      </div>
      <div className="w-full h-full absolute -right-full animate-cloudsLeft2">
        {cloudArray.map(cloud => 
          <Cloud key={cloud.dur} posX={cloud.posX} posY={cloud.posY} />
          )}
      </div>
      </>
    )
  }

const Cloud = ({posX, posY}) => {

  return (
    <div style={{left: `${posX}%`, top: `${posY}%`}} className={`w-16 h-8 absolute top-16 bg-white`} />
  )
}