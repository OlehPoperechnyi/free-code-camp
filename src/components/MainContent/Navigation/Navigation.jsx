import style from "./Navigation.module.css"
import NavButton from "../../NavButton/NavButton";

const Navigation = () => {
    return <nav className={style.Navigation}>
            <NavButton text={"Random Quote Machine"} to={"/randomQuoteMachine"}/>
            <NavButton text={"Markdown Previewer"} to={"/markdownPreviewer"} />
            <NavButton text={"Drum Machine"} to={"/drumMachine"} disabled={"disabled"}/>
            <NavButton text={"JavaScript Calculator"} to={"/javaScriptCalculator"} disabled={"disabled"}/>
            <NavButton text={"25 + 5 Clock"} to={"/25plus5Clock"} disabled={"disabled"}/>
    </nav>
}

export default Navigation;