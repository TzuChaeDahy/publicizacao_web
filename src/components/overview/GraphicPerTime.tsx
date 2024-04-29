import anual from "../../assets/anual.png"

const GraphicPerTime = () => {
    return (
        <div className="flex flex-col gap-4 bg-neutral-100 p-4 rounded-xl">
            <div className="flex items-center gap-96 justify-between">
                <h3 className="font-bold">Panorama Geral</h3>
                <p>Anual</p>
            </div>
            <div>
                <img className="rounded" src={anual}/>
            </div>
            <div className="flex gap-6 justify-center">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <h4>Consumo</h4>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <h4>Geração</h4>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <h4>Fatura</h4>
                </div>
            </div>
        </div>
    )
}

export default GraphicPerTime