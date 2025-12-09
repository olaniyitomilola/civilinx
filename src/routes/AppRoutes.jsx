import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Contact from '../pages/Contact';
import Wedding from '../pages/Wedding';
import Maternity from '../pages/Maternity';
import Layout from '../layout/Layout';
import Pricing from '../pages/Pricing';
import Studio from '../pages/Studio';
import Outdoor from '../pages/Outdoor';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
             
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
);

export default AppRoutes;
