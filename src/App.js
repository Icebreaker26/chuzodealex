import logo from './images/logo.png';
import banner from './images/1.png'
import welcome from './images/2.png'
import products from './images/3.png'
import background from './images/fondo products.jpg'
import { FaMapMarkerAlt } from "react-icons/fa";
import carne from './images/productos/carne.jpg'
import pollo from './images/productos/pollo.jpg'
import chuzo from './images/productos/chuzo.jpg'
import empanada from './images/productos/empanada.jpg'
import chorizo from './images/productos/chorizo.jpg'
import { FaWhatsapp } from "react-icons/fa";



import './App.css';

function App() {

  const productos = [
    {id:2, Nombre:"CHUZOS", Precio:7000, foto:chuzo},
    {id:3, Nombre:"CHORIZOS", Precio:8000, foto:chorizo},
    {id:4, Nombre:"EMPANADAS",Precio:2000, foto:empanada},
    {id:5, Nombre:"AREPAS CARNE DESMECHADA", Precio:8000, foto:carne},
    {id:6, Nombre:"AREPAS POLLO DESMECHADO",  Precio:8000, foto:pollo},
    
  ]
  return (
    <>
      {/*
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a style={{width:"5%"}}>
          <img src={logo} style={{width:"100%"}}/>
          </a>
          <span className='d-flex'>
          <span><button href="#banner" id='navbt' className='btn btn-danger'>INICIO</button></span>
          <span><button id='navbt' className='btn btn-danger'>PRODUCTOS</button></span>
          <span><button id='navbt' className='btn btn-danger'>NOSOTROS</button></span>
          <span><button id='navbt' className='btn btn-danger'>VISITANOS</button></span>
          </span>
        </div>
      </nav>
    */}

      <div style={{ backgroundColor: "black" }}>
        <img
          id="banner"
          src={banner}
        ></img>
        <img
          id="banner"
          src={welcome}
        ></img>
        
      </div>
      <div id="products">

        <h1>¡LOS FAVORITOS DE LA CASA!</h1>        

        {productos.map((producto) => (
          <div id="producto" class="card">
            <img src={producto.foto} class="card-img-top" alt="..." />
            <div class="card-body">
              <h1 class="card-title">{producto.Nombre}</h1>
              <h2 class="card-text">${producto.Precio}</h2>
              <br/>
            </div>
          </div>
        ))}
      </div>

      <div id='visitame'>

            <h1>¡VISITAME!</h1>


              <button className='btn btn-danger'><a href='https://api.whatsapp.com/send/?phone=3147854382&text&type=phone_number&app_absent=0' target='_blank' style={{textDecoration:"none"}}><h2><FaWhatsapp /> 3147854382 </h2></a></button>


              <br/><br/>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d688.4222807321794!2d-75.87939396804032!3d4.90066711747411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38790023078697%3A0x63f0c9d9b1e79574!2sEL%20CHUZO%20DE%20ALEX!5e0!3m2!1ses!2sco!4v1728787601268!5m2!1ses!2sco" width="99%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

              <h1><FaMapMarkerAlt />Frente a Urgencias Hospital La Virginia</h1>

              <img id='logo' src={logo}/>


      </div>
    </>
  );
}

export default App;
