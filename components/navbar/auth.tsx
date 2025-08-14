import Link from "next/link";

const Auth = () => {
  return (
    <div>
      <Link href="/sign-in" className="text-xl">
        Log In/Register
      </Link>
    </div>
  );
};
export default Auth;
