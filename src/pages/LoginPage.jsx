import AppLayout from "components/Layout/AppLayout";
import LoginForm from "components/Forms/LoginForm";

const LoginPage = () => {
  return (
    <AppLayout>
      <div className="app-card bg-white border-none max-h-fit !h-fit max-w-[350px]">
        <LoginForm />
      </div>
    </AppLayout>
  );
};

export default LoginPage;
