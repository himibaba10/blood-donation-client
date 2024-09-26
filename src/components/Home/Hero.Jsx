import hero_image from "../../../public/blood_donation.jpg";
const Hero = () => {
  return (
    <div className="relative">
      <img
        src={hero_image}
        alt="Blood donation"
        className="w-full h-auto rounded-lg shadow-lg"
      />
      <div className=" absolute bottom-28 lg:bottom-80 left-4 lg:left-28">
        <button className=" text-sm  lg:font-semibold px-2 lg:px-6 lg:py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white transition duration-300">
          Register as Donor
        </button>
      </div>
    </div>
  );
};

export default Hero;
