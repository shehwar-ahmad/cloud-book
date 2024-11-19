import AppTextField from "components/Base/AppTextfield";
import AppButton from "components/Base/AppButton";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { login } from "services/auth";

const LoginForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: true,
    validateOnMount: true,
    validateOnBlur: true,
    validationSchema,
    onSubmit: () => {
      // login(formik.values.email, formik.values.password).then(() => {
      //   navigate("/dashboard");
      // }).catch((err) => {
      //   // Show error message
      // });

      localStorage.setItem("token", "toBeReplacedWithToken");
      navigate("/dashboard");
    },
  });

  return (
    <div className="w-full flex h-fit flex-col items-center gap-6">
      <p className="text-[22px] font-semibold leading-[33px] text-center">
        Sign In Or Register
      </p>

      <form
        onSubmit={formik.handleSubmit}
        className="max-w-[280px] mx-auto flex flex-col gap-[20px] mt-2"
      >
        <div>
          <AppTextField
            placeholder="Enter Email"
            className="h-[54px] rounded-[60px]"
            name="email"
            value={formik.values.email}
            onChange={(e) => {
              formik.handleChange(e);
              formik.setFieldTouched("email", true, true);
            }}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-center mt-1 text-xs">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div>
          <AppTextField
            placeholder="Enter Password"
            className="h-[54px] rounded-[60px]"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={(e) => {
              formik.handleChange(e);
              formik.setFieldTouched("password", true, true);
            }}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-center mt-1 text-xs">
              {formik.errors.password}
            </div>
          ) : null}
        </div>

        <p className="text-sm font-medium leading-[21px] text-center underline underline-offset-1">
          Forgot your password?
        </p>

        <AppButton
          className="h-[54px] rounded-[60px] w-full max-w-[280px] mx-auto"
          type="submit"
        >
          Login
        </AppButton>
      </form>

      <p className="text-center text-sm font-normal leading-[23px] mt-3 text-tertiary-100">
        Don’t have an account?{" "}
        <strong
          className="underline underline-offset-1 text-tertiary cursor-pointer"
          onClick={() => {
            navigate("/sign-up");
          }}
        >
          Sign Up
        </strong>
      </p>
    </div>
  );
};

export default LoginForm;
