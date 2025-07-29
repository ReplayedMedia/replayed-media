import { CheckCircle2 } from "lucide-react";
import contentImg from "../assets/content.jpg";
import dataImg    from "../assets/data.jpg";
import scrollImg  from "../assets/scroll.jpeg";
import { checklistItems } from "../constants";

const How = () => (
  <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
    <div className="mt-20 px-4">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
          Ad Campaigns
        </span>
      </h2>
      
      <div className="mt-12 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        {/* 3D collage container */}
        <div
          className="w-full md:w-1/2 relative h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] flex justify-center items-center mx-auto"
          style={{ perspective: "1200px" }}
        >
          <div className="relative w-full h-full max-w-md">
            {/* Back image */}
            <img
              src={contentImg}
              alt=""
              className="absolute top-[10%] left-[50%] w-[55%] sm:w-[60%] md:w-[65%] rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg opacity-75 object-cover"
              style={{
                transform: "translateX(-25%) translateZ(-20px) rotateY(6deg)",
                zIndex: 10,
              }}
            />
            {/* Middle image */}
            <img
              src={dataImg}
              alt=""
              className="absolute top-[35%] left-[50%] w-[55%] sm:w-[60%] md:w-[65%] rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg opacity-75 object-cover"
              style={{
                transform: "translateX(-75%) translateZ(-10px) rotateY(-6deg)",
                zIndex: 20,
              }}
            />
            {/* Front image */}
            <img
              src={scrollImg}
              alt=""
              className="absolute bottom-[10%] left-[50%] w-[55%] sm:w-[60%] md:w-[65%] rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg opacity-75 object-cover"
              style={{
                transform: "translateX(-35%) translateZ(0px) rotateY(12deg)",
                zIndex: 30,
              }}
            />
          </div>
        </div>

        <div className="pt-6 w-full md:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-8 md:mb-12">
              <div className="text-green-400 mx-4 md:mx-6 bg-neutral-900 h-8 w-8 md:h-10 md:w-10 p-1.5 md:p-2 flex justify-center items-center rounded-full flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h5
                  className="
                    mt-0.5 md:mt-1 mb-2 
                    text-lg md:text-xl
                    bg-gradient-to-r from-white to-cyan-400
                    bg-clip-text text-transparent
                  "
                >
                  {item.title}
                </h5>
                <p className="text-sm md:text-md text-neutral-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default How;
