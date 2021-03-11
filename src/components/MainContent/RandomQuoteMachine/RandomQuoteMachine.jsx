import style from "./RandomQuoteMachine.module.css"
import NavButton from "../../NavButton/NavButton";

const RandomQuoteMachine = ({quote, author}) => {

    return <section id={"wrapper"} className={style.wrapper}>
        <div className={style.RandomQuoteMachine__goBack}>
            <NavButton text={"Back"} to={"/"}/>
        </div>
        <article className={style.RandomQuoteMachine} id={"quote-box"}>
            <span id={"text"} className={style.RandomQuoteMachine__textQuot}>
                <p>{quote}</p>
            </span>
            <div id={"author"} className={style.RandomQuoteMachine__author}>
                {author}
            </div>
            <button id={"new-quote"} className={`${style.RandomQuoteMachine__newQuote} btn btn-success`}>
                new-quote
            </button>
            <a href={"https://twitter.com/intent/tweet"} id="tweet-quote"
               className={style.RandomQuoteMachine__tweetQuote}>tweet-quote</a>
        </article>
    </section>
}

export default RandomQuoteMachine;