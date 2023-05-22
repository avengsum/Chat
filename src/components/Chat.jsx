import profile from '../assets/profile.png';
import video from '../assets/video.png';
import call from '../assets/call.png';
import dot from '../assets/dot.jpg';
import Message from './Message';

const Chat = () => {
  return (
    <div className="mt-10 ml-2 flex flex-col items-stretch h-[calc(100vh - 120px)] w-2/3 bg-gray-100 border-t border-gray-300 p-2">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <img
            src={profile}
            className="w-12 h-12 rounded-full object-cover"
            alt=""
          />
          <h1 className="ml-2 text-xl font-bold">Zilan</h1>
        </div>

        <div className="flex gap-4">
          <img src={video} className="h-6" alt="" />
          <img src={call} className="h-6" alt="" />
          <img src={dot} className="h-6" alt="" />
        </div>
      </div>

      <div className="flex-grow">
        <Message />
      </div>

      <div className="border border-gray-300 px-4 py-2 rounded-full bg-white flex items-center">
        <button className="text-2xl">😊</button>
        <form className="flex flex-grow">
          <input
            type="text"
            placeholder="Type a message"
            className="border border-gray-300 px-4 py-2 rounded-full w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600"
          >
            Send
          </button>
        </form>
        <button className="text-2xl">🔗</button>
      </div>
    </div>
  );
};

export default Chat;
