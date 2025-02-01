import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative w-full h-[500px] bg-gradient-to-r from-blue-600 to-blue-400 overflow-hidden flex items-center">
      {/* ব্যাকগ্রাউন্ড শেপ */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-30 blur-xl"
        animate={{ x: [0, -10, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
        {/* হেডিং */}
        <h1 className="text-4xl font-bold leading-tight">Embrace the <br /> future of finance</h1>
        {/* সাবহেডিং */}
        <p className="mt-4 text-lg">
          Reimagine financial services with AnyTech’s open platform, <br />
          distributed banking solution that powers transformation
        </p>
        {/* CTA বাটন */}
        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition">
          Reach Out to Us »
        </button>
      </div>

      {/* ইমেজ */}
      <div className="">
      <motion.img
        src="https://thumbs.dreamstime.com/b/smiling-medical-doctor-woman-stethoscope-isolated-over-white-background-35552912.jpg" 
        alt="Finance Banner"
        className="absolute bottom-0 right-10 w-80 clip-custom"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      </div>
    </div>
  );
};

export default Banner;
