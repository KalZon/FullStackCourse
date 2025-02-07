export function Notificacion({messageError, messageSuccess}){

    return(
        <>
            {messageError && <h3 className="error">{messageError}</h3>}
            {messageSuccess && <h3 className="success">{messageSuccess}</h3>}
        </>
    )
}