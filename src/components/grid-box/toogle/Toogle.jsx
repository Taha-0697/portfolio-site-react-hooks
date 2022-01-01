import "./toogle.scss";
import Sun from "../../../img/sun.png";
import Moon from "../../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../../context_api";

const Toogle = () => {
    const theme = useContext(ThemeContext);

    const handleMode = () => {
        theme.dispatch({
            type: "TOOGLE",
        });
    };

    return (
        <div className="t" style={{ backgroundColor: theme.state.darkmode ? "#222" : "#fff" }}>
            <img src={Sun} alt="" className="t-icon" />
            <img src={Moon} alt="" className="t-icon" />
            <button
                className="t-button"
                onClick={handleMode}
                style={{ left: theme.state.darkmode ? 0 : 25, backgroundColor: theme.state.darkmode ? "#fff" : "#222" }}></button>
        </div>
    );
};

export default Toogle;
