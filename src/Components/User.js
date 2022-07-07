import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "./User.css";

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
  const userData = {
    name: props.userDetails.name,
    firstName: props.userDetails.firstName,
    lastName: props.userDetails.lastName,
    dob: calculate_age(props.userDetails.dob),
    gender: props.userDetails.gender,
  };
  return (
    <Card className="expense-item">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {userData.name}
        </Typography>
        <Typography variant="h5" component="div">
          {userData.dob}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {userData.gender}
        </Typography>
      </CardContent>
      <Divider light />
    </Card>
  );
};

export default User;
