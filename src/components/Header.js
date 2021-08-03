import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ onAdd, buttonToggle }) => {
  return (
    <header className="header">
      <h2>Task Tracker</h2>
      <Button
        color={buttonToggle ? "red" : "green"}
        text={buttonToggle ? "Close" : "Add"}
        onClick={onAdd}
      ></Button>
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
