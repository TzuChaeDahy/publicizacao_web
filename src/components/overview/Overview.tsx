import ResumeCard from "./ResumeCard.tsx";
import PeriodGraphic from "./PeriodGraphic.tsx";
import PerformanceGraphic from "./PerformanceGraphic.tsx";
import GraphicPerTime from "./GraphicPerTime.tsx";
import consumo from "../../assets/consumo.png"
import geracao from "../../assets/geracao.png"
import fatura from "../../assets/fatura.png"
import semestral from "../../assets/semestral.png"

const Overview = () => {
    return (
        <div className="bg-neutral-200 flex flex-col gap-10 p-6 items-center">
            <div className="flex gap-10">
                <ResumeCard
                    upsideDown={true}
                    title={"Consumo"}
                    value={"31.139"}
                    unit={"kW"}
                    date={"Março de 2024"}
                    percentage={"+35%"}
                    graphic={consumo}
                />
                <ResumeCard
                    upsideDown={true}
                    title={"Fatura"}
                    value={"27.481,66"}
                    unit={"R$"}
                    date={"Março de 2024"}
                    percentage={"+33%"}
                    graphic={fatura}
                />
                <ResumeCard
                    upsideDown={false}
                    title={"Geração"}
                    value={"11.626"}
                    unit={"kW"}
                    date={"Março de 2024"}
                    percentage={"+11%"}
                    graphic={geracao}
                />
            </div>
            <div className="flex gap-10">
                <PeriodGraphic graphic={semestral}/>
                <PerformanceGraphic/>
            </div>
            <div>
                <GraphicPerTime/>
                {/*<PeriodGraphic/>*/}
            </div>
        </div>
    )
}

export default Overview