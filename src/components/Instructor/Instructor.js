import "./instructor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookSquare,
  faTwitterSquare,
  faVimeoSquare,
} from "@fortawesome/free-brands-svg-icons";

//Instructor page component
const Instructor = ({ item }) => {
  //instructor state hook

  return (
    <div className="card m-2 p-4 hover-effects">
      <img src={item.img} className="card-img-top " alt="..." />
      <div className="card-body">
        <p className="card-title">
          <span className="fs-5"> {item.name}</span>, {item.profession}
        </p>
        <div className="d-flex justify-content-center">
          <FontAwesomeIcon
            icon={faFacebookSquare}
            size="2x"
            className="profile-icon"
          />
          <FontAwesomeIcon
            icon={faTwitterSquare}
            size="2x"
            className="profile-icon"
          />
          <FontAwesomeIcon
            icon={faVimeoSquare}
            size="2x"
            className="profile-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Instructor;
