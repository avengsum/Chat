import profile from '../assets/profile.png'

const User = () => {
    return (
        <div className='flex hover:bg-slate-100'>
            <img src={profile} className='w-12' alt="" />
            <div>
                <div className='flex gap-60 ml-2'>
                    <h1 className='font-semibold'>Zilan</h1>
                    <p><time>12:00</time></p>
                </div>
                <p className='ml-2 mt-1'>kuvjvjvc</p>
            </div>
        </div>
    )
}

export default User