import Statistics from "./Statistics"

const Button =({setAvis, avis,text})=> {
    const handleClick = (e)=> {
        const avis = e.target.dataset.avis
        setAvis(parseInt(avis))
    }
    return(
        <>
       
        
        <button
            onClick={handleClick}
            data-avis={avis}

        > 

        {text}
        </button>

      


        </>
    )
}

export default Button