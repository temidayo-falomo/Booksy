import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Leftbar from "../../components/leftbar/Leftbar";
import MyDashboard from "../../components/my-dashboard/MyDashboard";
import RightBar from "../../components/rightbar/RightBar";
import { AppContext } from "../../helper/Context";
import { StyledDashboard } from "./Dashboard.styled";

function Dashboard() {
  const { isAuth, setSubject } = useContext(AppContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/signin");
    }
  }, []);

  useEffect(() => {
    setSubject("Action");
  }, []);

  return (
    <StyledDashboard>
      <Leftbar />
      <MyDashboard />
      <RightBar />
    </StyledDashboard>
  );
}

export default Dashboard;
