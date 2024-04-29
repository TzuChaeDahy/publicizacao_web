interface PeriodGraphicProps {
    graphic: string;
}

const PeriodGraphic = ({graphic}: PeriodGraphicProps) => {
    return (
        <div className="flex flex-col gap-4 bg-neutral-100 p-4 rounded-xl">
            <div className="flex justify-between">
                <h3 className="font-bold">Geração de Energia</h3>
                <p>Semestral</p>
            </div>
            <div className="w-96">
                <img className="rounded" src={graphic} />
            </div>
        </div>
    )
}

export default PeriodGraphic