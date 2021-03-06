const TOKEN_KEY = "token";

const getToken = () => {
    localStorage.getItem(TOKEN_KEY);
};

const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
};

export {getToken, setToken}