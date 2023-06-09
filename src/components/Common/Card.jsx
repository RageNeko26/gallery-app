const Card = (props) => {
    const { children, title } = props 
   
    return (
        <div className="w-full m-4 border-2 p-5 border-zinc-100 rounded-lg lg:w-1/3 bg-white shadow-lg bg-opacity-30">
           <h2 className="text-lg font-semibold lg:text-xl">{ title }</h2>
           {children}
        </div>
    )
}

export default Card