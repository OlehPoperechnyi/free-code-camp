import style from './App.module.css';
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={style.App}>
      <Header className={style.App__header}/>
      <MainContent className={style.App__mainContent}/>
      <Footer className={style.App__footer}/>
    </div>
  );
}

export default App;
