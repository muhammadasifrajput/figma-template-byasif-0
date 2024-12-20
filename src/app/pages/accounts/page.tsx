import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import TextData from "@/app/Components/TextData";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <Image
          src="/assets/Images/account.png"
          alt=""
          width={1300}
          height={100}
          className="w-full max-w-[1300px] h-auto"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-8">
        {/* Log In Section */}
        <div className="flex flex-col m-10 md:m-20">
          <h1 className="text-xl md:text-2xl font-semibold">Log in</h1>
          <div className="flex flex-col my-6">
            <label htmlFor="">Username or email address</label>
            <input
              className="h-[40px] w-full max-w-[250px] border-2 my-2 rounded-md"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="">Password</label>
            <input
              className="h-[40px] w-full max-w-[250px] border-2 my-2 rounded-md"
              type="password"
              name=""
              id=""
            />
          </div>
          <div className="flex items-center">
            <input className="mr-2" type="checkbox" name="" id="" />
            <span>Remember me</span>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center mt-4">
            <button className="h-[40px] w-[150px] border-2 rounded-md">
              Log In
            </button>
            <span className="text-sm text-blue-600 cursor-pointer">
              Lost your password?
            </span>
          </div>
        </div>

        {/* Register Section */}
        <div className="flex flex-col m-10 md:m-20">
          <h1 className="text-xl md:text-2xl font-semibold">Register</h1>
          <div className="flex flex-col my-4">
            <label htmlFor="">Email address</label>
            <input
              className="h-[40px] w-full max-w-[250px] border-2 rounded-md"
              type="email"
              name=""
              id=""
            />
          </div>

          <div className="flex flex-col my-4 text-sm max-w-[300px]">
            <span>
              A link to set a new password will be sent to your email address.
            </span>
            <p className="mt-4">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </div>
          <div className="flex items-center mt-4">
            <button className="h-[40px] w-[150px] border-2 rounded-md">
              Register
            </button>
          </div>
        </div>
      </div>
      <TextData />
      <Footer />
    </div>
  );
};

export default page;
