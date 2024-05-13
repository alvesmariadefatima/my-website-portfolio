import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} index />
            </Routes>
        </Router>
    )
}

export default AppRoutes;