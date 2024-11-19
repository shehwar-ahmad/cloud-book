import AppTextField from "components/Base/AppTextfield";
import AppButton from "components/Base/AppButton";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { registerUser } from "services/auth";
import { toast } from "react-toastify";

const SignupForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validateOnChange: true,
    validateOnMount: true,
    validateOnBlur: true,
    validationSchema,
    onSubmit: () => {
      // Implement signup API logic here
      // localStorage.setItem("token", "toBeReplacedWithToken");
      // navigate("/dashboard");

      registerUser(formik.values.email, formik.values.password)
        .then((res) => {
          localStorage.setItem("token", res.accessToken);
          navigate("/dashboard");
          toast.success("Signup Successful");
        })
        .catch((err) => {
          toast.error("Failed to Signup");
        });
    },
  });

  return (
    <div className="w-full flex h-fit flex-col items-center gap-6">
      <p className="text-[22px] font-semibold leading-[33px] text-center">
        Create Your Account
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

        <div>
          <AppTextField
            placeholder="Confirm Password"
            className="h-[54px] rounded-[60px]"
            name="confirmPassword"
            type="password"
            value={formik.values.confirmPassword}
            onChange={(e) => {
              formik.handleChange(e);
              formik.setFieldTouched("confirmPassword", true, true);
            }}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-500 text-center mt-1 text-xs">
              {formik.errors.confirmPassword}
            </div>
          ) : null}
        </div>

        <AppButton
          className="h-[54px] rounded-[60px] w-full max-w-[280px] mx-auto"
          type="submit"
        >
          Sign Up
        </AppButton>
      </form>

      <p className="text-center text-sm font-normal leading-[23px] mt-3 text-tertiary-100">
        Already have an account?{" "}
        <strong
          className="underline underline-offset-1 text-tertiary cursor-pointer"
          onClick={() => {
            navigate("/login");
          }}
        >
          Sign In
        </strong>
      </p>
    </div>
  );
};

export default SignupForm;
