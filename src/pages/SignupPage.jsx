import AppLayout from "components/Layout/AppLayout";
import SignupForm from "components/Forms/SignupForm";

const SignupPage = () => {
  return (
    <AppLayout>
      <div className="app-card bg-white border-none max-h-fit !h-fit max-w-[350px]">
        <SignupForm />
      </div>
    </AppLayout>
  );
};

export default SignupPage;
