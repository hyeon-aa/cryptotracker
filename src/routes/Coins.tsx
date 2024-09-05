import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";
import Coin from "./Coin";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

interface ICoin {
    id: string;
    name: string;
    symbol: string;
}
// const Coin = styled.div`
//     display: flex;
//     align-items: center;
//     padding: 10px;
//     border: 1px solid #ddd;
//     margin-bottom: 5px;
// `;

const Coins = () => {


    const { isLoading, data: coins } = useQuery({ queryKey: ["coins"], queryFn: fetchCoins })

    console.log('coins', coins)
    return (
        <div>
            {
                isLoading === true ? 'isloading.....' : coins?.map((coin: ICoin) => {
                    return (
                        <Coin
                            key={coin.id}>
                            <Link to='/:coinId'>
                                <img src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`} />
                                {coin.name}
                            </Link >
                        </Coin>
                    )
                })

            }
        </div>
    );
};

export default Coins;