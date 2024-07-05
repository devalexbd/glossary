import './Button.css'

/**
 * This renders a button on the screen.
 * @param title This is the text that appears on the button. 
 * @param action This executes the code given to this child component from the parent.
 * @returns 
 */
export default function Button({title, action}){

    return(
        <>
            <button onClick={action} id="side-button">{title}</button>
        </>
    )
}