import { useEffect, useState } from "react";
import { CheckCircle2, Zap, Target, Users, X } from "lucide-react";
import joiner from "../assets/joiner.png";
// import avatar from "../assets/avatar.png"; // your profile photo

const Immediate = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const popupClosed = sessionStorage.getItem("immediate-popup");
    if (!popupClosed) {
      setIsOpen(true);
    }
  }, []);

  const closePopup = () => {
    sessionStorage.setItem("immediate-popup", "closed");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/60 backdrop-blur-md animate-fadeIn p-3 sm:p-4">
      {/* Local keyframes: float (existing) + shake (new, fires once every 1s) */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes shake {
          0%, 92%, 100% { transform: rotate(0deg) translateX(0); }
          93% { transform: rotate(-3deg) translateX(-2px); }
          94% { transform: rotate(3deg) translateX(2px); }
          95% { transform: rotate(-3deg) translateX(-2px); }
          96% { transform: rotate(3deg) translateX(2px); }
          97% { transform: rotate(-2deg) translateX(-1px); }
          98%, 100% { transform: rotate(0deg) translateX(0); }
        }
      `}</style>

      <div
        className="
          relative
          w-full max-w-[95vw] sm:max-w-lg md:max-w-3xl lg:max-w-4xl
          max-h-[92vh]
          overflow-y-auto
          rounded-2xl sm:rounded-3xl
          bg-white
          p-5 sm:p-8 md:p-10
          border border-white/10
          shadow-[0_25px_80px_rgba(0,0,0,0.3)]
        "
      >
        {/* Close button */}
        <button
          onClick={closePopup}
          aria-label="Close"
          className="
            absolute top-3 right-3 sm:top-4 sm:right-4
            h-8 w-8 flex items-center justify-center
            rounded-full bg-gray-100 text-gray-500
            hover:bg-gray-200 hover:text-gray-700
            transition
          "
        >
          <X className="h-4 w-4" />
        </button>

        {/* Top grid: avatar/illustration on left, status/copy on right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">

          {/* LEFT: profile header + illustration */}
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              {/* <img
                src={avatar}
                alt="Shivam Agrawal"
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full border-2 border-blue-400 object-cover"
              /> */}
              <div>
                <p className="font-bold tracking-wide text-gray-900 leading-tight text-sm sm:text-base">
                  SHIVAM AGRAWAL
                </p>
                <p className="text-xs sm:text-sm text-gray-500">Frontend Engineer</p>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={joiner}
                alt="Immediate Joiner"
                className="w-[160px] sm:w-[220px] md:w-[260px] lg:w-[280px] object-contain drop-shadow-2xl"
                style={{
                  animation: "float 4s ease-in-out infinite, shake 1s ease-in-out infinite",
                }}
              />
            </div>
          </div>

          {/* RIGHT: status + hire copy */}
          <div>
            <p className="flex flex-wrap items-center gap-2 font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
              AVAILABLE FOR IMMEDIATE JOINING
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 fill-blue-500 text-white shrink-0" strokeWidth={2.5} />
            </p>

            {/* Status pill — dot pulses continuously */}
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 rounded-full bg-green-100 pl-3 sm:pl-4 pr-2 py-1.5 sm:py-2 mb-5 sm:mb-6">
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-green-500"></span>
              </span>
              <span className="font-bold text-gray-900 text-xs sm:text-sm md:text-base">
                STATUS: <span className="text-green-600">ACTIVE</span> &
              </span>
              <span className="rounded-full bg-green-600 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 sm:py-1.5">
                READY
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-3">
              HIRE NOW
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7 mb-5 sm:mb-6">
              I am a proactive Frontend Engineer based in Bangalore, actively
              seeking a new role and ready to join your team{" "}
              <span className="italic font-medium">immediately</span>. Let's connect!
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={closePopup}
                className="
                  flex items-center justify-center gap-2
                  w-full sm:w-auto
                  rounded-full
                  bg-orange-500
                  px-5 sm:px-6 py-3 sm:py-3.5
                  text-white
                  text-sm sm:text-base
                  font-bold
                  shadow-[0_10px_30px_rgba(249,115,22,0.4)]
                  transition duration-300
                  hover:scale-105 hover:bg-orange-600
                  active:scale-95
                "
              >
                LET'S WORK TOGETHER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Immediate;