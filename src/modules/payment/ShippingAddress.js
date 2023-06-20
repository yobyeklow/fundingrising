import React, { Fragment, useState } from "react";
import { Label } from "../../components/label";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import FormRow from "../../components/reuseable/FormRow";
import FormGroup from "../../components/reuseable/FormGroup";
import { Dropdown } from "../../components/dropdown";
import { Checkbox } from "../../components/checkbox";

const ShippingAddress = () => {
  const [acceptTerm, setAcceptTerm] = useState(false);
  const handleAcceptTerm = () => {
    setAcceptTerm(!acceptTerm);
  };
  const { handleSubmit, control } = useForm({});
  return (
    <Fragment>
      <form>
        <FormRow>
          <FormGroup>
            <Label
              htmlFor="firstname"
              className="text-neutral2 font-medium text-sm"
            >
              First Name*
            </Label>
            <Input
              control={control}
              name="firstname"
              placeholder="Khang"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label
              htmlFor="lastname"
              className="text-neutral2 font-medium text-sm"
            >
              Last Name*
            </Label>
            <Input control={control} name="lastname" placeholder="Ngo"></Input>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label name="country" className="text-neutral2 font-medium text-sm">
            Country *
          </Label>
          <Dropdown>
            <Dropdown.Select placeholder="Select a country"></Dropdown.Select>
            <Dropdown.List>
              <Dropdown.Option>Viet Nam</Dropdown.Option>
              <Dropdown.Option>Korea</Dropdown.Option>
              <Dropdown.Option>Japan</Dropdown.Option>
              <Dropdown.Option>USA</Dropdown.Option>
            </Dropdown.List>
          </Dropdown>
        </FormGroup>
        <FormRow>
          <FormGroup>
            <Label
              htmlFor="address"
              className="text-neutral2 font-medium text-sm"
            >
              Street Address*{" "}
            </Label>
            <Input
              name="address"
              placeholder="165 KDC"
              control={control}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="city" className="text-neutral2 font-medium text-sm">
              City*
            </Label>
            <Input name="city" placeholder="Can Tho" control={control}></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="code" className="text-neutral2 font-medium text-sm">
              Postal Code*{" "}
            </Label>
            <Input name="code" placeholder="192000" control={control}></Input>
          </FormGroup>
          <FormGroup>
            <Label
              htmlFor="phonenumber"
              className="text-neutral2 font-medium text-sm"
            >
              Phone Number*
            </Label>
            <Input
              name="phonenumber"
              placeholder="+84 123456789"
              control={control}
            ></Input>
          </FormGroup>
        </FormRow>
        <div className="flex items-center  gap-x-5">
          <Checkbox
            name="term"
            checked={acceptTerm}
            onClick={handleAcceptTerm}
          ></Checkbox>
          <p className="text-neutral2 text-sm">
            Remember this address for next time use
          </p>
        </div>
      </form>
    </Fragment>
  );
};

export default ShippingAddress;
