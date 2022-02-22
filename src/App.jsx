// import { MoviesGrid } from "./componentes/MoviesGrid";
import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandigPage";


export function App(){
    return(
        <Router>
            <header>
                <Link to="/"><h1 className={styles.title}> Movies</h1></Link>
                {/* <Link to="/">Home</Link>
                <Link to="movie">Movie</Link> */}
            </header>
            <main>
                <Routes>
                    <Route excat path="/" element={<LandingPage/>}/>
                    <Route exact path="/movies/:movieId" element={<MovieDetails/>}/>
                    <Route path="/">404</Route>
                </Routes>
            </main>
        </Router>
    )
}