import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Landing.css";
import img_crossfit from "../assets/img/img_que_es_crossfit.png"

export default function Landing() {
    return (
        <>
            <Header />
            <main className="landing">
                <section className="hero">
                    <h2>Bienvenido a SportClub</h2>
                    <p>Entrena, mejora y alcanza tus metas.</p>
                </section>
                <section className="clases">
                    <h3>Clases disponibles</h3>
                    <div className="cards">
                        <div className="card">
                            <img src={img_crossfit} alt="img crossfit" className="img_card" />
                            <h3>Crossfit</h3>
                            <p>es un programa de entrenamiento de alta intensidad
                                que combina ejercicios variados 
                                de diferentes disciplinas como 
                                la halterofilia, gimnasia y entrenamiento 
                                metabólico</p>
                        </div>
                        <div className="card">
                            <img src={img_crossfit} alt="img crossfit" className="img_card" />
                            <h3>Crossfit</h3>
                            <p>es un programa de entrenamiento de alta intensidad
                                que combina ejercicios variados 
                                de diferentes disciplinas como 
                                la halterofilia, gimnasia y entrenamiento 
                                metabólico</p>
                        </div>
                        <div className="card">
                            <img src={img_crossfit} alt="img crossfit" className="img_card" />
                            <h3>Crossfit</h3>
                            <p>es un programa de entrenamiento de alta intensidad
                                que combina ejercicios variados 
                                de diferentes disciplinas como 
                                la halterofilia, gimnasia y entrenamiento 
                                metabólico</p>
                        </div>
                        <div className="card">
                            <img src={img_crossfit} alt="img crossfit" className="img_card" />
                            <h3>Crossfit</h3>
                            <p>es un programa de entrenamiento de alta intensidad
                                que combina ejercicios variados 
                                de diferentes disciplinas como 
                                la halterofilia, gimnasia y entrenamiento 
                                metabólico</p>
                        </div>
                        <div className="card">Funcional</div>
                        <div className="card">Yoga</div>
                        <div className="card">Cardio</div>
                    </div>
                    <br />
                    <div className="container mt-4">
                        <div className="row text-center g-2">
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="demo-box bg-primary text-white rounded-5 p-1">
                                    <h5>Clase 1</h5>
                                    <p className="text-white">Crossfit</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="demo-box bg-success text-white rounded-5 p-1">
                                    <h5>Clase 2</h5>
                                    <p className="text-white">Funcional</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="demo-box bg-warning text-dark rounded-5 p-1">
                                    <h5>Clase 3</h5>
                                    <p className="text-white">Yoga</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="demo-box bg-danger text-white rounded-5 p-1">
                                    <h5>Clase 4</h5>
                                    <p className="text-white">Cardio</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                
            </main>
            <Footer />
        </>
    );
}
