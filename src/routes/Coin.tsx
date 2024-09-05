import { Link, useParams } from "react-router-dom";

const Coin = (props) => {

    const params = useParams();
    console.log('params', params)
    return (
        <div>
            {/* {props.id} */}
        </div>
    );
};

export default Coin;