import { useNavigate, useLocation } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const error = location.state && location.state.error;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error ? error.statusText || error.message : "Unknown error"}</i>
      </p>
      <a onClick={() => navigate("/")}>
        <span>Back to home</span>
      </a>
    </div>
  );
}
