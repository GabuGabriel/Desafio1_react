
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Micard from "./components/Micard";
import Footer from './components/footer';

function App() {


  return (
    <>
      <div className="container1">

        <div className="header">

          <Header titulo="Adopta un perrito" />

        </div>

        <div className="containercards">

          <Micard
            imagen="src\assets\dog-3277416_1280.jpg"
            nombre="Perrito 1"
            descripcion=" Bella necesita un hogar tranquilo y cariñoso donde pueda florecer."
            color="primary"
            textobadge="Adoptar!!"
          />
          <Micard
            imagen="src\assets\dog-3389729_1280.jpg"
            nombre="Perrito 2"
            descripcion="Siempre está listo para una aventura y le encanta el agua. Rex está buscando una familia."
            color="primary"
            textobadge="Adoptar!!"
          />
          <Micard
            imagen="src\assets\husky-3380548_1280.jpg"
            nombre="Perrito 3"
            descripcion="Bruno está buscando una familia activa que le pueda proporcionar un montón de ejercicio"
            color="primary"
            textobadge="Adoptar!!"
          />
          <Micard
            imagen="src\assets\labrador-retriever-1210559_1280.jpg"
            nombre="Perrito 4"
            descripcion="ALe encanta olfatear en el parque y acurrucarse en el sofá. Luna sería una gran adición a cualquier familia."
            color="primary"
            textobadge="Adoptar!!"
          />
          <Micard
            imagen="src\assets\puppy-1903313_1280.jpg"
            nombre="Perrito 5"
            descripcion="Es muy sociable, adora a los niños y se lleva bien con otros animales. Daisy sería un maravilloso primer perro para una familia."
            color="primary"
            textobadge="Adoptar!!"
          />
          <Micard
            imagen="src\assets\weimaraner-1381186_1280.jpg"
            nombre="Perrito 6"
            descripcion="Max sería perfecto para alguien que busque un compañero tranquilo y cariñoso."
            color="primary"
            textobadge="Adoptar!!"
          />

        </div>


        <div className="footer">
          <Footer piedepagina="Página para la adopción de perritos. Todos los derechos reservados 2023" />
        </div>

      </div>
    </>
  )
}

export default App
