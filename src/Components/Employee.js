
function Employee(props){
    //const flag = false;
    const emp = {
        name : "raj",
        desig : "ML",
    }
    //console.log(emp);
    console.log(props.data.name);

    return (
        <div>
            { props.data ? 
            <> <strong>{props.data.name}</strong>
            <p>{props.data.desig}</p>
            <p>{props.data.age}</p>
            </>
            : <p></p>}
        </div>
    )
}

export default Employee;