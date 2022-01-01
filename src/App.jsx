import { useContext } from "react";
import { ThemeContext } from "./context_api";

// FLex-box components imports
// import Intro from "./components/flex-box/intro/Intro";
// import About from "./components/flex-box/about/About";
// import ProductList from './components/flex-box/productList/ProductList';
// import Contact from "./components/flex-box/contact/Contact";
// import Toogle from "./components/flex-box/toogle/Toogle";

// grid-box components imports
import About from "./components/grid-box/about/About";
import Intro from "./components/grid-box/intro/Intro";
import ProductList from "./components/grid-box/productList/ProductList";
import Contact from "./components/grid-box/contact/Contact";
import Toogle from "./components/grid-box/toogle/Toogle";

const App = () => {
    const theme = useContext(ThemeContext);
    const darktheme = theme.state.darkmode;

    return (
        <div style={{ background: darktheme ? "#222" : "white", color: darktheme ? "white" : "#222" }}>
            <Toogle />
            <Intro />
            <About />
            <ProductList />
            <Contact />
        </div>
    );
};

export default App;
