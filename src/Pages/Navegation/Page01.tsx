import { useNavigate } from "react-router-dom";

export default function Page01() {
  const _navigate = useNavigate();

  return (
    <div>
      <h1>Page 01</h1>
      <button onClick={() => _navigate("/")}>Navegar</button>
    </div>
  )
}
