import solarPanel from "../../assets/solar-panel-svgrepo-com.svg"

const PerformanceGraphic = () => {
    return (
        <div className="bg-neutral-100 rounded-xl gap-6 p-4 flex">
            <div className="flex flex-col justify-center gap-4">
                <div className="flex flex-col gap-6">
                    <h3 className="font-bold">Monitoramento de Performance</h3>
                    <div>
                        <p>Total Consumido</p>
                        <div className="flex items-end">
                            <p className="font-bold text-3xl">652.556</p>
                            <p>kW</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div>
                        <p>Total Gerado</p>
                        <div className="flex items-end">
                            <p className="font-bold text-3xl">388.213</p>
                            <p>kW</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-evenly items-center gap-4">
                <img src={solarPanel} alt="Painel Solar" className="w-32"/>
                <div className="bg-neutral-200 rounded-md p-2 flex flex-col text-xs text-center gap-4">
                    <p>Dados analisados a partir de:</p>
                    <p className="font-bold">Maio de 2021</p>
                </div>
            </div>
        </div>
    )
}

export default PerformanceGraphic