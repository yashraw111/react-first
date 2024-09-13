function Card(props){
    return(
        <>
        <div className="card mt-4">
                <img src={props.image}/>
            <div className="card-body">
                <h3>{props.title}</h3>
                <p>{props.para}</p>
            </div>
        </div>
        </>
    )
}

export default Card