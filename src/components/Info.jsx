export default function Info(props){

    return(
        <>
            <h1>{props.title}</h1>
            <img src={props.image} alt="Screenshot of Code" />
            <p>{props.description}</p>
        </>
    )
}