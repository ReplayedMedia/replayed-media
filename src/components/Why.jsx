import founderImg from "../assets/profile-pictures/Me2.jpg"; 
import { steps, metrics } from "../constants";

const Why = () => (
  <section className="mt-20 px-4 lg:px-0">
    {/* Header */}
    <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide mb-10 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
      Why Choose{" "}
      <span className="bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
        Replayed Media
      </span>
    </h2>

    {/* Metrics */}
    <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto text-center mb-16">
      {metrics.map(({ label, value, icon }) => (
        <div key={label} className="flex flex-col items-center">
          <div className="text-green-500 mb-2">{icon}</div>
          <span className="text-2xl font-bold">{value}</span>
          <p className="text-neutral-400">{label}</p>
        </div>
      ))}
    </div>

    {/* Process Steps */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
      {steps.map(({ icon, title, description }) => (
        <div key={title} className="flex justify-center px-4">
          <div className="max-w-xs bg-neutral-900 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="text-cyan-400 mb-4">{icon}</div>
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-neutral-400">{description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Founder Spotlight */}
    <div className="mt-10 max-w-lg mx-auto text-center">
      <img
        src={founderImg}
        alt="Hanzalah Patel"
        className="h-24 w-24 rounded-full mx-auto mb-4 shadow-lg"
      />
      <h5 className="text-xl font-semibold text-cyan-400">Hanzalah Patel</h5>
      <p className="text-neutral-400 italic mb-4">
        Founder & CEO, Replayed Media
      </p>
      <p className="text-neutral-300">
        With a passion for bridging brands and creators, Hanzalah built
        Replayed Media to streamline authentic, UGC influencer campaigns that
        get the engagement Brands are looking for.
      </p>
    </div>
  </section>
);

export default Why;
