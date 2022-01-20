import { Container } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import Header from "../../components/Header/Header";
import About from "./about/about";
import Achievements from "./achievements/achievements";
import Book from "./book/book";
import Hero from "./Hero/Hero";
import Reviews from "./reviews/reviews";
import Sample from "./sample/sample";
import Services from "./services/services";
import Snag from "./snag/snag";
import Tools from "./Tools/Tools";

const Home = () => {
    return ( 
        <>
            <Header home={true}/>
            <Hero/>
            <Snag/>
            <Container>
                <Services id="services"/>
                <Tools/>
            </Container>
            <Book/>
            <Container fluid>
                <About id="about"/>
            </Container>
            <Container fluid>
            <Achievements/>
            </Container>
            <Reviews/>
            <Container>
                <Sample/>
            </Container>
            <Footer/>
        </>
     );
}
 
export default Home;