import { features } from "../constants";

const About = () => (
  <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
    <div className="text-center">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl mt-5 sm:mt-10 tracking-wide bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
        About Us &{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
          What We Do
        </span>
      </h2>
    </div>

    <div className="flex flex-wrap mt-10 lg:mt-20">
      {features.map((feature, index) => (
        <div
          key={index}
          className="
            w-full sm:w-1/2 lg:w-1/3
            flex justify-center
            px-4 mb-8
          "
        >
          <div className="max-w-md bg-neutral-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="flex h-12 w-12 mb-4 bg-neutral-800 text-cyan-400 justify-center items-center rounded-full">
              {feature.icon}
            </div>
            <h5 className="mb-4 text-xl font-semibold">{feature.text}</h5>
            <p className="text-neutral-500">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default About;
