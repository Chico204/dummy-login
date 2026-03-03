import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <div className="dashboard">
      <h1>Welcome to your Dashboard</h1>
      <>
       {!!user && (<h1>Hello, {user.name}!</h1>)}
      </>
    </div>
  )
}