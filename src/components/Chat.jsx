import profile from '../assets/profile.png'
import video from '../assets/video.png'
import call from '../assets/call.png'
import dot from '../assets/dot.jpg'


const Chat = () => {
    return (
        <div className="mt-10 ml-2 flex justify-between w-[70%]">
            <div className='flex'>
            <img src={profile} className='w-12 h-10' alt="" />
            <h1 className='ml-1 mt-1'>Zilan</h1>
            </div>
            <div className='flex gap-4'>
                <img src={video} className='h-8' alt="" />
                <img src={call} className='h-8' alt="" />
                <img src={dot} className='h-8' alt="" />
            </div>
        </div> 
    )
}

export default Chat