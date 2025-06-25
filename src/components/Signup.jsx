import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Button className="btn btn--blue w-full">
        <span>Try it free 7 days</span> then $20 per month
      </Button>
      <div className="card">
        <div className="card__container">
          <form className="mb-0" onSubmit={handleSubmit(onSubmit)}>
            <InputField
              className="w-full"
              placeholder="First Name"
              {...register("firstName", {
                required: "First Name cannot be empty",
              })}
            ></InputField>
            {errors.firstName && (
              <p className="text-color-red text-sm">
                {errors.firstName?.message}
              </p>
            )}
            <InputField
              className="w-full"
              placeholder="Last Name"
              {...register("lastName", {
                required: "Last Name cannot be empty",
              })}
            ></InputField>
            {errors.lastName && (
              <p className="text-color-red text-sm">
                {errors.lastName?.message}
              </p>
            )}
            <InputField
              className="w-full"
              placeholder="Email"
              {...register("email", {
                required: "Email cannot be empty",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Looks like this is not an email",
                },
              })}
            ></InputField>
            {errors.email && (
              <p className="text-color-red text-sm">{errors.email?.message}</p>
            )}
            <div className="mb-0">
              <InputField
                className="w-full "
                placeholder="Password"
                type="password"
                {...register("password", {
                  required: "Password cannot be empty",
                })}
              ></InputField>
              {errors.password && (
                <p className="text-color-red text-sm">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <Button className="btn btn--primary w-full">
              {isSubmitting ? "Submitting" : "CLIM YOUR FREE TRIAL"}
            </Button>
          </form>
          <p className="text-color-grey text-mini text-center">
            By clicking the button,you are accepting{" "}
            <span className="text-color-primary text-mini text-bold">
              Terms and condition
            </span>
          </p>
        </div>
      </div>
      {/* <form>
        <p>form</p>
        <InputField></InputField>
        <Button
          className="btn btn--primary"
          label="CLIM YOUR FREE TRIAL"
        ></Button>
      </form> */}
    </div>
  );
};

export default Signup;
