import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import kids from "/kids.jpg"

export default function History() {
    return (
        <>
            <Header />

            <div className="flex-two">
                <Sidebar />
                <img src={kids} alt="" />
            </div>


        </>
    )
}