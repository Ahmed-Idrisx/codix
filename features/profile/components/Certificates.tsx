import { FiAward } from "react-icons/fi";

const Certificates = () => {
  return (
    <div className="rounded-3xl border border-gray-100 bg-gray-100 p-6 shadow-sm sm:p-8">
      <div className="mb-6 border-b border-gray-200/60 pb-5">
        <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">شهاداتي</h2>
      </div>

      <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
        <FiAward className="mx-auto mb-4 h-12 w-12 text-gray-300" />

        <h3 className="mb-2 text-lg font-bold text-gray-700">
          لا توجد شهادات حتى الآن
        </h3>

        <p className="text-sm text-gray-400">
          الشهادات التي تحصل عليها بعد إتمام الكورسات ستظهر هنا.
        </p>
      </div>
    </div>
  );
};

export default Certificates;
