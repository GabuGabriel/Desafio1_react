import Card from 'react-bootstrap/Card';
import Tags from './Tags';

function Micard(props) {

  return (

    <Card style={{ width: '18rem' }}>

      <Card.Img variant="top" src={props.imagen} />

      <Card.Body>

        <Card.Title>{props.titulo}</Card.Title>

        <Card.Text>{props.descripcion}</Card.Text>

        <Tags
          color = {props.color}
          textobadge = {props.textobadge}
        />

      </Card.Body>

    </Card>
  );
}

export default Micard;