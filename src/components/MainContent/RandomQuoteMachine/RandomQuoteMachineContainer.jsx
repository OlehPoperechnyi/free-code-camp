import RandomQuoteMachine from "./RandomQuoteMachine";

const RandomQuoteMachineContainer = (props) => {

    const getQuotes = (setQuotes) => {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setQuotes(data.quotes);
            });
    };

    let quotes = [];
    const setQuotes = (value) => {
        quotes = [...value];
    }

    getQuotes(setQuotes);
    const lengthQuotes = quotes.length;
    console.log(quotes);
    const getRandomIndex = (maxValue) => Math.floor(Math.random() * Math.floor(maxValue));
    let index = getRandomIndex(lengthQuotes);

    //const [quote, setQuote] = useState({});


    //setInterval(() => setQuote(quotes[getRandomIndex(quotes)]), 5000);

    return <RandomQuoteMachine quote={""} author={""}/>
}

export default RandomQuoteMachineContainer;