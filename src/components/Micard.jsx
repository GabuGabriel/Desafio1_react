import Card from 'react-bootstrap/Card';
import Tags from './Tags';

function Micard({ imagen, titulo, descripcion, color, textobadge }) {

  return (
    <Card style={{ width: '18rem' }}>

      <Card.Img variant="top" src={imagen} />

      <Card.Body>

        <Card.Title>{titulo}</Card.Title>

        <Card.Text>{descripcion}</Card.Text>

        <Tags color={color} textobadge={textobadge} />
      </Card.Body>
    </Card>
  );
}

export default Micard;