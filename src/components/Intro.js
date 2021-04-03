import {useState} from 'react'

export default function Intro({setIsEntered}) {
    const [isFading, setIsFading] = useState(false);

    const fadeOut = () => {
        setIsFading(true);
        setTimeout(() => {
            setIsEntered(true);
        }, 12e2)
    }

    return (
        <div className={`w-full h-screen absolute top-0 left-0 z-40 transition ease-in duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`} onClick={fadeOut}>
            <div className={`w-full h-full bg-gray-800 bg-opacity-90`} />
            <div className="w-max h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 flex justify-center">
                <h1 className="text-6xl text-gray-200 cursor-pointer transform transition ease-in duration-300 hover:scale-110">Explore the tower</h1>
            </div>
        </div>
    )
}