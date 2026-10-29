import { Link } from "react-router";

const DefaultProfile = () => {
  return (
    <ul>
      <li>
        <Link to="popeye">Popeye</Link>
      </li>
      <li>
        <Link to="spinach">Spinach</Link>
      </li>
    </ul>
  );
};

export default DefaultProfile;
