import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";
import Coin from "./Coin";
import { Link } from "react-router-dom";

interface ICoin {
    id: string;
    name: string;
    symbol: string;
}

const Coins = () => {

    const { isLoading, data: coins } = useQuery({ queryKey: ["coins"], queryFn: fetchCoins })
    return (
        <>
            <div>
                {
                    isLoading === true ? 'isloading.....' : coins?.map((coin: ICoin) => {
                        return (
                            <>
                                <div
                                    key={coin.id}>
                                    <Link to={`/${coin.id}`}>
                                        <img src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`} />
                                        {coin.name}
                                    </Link >
                                </div>
                            </>
                        )
                    })

                }
            </div>
        </>
    );
};

export default Coins;