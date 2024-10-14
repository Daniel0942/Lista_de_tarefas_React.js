import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Components/pages/Home"
import Tarefas from "./Components/pages/Tarefas"
import NovaTarefa from "./Components/pages/NovaTarefa"
import EditarTarefa from "./Components/pages/EditarTarefa"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tarefas" element={<Tarefas />} />
                <Route path="/nova_tarefa" element={<NovaTarefa />} />
                <Route path="/tarefas/:id" element={<EditarTarefa/>} />
            </Routes>
        </Router>
    )
}
export default App