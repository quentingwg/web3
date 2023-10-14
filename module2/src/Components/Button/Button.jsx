const Button = ({changeCount, delta, text}) =>{
    const handleClick = (e) => {
       const  deltaAttribute = e.target.dataset.delta;
       const delta1 = parseInt(deltaAttribute); 
        changeCount(delta1 );
    }

    return(
        <button 
            onClick={handleClick}
            data-delta={delta}
        >
            {text}
        </button>

    )
}

export default Button