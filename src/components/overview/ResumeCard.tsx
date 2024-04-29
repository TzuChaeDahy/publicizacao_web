import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

interface ResumeCardProps {
    upsideDown: boolean
    title: string;
    value: string;
    unit: string;
    date: string;
    percentage: string;
    graphic: string;
}

const ResumeCard = (props: ResumeCardProps) => {
    let negative: boolean
    if (props.upsideDown) {
        negative = props.percentage[0] == '+'
    }
    else {
        negative = props.percentage[0] == '-'
    }
    return (
        <div className="flex bg-neutral-100 rounded-2xl p-6 gap-10">
            <div className="flex flex-col gap-1">
                <h2 className="font-bold text-xs">{props.title}</h2>
                <div className="flex items-end">
                    <h3 className="font-bold text-3xl">{props.value}</h3>
                    <p>{props.unit}</p>
                </div>
                <p className="text-xs tracking-tighter">{props.date}</p>
            </div>
            <div className="flex flex-col justify-between items-end">
                <div className={negative ? "flex py-0.5 px-1.5 w-min rounded-full bg-red-200" : "flex py-0.5 px-1.5 w-min rounded-full bg-green-200"}>
                    <p className={negative ? 'font-bold text-xs text-red-500' : 'font-bold text-xs text-green-500'}>{props.percentage}</p>
                    <FontAwesomeIcon icon={faArrowRight} className={negative ? props.upsideDown ? '-rotate-45 text-red-500' : 'rotate-45 text-red-500' : '-rotate-45 text-green-500'}/>
                </div>
                <div className="w-20 h-10">
                    <img src={props.graphic} className="rounded"/>
                </div>
            </div>
        </div>
    )
}

export default ResumeCard