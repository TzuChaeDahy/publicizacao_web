interface Props {
    children: string
}

const NavigationItem = ({children}: Props) => {
    return (
            <li>
                <a href="#" className="text-neutral-500 p-2 font-bold rounded hover:text-neutral-200 hover:bg-neutral-700 transition">
                    {children}
                </a>
            </li>
    )
}

export default NavigationItem