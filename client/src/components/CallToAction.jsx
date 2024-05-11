import { Button } from "flowbite-react";

export default function CallToAction() {
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
  const handleClick = (e) => {
    e.preventDefault();
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${adminEmail}`,
      "_blank"
    );
  };

  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center gap-5">
      <div className="flex-1 justify-center flex flex-col pl-5">
        <h2 className="text-2xl">Request to Become an Admin!</h2>
        <p className="text-gray-500 my-2">Becoming an admin unlocks many features like you can write your own posts, see the statistics about those posts, delete your posts and comments, etc. </p>
        <Button gradientDuoTone='purpleToPink' onClick={handleClick} className="mt-3">Request</Button>
      </div>
      <div className="flex-1 flex p-7">
        <img src="https://www.shutterstock.com/image-vector/notification-lock-password-on-screen-600nw-1252573717.jpg" className="w-80 rounded-lg mx-auto" />
      </div>
    </div>
  );
}
