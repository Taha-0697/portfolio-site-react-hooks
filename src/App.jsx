//import Intro from "./components/flex-box/intro/Intro";
//import About from "./components/flex-box/about/About";
//import ProductList from './components/flex-box/productList/ProductList';

import About from "./components/grid-box/about/About";
import Intro from "./components/grid-box/intro/Intro";
import ProductList from './components/grid-box/productList/ProductList';

const App = () => {
    return (
        <div>
            <Intro />
            <About/>
            <ProductList/>
        </div>
    );
};

export default App;
