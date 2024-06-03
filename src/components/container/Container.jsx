const Container=({title, text,icon})=>{
    return(
        <><div>
                <div>
                    <img src={`/images/${icon}.svg`} alt="" />
                </div>
                <h2>{title}</h2>
                <p>{text}</p> 
                <button>Learn More</button>
            </div>
            

        </>
    )
}
export default Container