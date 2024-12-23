const pizza = (props) => {
    return (
        <div className="pizza">
            <h1 className="h1">{props.name}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt={props.name} />
        </div>
    );
}

export default pizza;