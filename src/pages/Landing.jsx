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
                    <p>Crossfit · Funcional · Yoga · Cardio</p>
                </section>
            </main>
            <Footer />
        </>
    );
}
