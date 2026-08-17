import Image from "next/image";

const AboutSection = () => {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-350 py-15 px-5 sm:px-8">
          <div className="grid grid-cols-12 gap-6 items-start">
            {/* Section Title */}
            <div className="col-span-12 md:mb-4">
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-center leading-[1.4] lg:leading-[1.3]">
                ماذا عن{" "}
                <span className="relative inline-block pb-5">
                  إيراسوفت
                  <span className="absolute bottom-0 left-0 right-0">
                    <div className="flex justify-center">
                      <svg
                        width="120"
                        height="18"
                        viewBox="0 0 320 60"
                        fill="none"
                      >
                        <path
                          d="M10 40 Q160 5 310 50"
                          stroke="#2243A4"
                          strokeWidth="6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </span>
                </span>
              </h2>
            </div>

            {/* Text */}
            <div className="col-span-12 lg:col-span-8 space-y-2 lg:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 leading-[1.4] lg:leading-[1.3]">
                عن{" "}
                <span className="relative inline-block pb-5">
                  إيراسوفت
                  <span className="absolute bottom-0 left-0 right-0">
                    <div className="flex justify-center">
                      <svg
                        width="120"
                        height="18"
                        viewBox="0 0 320 60"
                        fill="none"
                      >
                        <path
                          d="M10 40 Q160 5 310 50"
                          stroke="#2243A4"
                          strokeWidth="6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </span>
                </span>
              </h3>

              <p className="text-base sm:text-lg md:text-xl leading-8 lg:leading-9 text-gray-500">
                إيراسوفت هي شركة متخصصة في تقديم الحلول البرمجية المتقدمة
                والتدريب التقني الاحترافي، تأسست بهدف تمكين الأفراد والشركات من
                مواكبة التطور السريع في مجالات البرمجة وعلوم الحاسوب. نعتمد في
                إيراسوفت على رؤية واضحة تقوم على أن التجربة العملية هي الأساس
                الحقيقي للاحتراف، لذلك نحرص على تقديم برامج تدريبية وتطويرية
                تعتمد على التطبيق الفعلي، بما يساهم في إعداد كوادر مؤهلة وقادرة
                على المنافسة بقوة في سوق العمل.
              </p>
            </div>
            {/* Images */}
            <div className="col-span-12 lg:col-span-4 w-full h-full min-h-62.5 relative">
              <Image
                src="/about_erasoft.webp"
                alt="فريق إيراسوفت"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OFFICIAL ACCREDITATION */}
      <section className="bg-white">
        <div className="mx-auto max-w-350 pb-0 md:pb-15 px-5 sm:px-8">
          <div className="grid grid-cols-12 gap-6 items-start">
            {/* Text */}
            <div className="col-span-12 lg:col-span-8 space-y-3">
              <span className="inline-block text-blue-800 font-semibold text-sm sm:text-base tracking-wider">
                اعتماد رسمي موثق
              </span>

              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.4] lg:leading-[1.3]">
                نحن معتمدون من{" "}
                <span className=" text-blue-800 relative inline-block pb-5">
                  نقابة المهندسين
                  <span className="absolute bottom-0 left-0 right-0">
                    <div className="flex justify-center">
                      <svg
                        width="120"
                        height="18"
                        viewBox="0 0 320 60"
                        fill="none"
                      >
                        <path
                          d="M10 40 Q160 5 310 50"
                          stroke="#2243A4"
                          strokeWidth="6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </span>
                </span>
              </h3>

              <h4 className="text-lg sm:text-xl font-medium text-gray-700">
                خطوتك الموثوقة نحو التميز المهني والاعتراف الرسمي
              </h4>

              <p className="text-base sm:text-lg md:text-xl leading-8 lg:leading-9 text-gray-500">
                يسعدنا في إيراسوفت تقديم برامج تدريبية معتمدة رسمياً من نقابة
                المهندسين المصرية. يتيح لك هذا الاعتماد الحصول على شهادات موثقة
                تحمل الختم الرسمي للنقابة، مما يمنح سيرتك الذاتية قيمة مضافة
                ويعزز من فرص قبولك وتطورك المهني في مختلف المؤسسات والشركات
                الكبرى داخل مصر وخارجها.
              </p>
            </div>

            {/* Engineering Image */}
            <div className="col-span-12 lg:col-span-4 w-full h-full min-h-62.5 relative">
              <Image
                src="/engineering.webp"
                alt="اعتماد نقابة المهندسين المصرية"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
