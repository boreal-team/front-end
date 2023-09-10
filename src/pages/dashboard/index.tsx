import NavbarComponent from "../../components/Navbar";
import "./styles.css";

import Stage1 from "../../components/Stages/Stage1";
import { useGeneral } from "../../context/GeneralContext";
import Stage2 from "../../components/Stages/Stage2";
import Stage3 from "../../components/Stages/Stage3";
import Stage4 from "../../components/Stages/Stage4";

const Dashboard = () => {
  const { stage } = useGeneral();
  return (
    <div className="max-w-1024">
      <NavbarComponent />
      {stage == 0 && <Stage1 />}
      {stage == 1 && <Stage2 />}
      {stage == 2 && <Stage3 />}
      {stage == 3 && <Stage4 />}
    </div>
  );
};

export default Dashboard;
