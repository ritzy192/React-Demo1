import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import "./User.css";
import Card from "./Card";

const User = (props) => {
  const calculate_age = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1); // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    console.log(age_now);
    return age_now;
  };
  const handleDelete = () => {
    props.onDelete(userData.id);
  };
  const userData = {
    id: props.userDetails.id,
    name: props.userDetails.name,
    firstName: props.userDetails.firstName,
    lastName: props.userDetails.lastName,
    age: calculate_age(props.userDetails.dob),
    dob: props.userDetails.dob,
    gender: props.userDetails.gender,
    phoneNumber: props.userDetails.phoneNumber,
    email: props.userDetails.email,
  };

  return (
    <Card className="user-item">
      <div className="user-item__description">
        <div>{userData.gender === "Male" ? <MaleIcon /> : <FemaleIcon />}</div>
        <div>{userData.name}</div>
        <div>
          <h2>{userData.age}</h2>
        </div>
        <div>{userData.email}</div>
        <div>{userData.phoneNumber}</div>
        <div>
          <DeleteForeverRoundedIcon onClick={handleDelete} />
        </div>
      </div>
    </Card>
  );
};

export default User;
