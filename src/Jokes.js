
export default function Jokes(props) {
  return (
    <div className="jokesCard">
        <h3 className="setup">
            {props.setup}
        </h3>
        <h1 className="joke">
            "{props.joke}"
        </h1>
    </div>
  )
}
