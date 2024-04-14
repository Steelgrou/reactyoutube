import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";


export default function Library() {
    return (
        <>
            <Header />
            <div className="flex-two">

                <Sidebar />
                <iframe width="1200" height="715" src="https://www.youtube.com/embed/kz23xxukY5s?si=IVacpBIba-m5n82H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                
            </div>

        </>
    )
}