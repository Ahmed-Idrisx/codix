"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { FiMail, FiMapPin, FiPhone, FiSend, FiUser } from "react-icons/fi";
import PageHero from "@/components/shared/PageHero";
import {
  ContactFormData,
  contactSchema,
} from "@/features/contact/schemas/contact.schema";
import FormInput from "@/components/shared/FormInput";
import MainButton from "@/components/shared/MainButton";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="ابدأ بسؤال - وقد تكون هذه أول خطوة في مستقبلك"
        subtitle="اختيار مسارك التقني قد يكون خطوة محيرة، لكنك لست وحدك. تواصل مع فريق إيرا سوفت، وسنساعدك على فهم الخيارات المتاحة، واختيار البرنامج التدريبي الذي يناسب مستواك وهدفك المهني."
      />
      <section className="bg-blue-50">
        <div className="mx-auto max-w-350 px-5 py-15 sm:px-8">
          <div className=" overflow-hidden rounded-2xl bg-white shadow-md grid lg:grid-cols-2">
            {/* Form */}
            <div className="p-5 sm:p-8 lg:p-10">
              {/* Title */}
              <div className="mb-7">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  نحن هنا لمساعدتك
                </h2>

                <p className="mt-2 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
                  لديك استفسار أو تحتاج إلى المزيد من المعلومات؟ أرسل لنا رسالتك
                  وسنتواصل معك في أقرب وقت.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-5"
              >
                {/* Name */}
                <FormInput<ContactFormData>
                  label="الاسم"
                  name="name"
                  type="text"
                  placeholder="أدخل اسمك"
                  register={register}
                  error={errors.name}
                  icon={<FiUser />}
                />
                {/* Email */}
                <FormInput<ContactFormData>
                  label=" البريد الإلكتروني"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  register={register}
                  error={errors.email}
                  icon={<FiMail />}
                />
                {/* Phone */}
                <FormInput<ContactFormData>
                  label="رقم الهاتف"
                  name="phone"
                  type="phone"
                  placeholder="رقم الهاتف"
                  register={register}
                  error={errors.phone}
                  icon={<FiPhone />}
                />
                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-800 sm:text-base"
                  >
                    الرسالة
                  </label>

                  <textarea
                    id="message"
                    rows={6}
                    placeholder="اكتب رسالتك هنا..."
                    {...register("message")}
                    className={`min-h-40 w-full resize-none rounded-2xl border bg-white px-5 py-4 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 sm:text-base ${
                      errors.message
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-blue-600"
                    }`}
                  />

                  {errors.message && (
                    <p className="text-xs font-medium text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <MainButton
                  type="submit"
                  fullWidth
                  isLoading={isSubmitting}
                  loadingText="جاري الإرسال..."
                  icon={<FiSend size={18} />}
                >
                  تواصل معنا
                </MainButton>
              </form>
            </div>

            {/* Image */}
            <div className="relative min-h-72 lg:min-h-full">
              <Image
                src="/contact_us.webp"
                alt="تواصل معنا"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-blue-950/70 via-blue-900/20 to-transparent" />

              {/* Image Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <FiMapPin size={22} />
                </div>

                <h3 className="text-xl font-bold sm:text-2xl">دعنا نتحدث</h3>

                <p className="mt-2 max-w-md text-sm leading-7 text-blue-50 sm:text-base">
                  فريقنا جاهز للإجابة على استفساراتك ومساعدتك في اختيار ما
                  يناسبك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
