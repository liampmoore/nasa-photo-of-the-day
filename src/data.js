import Axios from "axios";
import { useEffect } from "react";

function Data(props) {
    useEffect(() => {
        Axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' + props.date)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }, [props.date])
}

export default Data;