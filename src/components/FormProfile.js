import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const ProfileSettings = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    mobile: "",
    address: "",
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <FormGroup>
        <Label for="fullName">Full Name</Label>
        <Input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Enter your full name"
          value={form.fullName}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone</Label>
        <Input
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter your phone number"
          value={form.phone}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="mobile">Mobile</Label>
        <Input
          type="text"
          name="mobile"
          id="mobile"
          placeholder="Enter your mobile number"
          value={form.mobile}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input
          type="text"
          name="address"
          id="address"
          placeholder="Enter your address"
          value={form.address}
          onChange={handleInputChange}
        />
      </FormGroup>
      <Button>Save Changes</Button>
    </Form>
  );
};

export default ProfileSettings;
