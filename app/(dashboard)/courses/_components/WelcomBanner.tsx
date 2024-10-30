import Image from "next/image";

const WelcomeBanner = () => {
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl p-5">
      <Image
        src="/boneka-viral.png"
        alt="labubu learn"
        width={100}
        height={100}
      />
      <div>
        <h2 className="font-bold text-[27px]">
          Welcome to <span className="text-primary">Labubu</span>Learn Academy
        </h2>
        <h2 className="text-gray-500">
          Learn from the best instructors around the world
        </h2>
      </div>
    </div>
  );
};
export default WelcomeBanner;