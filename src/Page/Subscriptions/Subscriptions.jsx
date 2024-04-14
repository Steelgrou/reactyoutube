import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Subscriptions.css"



export default function Subscriptions() {
    return (
        <>
            <Header />
            <div className="flex-two">

                <Sidebar />
                <iframe width="1200" height="715" src="https://www.youtube.com/embed/GMaGokyeZ-A?si=MyzB-fxej6Y--_RM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>
        </>
    )
}