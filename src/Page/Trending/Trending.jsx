import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import Video from "../../components/Video/video"
import "./Trending.css"



export default function Trending() {
    return (
        <>
            <Header/>
            <div className="flex-two">
            <Sidebar/>
            <Video/>
            </div>
            
        </>
    )
}

