import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ModalProvider } from "react-modal-classic"
import Home from './pages/Home'
import Error from './pages/Error'

function Router(){
    return (
        <BrowserRouter>
            <ModalProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </ModalProvider>
        </BrowserRouter>
    )
}

export default Router