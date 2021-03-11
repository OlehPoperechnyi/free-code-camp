import style from "./RandomQuoteMachine.module.css"
import NavButton from "../../NavButton/NavButton";

const RandomQuoteMachine = ({quote, author, textColor, backgroundColor, newQuote}) => {

    return <section id={"wrapper"}
                    style={backgroundColor}
                    className={style.wrapper}>

        <div className={style.RandomQuoteMachine__goBack}>
            <NavButton text={"Back"} to={"/"}/>
        </div>

        <article className={style.RandomQuoteMachine} id={"quote-box"}>
            <span id={"text"}
                  style={textColor}
                  className={style.RandomQuoteMachine__textQuot}>
                <p>{quote}</p>
            </span>
            <span id={"author"}
                  style={textColor}
                  className={style.RandomQuoteMachine__author}>
                {author}
            </span>
            <button id={"new-quote"}
                    style={backgroundColor}
                    className={`${style.RandomQuoteMachine__newQuote}`}
                    onClick={newQuote}>
                New quote
            </button>
            <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
                encodeURIComponent('"' + quote + '" ' + author)
            }
               id="tweet-quote"
               style={backgroundColor}
               className={style.RandomQuoteMachine__tweetQuote}>T</a>
        </article>
    </section>
}

export default RandomQuoteMachine;