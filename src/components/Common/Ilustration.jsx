import Section from "./Section";
import first from "../../assets/ilustration/1.jpg"
import second from "../../assets/ilustration/2.jpg"
import third from "../../assets/ilustration/3.jpg"

const Ilustration = () => {
    const content = [
        {
            id: 1,
            src: first
        },
         {
            id: 2,
            src: second
        }, {
            id: 3,
            src: third
        },
    ]

    return(
    	<div className="pt-8">
            <Section title="Ilustration" content={content} color={"border-slate-500"} />
        </div>
    )
}

export default Ilustration