import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Label } from "../components/label";
import { Input } from "../components/Input";
import FormGroup from "../components/reuseable/FormGroup";
import { Button } from "../components/button";
import { Checkbox } from "../components/checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconEyeToggle } from "../components/icons";
import useToggleValue from "../hooks/useToggle";
import ButtonGoogle from "../components/button/ButtonGoogle";

const SignUp = () => {
  const schema = yup.object({
    name: yup
      .string()
      .required("This field is required")
      .min(7, "Minimum is 7 characters"),
    email: yup
      .string()
      .required("This field is required")
      .email("Invalid email address"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "Password must be 8 characters"),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const handleSignUp = (values) => {
    console.log(values);
  };
  const { value: acceptTerm, handleToggleValue: handleAcceptTerm } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handlePassword } =
    useToggleValue();
  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="dark:text-neutral3 lg:mb-8 mb-6 text-lg font-normal text-center lg:text-sm">
        Alreay have an account?{" "}
        <Link to="/sign-in" className="text-primary font-medium underline">
          Sign In
        </Link>
      </p>
      <ButtonGoogle text="Sign up with Google"></ButtonGoogle>
      <p className="dark:text-white text-center lg:mb-8 mb-4 text-darkSecondary text-xs lg:text-sm font-normal">
        or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name*</Label>
          <Input
            control={control}
            name="name"
            errorMessage={errors.name?.message}
            placeholder="Ngo Vi Khang"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email*</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="nvkhangcode@gmail.com"
            errorMessage={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password*</Label>
          <Input
            control={control}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            errorMessage={errors.password?.message}
          >
            <IconEyeToggle
              toggle={showPassword}
              onClick={handlePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex items-start gap-x-5 mb-5">
          <Checkbox checked={acceptTerm} onClick={handleAcceptTerm} name="term">
            <p className="font-normal text-xs lg:text-sm text-neutral2 flex-1">
              I agree to the{" "}
              <span className="text-secondary underline">Tearms of Use</span>{" "}
              and have read and understand the{" "}
              <span className="text-secondary underline">Privacy policy</span>
            </p>
          </Checkbox>
        </div>
        <Button type="submit" classname="bg-primary w-full text-white">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUp;
