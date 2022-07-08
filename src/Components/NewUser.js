import "./NewUser.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const NewUser = (props) => {
  var [userDetails, setUserDetails] = useState({
    id: Math.random(),
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
    phoneNumber: "",
  });

  const handleFirstNameChange = (event) => {
    setUserDetails(() => {
      return { ...userDetails, firstName: event.target.value };
    });
  };
  const handleLastNameChange = (event) => {
    setUserDetails(() => {
      return {
        ...userDetails,
        lastName: event.target.value,
        name: userDetails.firstName + " " + event.target.value,
      };
    });
  };
  const handleEmailChange = (event) => {
    setUserDetails(() => {
      return { ...userDetails, email: event.target.value };
    });
  };
  const handleDOBChange = (event) => {
    setUserDetails(() => {
      return { ...userDetails, dob: event.target.value };
    });
  };
  const handlePhoneNumberChange = (event) => {
    setUserDetails(() => {
      return { ...userDetails, phoneNumber: event.target.value };
    });
  };

  const handleGenderChange = (event) => {
    setUserDetails(() => {
      return {
        ...userDetails,
        gender: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userDetails);
    // setUserDetails(() => {
    //   return {
    //     name: userDetails.firstName + " " + userDetails.lastName,
    //     id: Math.random(),
    //     ...userDetails,
    //   };
    // });
    console.log("2");
    console.log(userDetails);
    props.getUser(userDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-user">
        <TextField
          label="First Name"
          variant="outlined"
          onChange={handleFirstNameChange}
          required
        />
        <TextField
          label="Last Name"
          variant="outlined"
          onChange={handleLastNameChange}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          type={"email"}
          onChange={handleEmailChange}
          //required
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          label="DOB"
          variant="outlined"
          type={"date"}
          //required
          onChange={handleDOBChange}
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          label="Phone Number"
          variant="outlined"
          type={"tel"}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          //required
          onChange={handlePhoneNumberChange}
        />
        <TextField
          onChange={handleGenderChange}
          select
          label="Gender"
          value={userDetails.gender ?? ""}
          //required
        >
          <MenuItem key={1} value="Male">
            Male
          </MenuItem>
          <MenuItem key={2} value="Female">
            Female
          </MenuItem>
          <MenuItem key={3} value="Other">
            Other
          </MenuItem>
        </TextField>
        <Button variant="contained" type="submit">
          Add User
        </Button>
      </div>
    </form>
  );
};

export default NewUser;
