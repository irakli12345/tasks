import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ onAdd, buttonToggle }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h2>Task Tracker</h2>
      {location.pathname === "/" && (
        <Button
          color={buttonToggle ? "red" : "green"}
          text={buttonToggle ? "Close" : "Add"}
          onClick={onAdd}
        ></Button>
      )}
    </header>
  );
};
Header.defaultProps = {
  title: "Good Morning America!",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
//const headerStyle = {
//    color: 'blue',
//    backgroundColor: 'yellow'
//}
export default Header;
