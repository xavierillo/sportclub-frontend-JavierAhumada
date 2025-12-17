import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Landing.css";

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
                        <div className="card">Crossfit</div>
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
