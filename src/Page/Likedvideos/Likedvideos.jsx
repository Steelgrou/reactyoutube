import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import ana from '/ana.jpg'
import './Likedvideos.css'

export default function Likedvideos() {
    return (
        <>
            <Header />
            <div className="flex-two">
                <Sidebar />
                <div className="img-likedvideos">
                    <img src={ana} alt="" />
                </div>

            </div>
        </>
    )
}