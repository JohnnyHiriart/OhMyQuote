import axios from "axios";
import { useEffect, useState } from "react";

const QuoteHome = () => {

    // variable qui contient toutes les quotes
    const [quoteDay, setQuoteDay] = useState([]);

    // au chargement, aller chercher une quote
    useEffect(() => {
        axios
          .get("https://favqs.com/api/qotd")
          .then((res) => res.data.quote)
          .then((data) => setQuoteDay(data))
          .catch((err) => console.log(err));
        }, []);
    
    return (
        <div>
            <p>{quoteDay.body}</p>
            <p>{quoteDay.author}</p>
        </div>
    )
}

export default QuoteHome;