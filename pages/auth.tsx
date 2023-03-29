import Input from "@/components/input";
import { useCallback, useState } from "react";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [variant, setVariant] = useState("signin");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "signin" ? "signup" : "signin"
    );
  }, []);
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')]  bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black  w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center ">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full ">
            <h2 className="text-white text-4xl mb-8 font-semibold ">
              {variant === "signin" ? "Sign In" : "Sign Up "}
            </h2>
            <div className="flex flex-col gap-4 ">
              {variant === "signup" && (
                <Input
                  label="Username"
                  id="name"
                  value={name}
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                />
              )}

              <Input
                label="Email"
                id="email"
                type="email"
                value={email}
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                label="Password"
                id="password"
                type="password"
                value={password}
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === "signin" ? "Sign In" : "Sign Up "}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === "signin"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "signin" ? "Create an account" : "Sign In"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
