import style from "./MainContent.module.css"
import Navigation from "./Navigation/Navigation";
import {Route} from "react-router-dom";
import RandomQuoteMachineContainer from "./RandomQuoteMachine/RandomQuoteMachineContainer";
import MarkdownPreviewer from "./MarkdownPreviewer/MarkdownPreviewer";


const MainContent = () => {
    return <main className={style.MainContent}>
        <Route path="/randomQuoteMachine" render={ () => <RandomQuoteMachineContainer /> }/>
        <Route path="/markdownPreviewer" render={ () => <MarkdownPreviewer /> }/>
        <Route exact path="/" render={ () => <Navigation /> }/>
    </main>
}

export default MainContent;