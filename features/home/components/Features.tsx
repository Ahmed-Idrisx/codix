import {
  TbMoneybag,
  TbRosetteDiscountCheck,
  TbDeviceLaptop,
  TbSchool,
} from "react-icons/tb";
import { IconType } from "react-icons";

interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: TbSchool,
    title: "افضل مدربين",
    description: "نخبة من افضل المدربين في مختلف المجالات",
  },
  {
    icon: TbDeviceLaptop,
    title: "منهج متكامل",
    description: "مناهج تعليمية متكاملة لضمان تفوق طلابنا",
  },
  {
    icon: TbRosetteDiscountCheck,
    title: "متابعة مستمرة",
    description: "متابعة مستمرة للمتدرب و تأهيله لسوق العمل",
  },
  {
    icon: TbMoneybag,
    title: "اسعار تنافسية",
    description: "اسعار تنافسيه و خصومات مستمرة تصل الى 50%",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-15 px-5 sm:px-8 bg-blue-50">
      <div className="mx-auto max-w-7xl flex flex-wrap gap-6 justify-center lg:gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="relative">
              <div className="w-62.5 h-50 bg-indigo-100 rounded-2xl ">
                <div className="relative w-full h-45 rounded-t-2xl rounded-br-[60px] rounded-bl-none bg-stone-100 shadow-lg flex flex-col items-center justify-center gap-3 px-2 text-center hover:rounded-br-none hover:rounded-bl-[60px] transition-all duration-300 group">
                  <div className="absolute -top-7 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-stone-100 bg-white shadow-sm group-hover:border-blue-700 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-blue-700" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
