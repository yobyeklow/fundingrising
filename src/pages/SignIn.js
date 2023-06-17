import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import ButtonGoogle from "../components/button/ButtonGoogle";
import FormGroup from "../components/reuseable/FormGroup";
import { Label } from "../components/label";
import { Input } from "../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useToggleValue from "../hooks/useToggle";
import { IconEyeToggle } from "../components/icons";
import { Button } from "../components/button";
const SignIn = () => {
  const schema = yup.object({
    email: yup
      .string()
      .required("This field is required")
      .email("Invalid email address"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });
  const handleSubmitValue = (value) => {
    console.log(value);
  };
  const { value: showPassword, handleToggleValue: handlePassword } =
    useToggleValue();
  return (
    <LayoutAuthentication heading="Welcome Back">
      <p className="text-neutral3 lg:mb-8 mb-6 text-lg font-medium text-center lg:text-sm">
        Don't have an account?{" "}
        <Link to="/sign-up" className="text-primary font-medium underline">
          Sign Up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with Google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSubmitValue)}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            control={control}
            name="email"
            errorMessage={errors.email?.message}
            placeholder="nvkhangcode@gmail.com"
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
        <span className="inline-block text-right mb-5 lg:mb-3 text-primary text-sm font-medium">
          Forgot password
        </span>
        <Button type="submit" classname="bg-primary text-white w-full">
          Log in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignIn;
