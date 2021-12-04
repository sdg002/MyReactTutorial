function InnerComponent(props)
{
    const clickHandler=()=>{
        alert("click ")
    }
    return <div>
        <button onClick={props.clickHandler}>Button inside inner compnent. Click me {props.firstName}</button>
    </div>
}

export default InnerComponent;