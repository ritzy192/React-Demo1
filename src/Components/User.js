import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const User = (props) => {
  const userData = {
    Name: props.userDetails.name,
    Age: props.userDetails.age,
    Gender: props.userDetails.gender,
  };
  return (
    <Card sx={{ minWidth: 100 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {userData.Name}
        </Typography>
        <Typography variant="h5" component="div">
          {userData.Age}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {userData.Gender}
        </Typography>
      </CardContent>
      <Divider light />
    </Card>
  );
};

export default User;
