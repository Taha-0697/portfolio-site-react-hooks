import "./product.scss";
import { useContext } from "react";
import { ThemeContext } from "../../../context_api";

const Product = ({ img, link }) => {
    const theme = useContext(ThemeContext);

    return (
        <div className="p" style={{ border: theme.state.darkmode ? "2px solid rgb(67 65 65)" : "2px solid rgb(243, 242, 242)" }}>
            <div className="p-browser" style={{ backgroundColor: theme.state.darkmode ? "rgb(243,242,242)" : "rgb(67,65,67)" }}>
                <div className="p-circle" style={{ backgroundColor: theme.state.darkmode ? "rgb(67,65,67)" : "rgb(243,242,242)" }}></div>
                <div className="p-circle" style={{ backgroundColor: theme.state.darkmode ? "rgb(67,65,67)" : "rgb(243,242,242)" }}></div>
                <div className="p-circle" style={{ backgroundColor: theme.state.darkmode ? "rgb(67,65,67)" : "rgb(243,242,242)" }}></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
    );
};

export default Product;
