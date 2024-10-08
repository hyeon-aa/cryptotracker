import { createBrowserRouter } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Coins />,
        },
        {
            path: '/:coinId',
            element: <Coin />,
        }
    ]
)

export default Router;