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
                        <div className="card">Funcional</div>
                        <div className="card">Yoga</div>
                        <div className="card">Cardio</div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
