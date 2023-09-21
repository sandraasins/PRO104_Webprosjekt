const LoginModule = (function() {
    const loginInfo = {
        username: "admin",
        password: "hotwings"
    }

    const getLoginInfo = () => loginInfo;

    return {
        getLoginInfo
    }
})();

export default LoginModule;