/* const pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.title),
    React.createElement("p", {}, props.description),
  ]);
}; */

const pizza = (props) => {
    return (
        <div>
            <h1 className="h1">{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default pizza;