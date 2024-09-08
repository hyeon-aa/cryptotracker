import { useParams } from 'react-router-dom';

const Coin = () => {
    const { coinId } = useParams();
    console.log('params', coinId)
    return (
        <div>

        </div>
    );
};

export default Coin;