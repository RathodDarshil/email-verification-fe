import axios from "axios";
import "../styles/globals.css";

axios.interceptors.request.use(
    function (request) {
        if (typeof window !== "undefined") {
            console.log(typeof window);
            const bearerToken = localStorage?.getItem("token");
            if (bearerToken) {
                request.headers.Authorization = `bearer ${bearerToken}`;
            }
            request.headers["Content-Type"] = "application/json";
            return request;
        } else {
            return request;
        }
    },

    function (error) {
        if (typeof window !== "undefined") {
            return Promise.reject(error);
        } else {
            return request;
        }
    }
);

axios.defaults.baseURL =
    process.env.NODE_ENV == "production"
        ? process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL
        : process.env.NEXT_PUBLIC_DEV_BASE_URL;

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
