import Badge from 'react-bootstrap/Badge';

function Tags(props) {

    return (

        <>
            <h2>
                <Badge bg={props.color}>
                    {props.textobadge}
                </Badge>
            </h2>
        </>
        
    )
}

export default Tags