import AuthLayout from "../../components/layouts/AuthLayout";
import LoginForm from "../../components/organisms/LoginForm";

export const metadata = {
  title: "Logowanie | Seller Dashboard",
};

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
