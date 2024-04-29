import NavigationItem from "./NavigationItem.tsx";
import logo from "../../assets/logo_ifal.png"

const Navigation = () => {
    return (
        <div className="bg-neutral-900 p-6 flex justify-between">
            <a href="#">
                <img className="w-10" src={logo} alt=""/>
            </a>
            <ul className="flex self-center justify-between gap-6">
                <NavigationItem>Resumo</NavigationItem>
                <NavigationItem>Campus</NavigationItem>
                <NavigationItem>Sobre Nós</NavigationItem>
                <NavigationItem>Contato</NavigationItem>
            </ul>
        </div>
    )
}

export default Navigation