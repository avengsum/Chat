import Search from "./Search"

const Nav = () => {
    return(
        <div className="mt-10 ml-8 border flex-initial w-96 ">
            <div className="flex pt-2 border-b-2 justify-between h-20">
            <h1 className="pl-2">Chat</h1>
            <div>
            <img src="" alt="" />
            <h1 className="pr-2">Logout</h1>
            </div>
            </div>
            <Search />
            
        </div>
    )
}

export default Nav