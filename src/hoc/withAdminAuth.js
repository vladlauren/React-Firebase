import useAdminAuth from "../CustomHooks/useAdminAuth";

const WithAdminAuth = (props) => useAdminAuth(props) && props.children;

export default WithAdminAuth;
