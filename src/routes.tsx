
import { BrowserRouter, Route, Routes as ReactRoutes, Outlet } from 'react-router-dom'; 
import Home from './pages/home';

const BaseLayout = () => {
    return (
        <div className="app-layout">
            <header className="app-header"></header>
            <main className="w-full min-w-[300px] md:min-w-[750px] lg:min-w-[1000px]">
                <Outlet /> {/* Render child routes here */}
            </main>
            <footer className="app-footer"><a href="https://github.com/ajones119/framer-motion-wokr-showcase">view on github</a></footer>
        </div>
    );
};

function Routes() {
  return (
    <BrowserRouter>
        <ReactRoutes>
        <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} /> {/* Default route */}
            <Route path="about" element={<div />} />
            </Route>
        </ReactRoutes>
    </BrowserRouter>
  );
}

export default Routes;