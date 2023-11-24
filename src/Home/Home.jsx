
import "./Home.css";
import { Formulario } from "../Formulario/Formulario";
import { Carrucel } from "../carrucel/carrucel";
export function Home() {
  return (

    <>
      <div className="banner justify-content-center align-items-center">
        <div className="row">
          <div className="col-12 col-md-12  text-white fw-bold text-center">
            <h3>Servicios de Hotelería de don michel</h3>
            <hr />
            <Formulario />
          </div>
        </div>
      </div>
      <section>
        <br />
        <br />
        <div className="container text-center">
          <div className="col-12 text-center">
            <h3>Nosotros</h3>
          </div>
          <br />
          <div className="col-md8">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illum inventore quas, nam, recusandae ullam accusamus voluptatum, est in voluptate suscipit. Quos maxime cumque tempore expedita recusandae nulla tempora, doloremque quaerat inventore explicabo debitis cupiditate itaque laborum consectetur asperiores voluptas nostrum, cum, veniam alias facere? Velit, deleniti consequuntur maxime impedit necessitatibus voluptate dolor? Vero ea, ullam fugit et voluptas nulla?</p>
          </div>
        </div>
      </section>
      <section>
        <hr />
        <div className="col-12 text-center">
          <h3>Nuestras imagenes</h3>
        </div>
        <hr />
        <br />
        <div className="row">
        <div className="col-4 col-md-4">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../src/assets/habitacion1.jpg"  class="d-block w-100"/>
                     </div>
                    <div class="carousel-item">
                        <img src="../../src/assets/habitacion2.jpg" class="d-block w-100"/>
                    </div>
                    <div class="carousel-item">
                        <img src="../../src/assets/habitacion3.jpg" class="d-block w-100" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div className="col-4 col-md-4">
        <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../src/assets/restaurante1.jpg"  class="d-block w-100"/>
                     </div>
                    <div class="carousel-item">
                        <img src="../../src/assets/comida1.jpg" class="d-block w-100"/>
                    </div>
                    <div class="carousel-item">
                        <img src="../../src/assets/bar2.jpg" class="d-block w-100" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div className="col-4 col-md-4">
        <div id="carouselExampleControls3" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../src/assets/exterior1-2.jpg"  class="d-block w-100"/>
                     </div>
                    <div class="carousel-item">
                        <img src="../../src/assets/exterior2.jpg" class="d-block w-100"/>
                    </div>
                    <div class="carousel-item">
                        <img src="../../src/assets/exterior3-2.jpg" class="d-block w-100" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        </div>
      </section>
      <section>
        <br /><br />
      <hr />
        <div className="col-12 text-center">
          <h3>Nuestras imagenes</h3>
        </div>
        <hr />
        <br /><br /><br />
        <div className="container-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d494.96575594873303!2d12.322545171445183!3d45.430526581746285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1700226239134!5m2!1ses-419!2sco" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

        </div>
      </section>
      <br /><br />
    <footer className="bg-light text-dark pt- pb-4">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">

          <div className="col-md-3 col-lg-3 col-lx-3 mx-auto mt-3">

            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">INFORMACION</h5>
            <hr className="mb-4"/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga suscipit repellat cupiditate ipsum facere eaque laborum, accusantium perferendis iure eum corrupti nam quae ab corporis. Fugit veritatis odio saepe maiores?
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-blod text-primary">RESERVA AQUI</h5>
            <hr className="mb-4"/>
            <p>
              <a href="#" className="text-dark">Tu cuenta</a>
            </p>
            <p>
              <a href="#" className="text-dark">Habitaciones</a>
            </p>

            <p>
              <a href="#" className="text-dark">Reservas</a>
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-blod text-primary">CONTACTO</h5>
            <hr className="mb-4"/>
            <p>
              <li className="fas fa-home me-3">colombia, medellin</li>
            </p>

            <p>
              <li className="fas fa-envelope me-3">juribetapias@gmail.com</li>
            </p>

            <p>
              <li className="fas fa-phone me-3">+57 3235901594</li>
            </p>
          </div>

          <hr className="mb-4"/>


          <div className="text-center mb-2">
            <p>
              Copyright Todos los derechos reservados 
              <a href="#">
                <strong className="text-primary">hotel don michel</strong>
              </a>
            </p>
          </div>
        </div>
      </div>

    </footer>
      
    </>
  );
}