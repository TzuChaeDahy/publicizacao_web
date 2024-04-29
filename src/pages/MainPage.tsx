import Overview from "../components/overview/Overview.tsx";
import Navigation from "../components/navigation/Navigation.tsx";

const MainPage = () => {
    return (
        <div className="flex flex-col">
            <Navigation/>
            <Overview/>
        </div>
    )
}

export default MainPage