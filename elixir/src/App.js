import Home from "./pages/Home/Home";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Services from "./pages/services/services";
import Faq from "./pages/faq/faq";
import Blog from "./pages/blog/blog";

function App() {
    return ( 
    < div className = "App" >
            <Router>
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/services/*" element={<Services/>}></Route>
                <Route path="/faq" element={<Faq/>}></Route>
                <Route path="/blog" element={<Blog/>}></Route>
              </Routes>
            </Router>
        </div>
    );
}

export default App;