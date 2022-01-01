// FLex-box components imports
// import Intro from "./components/flex-box/intro/Intro";
// import About from "./components/flex-box/about/About";
// import ProductList from './components/flex-box/productList/ProductList';
// import Contact from "./components/flex-box/contact/Contact";

// grid-box components imports
import About from "./components/grid-box/about/About";
import Intro from "./components/grid-box/intro/Intro";
import ProductList from './components/grid-box/productList/ProductList';
import Contact from './components/grid-box/contact/Contact';

const App = () => {
    return (
        <div>
            <Intro />
            <About/>
            <ProductList/>
            <Contact/>
        </div>
    );
};

export default App;
