"use client";

import PageHero from "@/components/shared/PageHero";
import { useState } from "react";
import {
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCheckSquare,
  FiChevronLeft,
  FiChevronRight,
  FiPocket,
  FiStar,
  FiUsers,
  FiZap,
} from "react-icons/fi";

type JourneyStep = {
  id: number;
  title: string;
  icon: React.ElementType;
  description: string;
  points: string[];
};

const journeySteps: JourneyStep[] = [
  {
    id: 1,
    title: "هيكل الدبلومة",
    icon: FiBookOpen,
    description: "تنظيم المحتوى والربط بالتطبيق العملي",
    points: [
      "تقسيم المحتوى إلى وحدات تعليمية متسلسلة و مترابطة تضمن بناء المعرفة بشكل تدريجي.",
      "ربط كل وحدة بتطبيقات عملية وورش عمل لترسيخ المفاهيم وتحويلها إلى مهارات قابلة للتنفيذ.",
      "الانتقال من الأساسيات إلى المشاريع المتقدمة وفق خطة واضحة تحاكي احتياجات سوق العمل.",
      "متابعة مستمرة لقياس التقدم وضمان الاستعداد للمراحل التالية من الرحلة التعليمية.",
    ],
  },

  {
    id: 2,
    title: "نظام التقييم الشامل",
    icon: FiCheckSquare,
    description: "قياس الأداء ومعايير الانتقال والقبول",
    points: [
      "تقييم مستمر يركز على الحضور، الالتزام، تسليم الـ Tasks، وجودة التطبيق العملي.",
      "قياس مستوى الطالب بشكل دوري لتحديد مدى جاهزيته للانتقال إلى المراحل المتقدمة.",
      "يشترط في بعض الأنشطة والبرامج العملية تحقيق نسبة تقييم لا تقل عن 90% لضمان الاستفادة الكاملة من التجربة.",
      "تقديم Feedback مستمر يساعد الطالب على معرفة نقاط القوة وفرص التحسين خلال رحلته التعليمية.",
    ],
  },

  {
    id: 3,
    title: "ورش العمل",
    icon: FiUsers,
    description: "بيئة تطبيقية تحاكي تحديات سوق العمل",
    points: [
      "تطبيق عملي على مشاريع وسيناريوهات تحاكي احتياجات الشركات وسوق العمل تحت إشراف مدربين خبراء في المجال.",
      "تُنظم بشكل دوري للطلاب المؤهلين و الحاصلين علي اكثر90% من التقييم، بهدف رفع مستوى التطبيق واكتساب خبرات عملية متقدمة.",
      "تنمية مهارات تحليل المشكلات، والعمل على حلول تقنية وفق أساليب احترافية.",
      "تعزيز الثقة في تنفيذ المشاريع والاستعداد للتعامل مع التحديات التي يواجهها المطورون في بيئة العمل.",
    ],
  },

  {
    id: 4,
    title: "معسكرات إيراسوفت",
    icon: FiZap,
    description: "المشاريع المتكاملة وتطوير العمل الجماعي",
    points: [
      "تنفيذ مشروع متكامل من الفكرة وحتى المنتج النهائي من خلال تجربة تطبيقية مكثفة.",
      "العمل ضمن فريق باستخدام أساليب وأدوات التعاون المتبعة في بيئات العمل التقنية داخل الشركات .",
      "مخصصة للطلاب المتميزين الذين أثبتوا جاهزيتهم للانتقال إلى مراحل تطبيقية أكثر تقدمًا.",
      "تُنظم بشكل دوري للطلاب المؤهلين الذين أثبتوا جاهزيتهم للانتقال إلى مراحل تطبيقية أكثر تقدمًا.",
    ],
  },

  {
    id: 5,
    title: " يوم العمل (Job Day)",
    icon: FiBriefcase,
    description: "عِش تجربة يوم عمل حقيقي داخل شركة برمجيات",
    points: [
      "محاكاة كاملة لدورة العمل باستخدام أدوات إدارة المشاريع والتعاون بين الفرق التقنية.",
      "تنفيذ المهام ضمن فريق عمل مع متابعة التقدم وعقد اجتماعات دورية وعرض نتائج للمشاريع في Demo Sessions.",
      "اكتساب خبرة عملية في إدارة الوقت، التواصل، والعمل وفق معايير بيئة الشركات.",
      "يكون متاحاًً للطلاب المؤهلين الذين استوفوا معايير الأداء والجاهزية للانتقال إلى هذه المرحلة.",
    ],
  },

  {
    id: 6,
    title: "تأثير إيراسوفت",
    icon: FiPocket,
    description: "التأهيل المهني و المهارات الشخصية لسوق العمل",
    points: [
      "بناء CV احترافي متوافق مع أنظمة الفرز الآلي (ATS) لزيادة فرص وصوله إلى مسؤولي التوظيف.",
      "تحسين حساب LinkedIn وبناء هوية مهنية تعكس مهاراتك ومشاريعك بشكل احترافي لجذب مسؤولي التوظيف.",
      "الاستعداد للمقابلات الشخصية من خلال التدريب على الأسئلة الفنية و الشخصيه وأساليب التواصل الاحترافي.",
      "تطوير مهارات التواصل داخل بيئة العمل، بما في ذلك أساسيات اللغة الإنجليزية المستخدمة في المجال التقني.",
      "حضور Freelancing Workshops للتعرف على كيفية التسعير، والتعامل مع العملاء، وكتابة العروض (Proposals)، وإدارة المشاريع على منصات العمل الحر.",
    ],
  },

  {
    id: 7,
    title: "مشروع التخرج  (EGP)",
    icon: FiAward,
    description:
      "أكبر حدث تقني سنوي يجمع طلاب Eraa Soft بقادة وخبراء سوق التكنولوجيا",
    points: [
      "عرض ومناقشة مشاريع التخرج أمام خبراء و seniors من شركات التكنولوجيا ، مع الحصول على تقييم وFeedback احترافي يساعد على تطوير المشروع قبل الانطلاق لسوق العمل.",
      "جلسات ملهمة (Tech Talks) يقدمها مؤثرون وخبراء في مجالات البرمجة و تحليل البيانات و الـ AI يشاركون خلالها خبراتهم العملية وأهم التحديات التي واجهوها وكيف وصلوا إلى النجاح.",
      "لقاءات مباشرة مع شركات التكنولوجيا وشركاء Eraa Soft للتعرف على متطلبات التوظيف، وبناء شبكة علاقات مهنية مع أصحاب الخبرة وصناع القرار في المجال.",
      "بناء شبكة علاقات مهنية (Networking) مع عدد كبير من الطلاب والخريجين والمهندسين والمتخصصين، بما يفتح أبوابًا لفرص التعاون والعمل مستقبلًا.",
      "التعرف على أحدث اتجاهات سوق التكنولوجيا والمهارات التي تبحث عنها الشركات، وكيف تستعد للمنافسة في سوق العمل المحلي والعالمي.",
      "الاحتفال بإنجازات الطلاب في حدث سنوي يجمع المجتمع التقني، ويمنح كل طالب فرصة لعرض ما أنجزه أمام جمهور من المتخصصين والمهتمين بالتكنولوجيا.",
      "الانتقال من مرحلة التعلم إلى مرحلة الاحتراف من خلال تجربة متكاملة تجمع بين المعرفة، والتطبيق، والتقييم، والتواصل، وفرص الانطلاق نحو سوق العمل.",
    ],
  },

  {
    id: 8,
    title: "EraaSoft Community",
    icon: FiStar,
    description: "مجتمع تفاعلي مستمر لدعم النمو المهني والتوظيف",
    points: [
      "ربط الطلاب والخريجين بشبكة واسعة من الشركات وأصحاب الأعمال لتسهيل التوظيف.",
      "متابعة أحدث التطورات في مجالات البرمجة، والذكاء الاصطناعي، وتحليل البيانات، والأمن السيبراني و غيرهم من خلال فعاليات ومحتوى متخصص.",
      "حضور لقاءات وفعاليات حصرية مع خبراء الصناعة لمناقشة أحدث الاتجاهات ومتطلبات سوق العمل.",
      "الاستفادة من مزايا حصرية مقدمة من شركاء Eraa Soft، مثل خصومات على برامج اللغة الإنجليزية، والدورات المتخصصة، والخدمات المهنية الاخري",
      "توسيع شبكة علاقاتك المهنية (Networking) والتواصل مع طلاب وخريجين وخبراء يشاركونك نفس الاهتمامات والطموحات.",
      "دعم مهني مستمر من خلال جلسات إرشادية، ومشاركة الخبرات، وتبادل المعرفة داخل مجتمع تقني نشط.",
    ],
  },
];

const Journey = () => {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = journeySteps[activeStep];
  const Icon = currentStep.icon;

  const goNext = () => {
    setActiveStep((prev) => (prev < journeySteps.length - 1 ? prev + 1 : prev));
  };

  const goPrevious = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="الرحلة التعليمية"
        subtitle="رحلة تعليمية متكاملة، مصممة بعناية ليك و من أول محاضرة وإحنا معاك في كل خطوة، هتتعلم، وتطبق بإيدك، وتنفذ مشاريع حقيقية، و مع المتابعة المستمرة هتبقى جاهز تدخل سوق العمل بثقة."
      />
      {/* STEPS */}
      <section className="bg-blue-900">
        <div className="mx-auto max-w-350 px-5 py-15 sm:px-8">
          {/* TITLE */}
          <div className="text-center mb-16">
            <h2 className="inline-block border-b-4 border-yellow-500 pb-3 text-2xl font-extrabold tracking-wide text-white md:text-4xl">
              مخطط الرحلة التعليمية
            </h2>
          </div>

          {/* DESKTOP STEPS */}
          <div className="hidden lg:block">
            <div className="flex justify-between overflow-x-auto scrollbar-none">
              {journeySteps.map((step, index) => {
                const isActive = activeStep === index;
                const Icon = step.icon;
                const isLast = index === journeySteps.length - 1;

                return (
                  <div
                    key={step.id}
                    className="flex items-center justify-center"
                  >
                    {/* Step */}
                    <button
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className={`group flex flex-col items-center gap-5 text-center transition-all duration-300 pt-5 scale-95 ${
                        isActive
                          ? "scale-100 opacity-100"
                          : "opacity-60 hover:scale-100 hover:opacity-100"
                      }`}
                    >
                      {/* Circle */}
                      <div
                        className={`relative flex h-28 w-28 border-4 border-white items-center justify-center rounded-full shadow-xl transition-all duration-300 ${
                          isActive
                            ? "bg-yellow-500 border-white"
                            : "bg-white hover:bg-slate-100"
                        }`}
                      >
                        {/* Number */}
                        <span
                          className={`absolute -top-4 right-1/2 flex h-8 w-8 translate-x-1/2 items-center justify-center rounded-full text-sm font-black shadow-md ${
                            isActive
                              ? "bg-white text-blue-800"
                              : "bg-yellow-500 text-slate-900"
                          }`}
                        >
                          {step.id}
                        </span>

                        <Icon
                          className={`h-12 w-12 transition-all duration-300 ${
                            isActive ? "text-slate-900" : "text-blue-950"
                          }`}
                        />
                      </div>

                      {/* Title */}
                      <span
                        className={`h-20 max-w-36 text-sm font-black leading-relaxed transition-colors duration-300 xl:text-base ${
                          isActive
                            ? "text-yellow-400"
                            : "text-white/80 group-hover:text-white"
                        }`}
                      >
                        {step.title}
                      </span>
                    </button>
                    {/* Arrow */}
                    {!isLast && (
                      <div className="mb-20 flex items-center px-2 text-4xl font-extrabold text-yellow-500">
                        <span className="animate-pulse">←</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE STEPS */}
          <div className="flex flex-col items-center justify-center lg:hidden">
            <div className="flex w-full max-w-md items-center justify-between gap-5">
              {/* Next */}
              <button
                type="button"
                onClick={goNext}
                disabled={activeStep === journeySteps.length - 1}
                aria-label="التالي"
                className="rounded-full bg-white/10 p-4 text-white transition-colors hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <FiChevronRight className="h-5 w-5" />
              </button>

              {/* Current Step */}
              <div className="flex flex-col items-center gap-5">
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-yellow-500 text-slate-900 shadow-2xl border-4 border-white">
                  <span className="absolute -top-4 right-1/2 flex h-9 w-9 translate-x-1/2 items-center justify-center rounded-full bg-white text-base font-black text-blue-800 shadow-lg">
                    {currentStep.id}
                  </span>

                  <Icon className="h-14 w-14" />
                </div>

                <h3 className="text-center text-xl font-extrabold text-yellow-500">
                  {currentStep.title}
                </h3>
              </div>

              {/* Previous */}
              <button
                type="button"
                onClick={goPrevious}
                disabled={activeStep === 0}
                aria-label="السابق"
                className="rounded-full bg-white/10 p-4 text-white transition-colors hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <FiChevronLeft className="h-5 w-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="mt-8 flex items-center gap-3">
              {journeySteps.map((step, index) => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  aria-label={`المرحلة ${step.id}`}
                  className={`h-3.5 rounded-full transition-all duration-300 ${
                    activeStep === index
                      ? "w-8 bg-yellow-500"
                      : "w-3.5 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* STEP DETAILS */}
      <section className="bg-white">
        <div className="mx-auto max-w-350 px-5 py-15 sm:px-8">
          <div className="rounded-3xl bg-linear-to-r from-blue-700 to-blue-900 p-6 shadow-2xl md:p-10 lg:p-16">
            {/* Heading Badge */}
            <div className="mb-10 inline-flex items-center gap-4 rounded-lg bg-white px-6 py-4 text-xl font-extrabold text-blue-800 shadow-xl md:px-10 md:text-2xl">
              <span className="h-10 w-3 shrink-0 rounded-sm bg-yellow-500" />

              <span>{currentStep.title}</span>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-16">
              {/* Text */}
              <div className="flex-1 space-y-5">
                <h3 className="text-2xl font-extrabold tracking-wide text-yellow-400 md:text-3xl">
                  {currentStep.description}
                </h3>

                <ul className="space-y-3">
                  {currentStep.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 text-base font-extrabold leading-relaxed text-white md:text-lg"
                    >
                      <span className="mt-1 text-xl font-extrabold text-yellow-500">
                        •
                      </span>

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Icon */}
              <div className="flex h-52 w-52 shrink-0 items-center justify-center rounded-full border-4 border-yellow-500/20 bg-yellow-500/20 shadow-2xl md:h-72 md:w-72 ">
                <Icon className="h-28 w-28 text-yellow-400 md:h-36 md:w-36" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Journey;
