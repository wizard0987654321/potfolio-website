import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import CV from './pages/CV.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
import Navigation from './Navigation.jsx'
import ErrorPage from './ErrorPage.jsx'


const routes = [
    {
        path: '/',
        element: <Navigation />,
        errorElement: <ErrorPage />,
        children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "cv", element: <CV /> },
        { path: "contact", element: <Contact /> },
        { path: "projects", element: <Projects /> }
        ]
    },
];

export default routes;