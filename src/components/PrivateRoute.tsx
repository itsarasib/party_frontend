import { Navigate } from "react-router-dom";

interface Props {
  element: JSX.Element;
}

const PrivateRoute: React.FC<Props> = ({ element }) => {
  const token = localStorage.getItem("token");
  return <>{token ? element : <Navigate to="/login" />}</>;
};
export default PrivateRoute;
