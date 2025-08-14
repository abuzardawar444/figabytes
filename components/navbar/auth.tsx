import Link from "next/link";

const Auth = () => {
  return (
    <div className="md:flex hidden">
      <Link href="/sign-in" className="text-xl">
        Log In/Register
      </Link>
    </div>
  );
};
export default Auth;
