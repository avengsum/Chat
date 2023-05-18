import profile from '../assets/profile.png'
import video from '../assets/video.png'
import call from '../assets/call.png'
import dot from '../assets/dot.jpg'

const Chat = () => {
    return (
        <div className="mt-10 ml-2">
            <div className='flex'>
            <img src={profile} className='w-12 h-10' alt="" />
            <h1 className='ml-1 mt-1'>Zilan</h1>
            </div>
            <div className='flex justify-between'>
                <img src={video} className='w-10' alt="" />
                <img src={call} className='w-10' alt="" />
                <img src={dot} className='w-10' alt="" />
            </div>
        </div> 
    )
}

export default Chat