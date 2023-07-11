import Header from "./component/Header";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./component/Home";
import Footer from "./component/Footer";
import Contact from  "./component/Contact";
import Services from "./component/Services";

import "./Style/App.scss"
import "./Style/header.scss"
import "./Style/home.scss"
import "./Style/footer.scss"
import "./Style/contact.scss"
import "./Style/mediaquery.scss"

const App = () =>{
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;