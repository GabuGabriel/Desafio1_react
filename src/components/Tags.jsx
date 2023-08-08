import Badge from 'react-bootstrap/Badge';

function Tags({ color, textobadge }) {

    return (
        <>
            <h2>
                <Badge bg={color}>
                    {textobadge}
                </Badge>
            </h2>
        </>
    )
}

export default Tags