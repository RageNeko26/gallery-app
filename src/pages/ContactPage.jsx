import Transition from "../components/Transition"
const ContactPage = () => {
    return (
        <Transition children={
            <div className="container max-w-full pt-20 flex justify-center ">
                <div className="w-1/3 p-5 bg-white bg-opacity-20 shadow-lg rounded-2xl border border-zinc-100">
                    <h2 className="font-bold text-lg text-center">Contact</h2>
                    <p className="text-slate-400 mt-2 text-base">Any Question? Collaboration? and Commision? Contact me throught below platform</p>
                </div>
            </div>
        }/>
    )
}

export default ContactPage