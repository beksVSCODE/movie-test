import { Routes, Route } from 'react-router-dom';
import { MoviesListPage } from './pages/movies-list';
import { MovieDetailsPage } from './pages/movie-details';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MoviesListPage />} />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>
    );
}

export default App;
