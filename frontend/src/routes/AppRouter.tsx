import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesPage from "../pages/NotesPage";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NotesPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter