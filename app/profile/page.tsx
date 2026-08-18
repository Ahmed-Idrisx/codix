"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ProfileTab, user } from "@/constants/site";

import {
  ProfileFormValues,
  profileSchema,
} from "@/features/profile/schemas/profile.schema";

import ProfileHeader from "@/features/profile/components/ProfileHeader";
import ProfileTabs from "@/features/profile/components/ProfileTabs";
import ProfileSidebar from "@/features/profile/components/ProfileSidebar";
import PersonalInfoForm from "@/features/profile/components/PersonalInfoForm";
import EnrolledCourses from "@/features/profile/components/EnrolledCourses";
import Certificates from "@/features/profile/components/Certificates";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<ProfileTab>("personal");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [avatarPreview, setAvatarPreview] = useState<string | null>(
    user?.avatar ?? null,
  );

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),

    defaultValues: {
      first_name: user?.first_name ?? "",
      last_name: user?.last_name ?? "",
      email: user?.email ?? "",
      phone: user?.phone?.replace("+20", "") ?? "",
      bio: user?.bio ?? "",
      password: "",
      password_confirmation: "",
      avatar: undefined,
    },

    mode: "onBlur",
  });

  useEffect(() => {
    return () => {
      if (avatarPreview?.startsWith("blob:")) {
        URL.revokeObjectURL(avatarPreview);
      }
    };
  }, [avatarPreview]);

  const onSubmit = async (data: ProfileFormValues) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset({
      ...data,
      password: "",
      password_confirmation: "",
      avatar: undefined,
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white pb-20">
      {/* Decorative Shapes */}
      <div className="pointer-events-none absolute top-72.5 right-25 z-0 hidden h-75 w-75 select-none md:block">
        <Image
          src="/arabic_shape.webp"
          alt=""
          width={300}
          height={300}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="pointer-events-none absolute bottom-10 -left-6 z-0 hidden h-80 w-80 rotate-45 select-none md:block">
        <Image
          src="/arabic_shape.webp"
          alt=""
          width={310}
          height={310}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Profile Banner */}

      <div className="relative h-75 w-full overflow-hidden">
        <Image
          src="/section_hero.webp"
          alt="دبلوماتنا في EraaSoft"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <ProfileHeader
          user={user}
          avatarPreview={avatarPreview}
          fileInputRef={fileInputRef}
          setValue={setValue}
          setAvatarPreview={setAvatarPreview}
        />

        {/* Mobile Tabs */}
        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content */}
        <div className="mt-10 grid grid-cols-1 items-start gap-8 md:grid-cols-3">
          <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="order-2 md:col-span-2">
            {activeTab === "personal" && (
              <PersonalInfoForm
                register={register}
                errors={errors}
                control={control}
                isSubmitting={isSubmitting}
                onSubmit={handleSubmit(onSubmit)}
              />
            )}

            {activeTab === "courses" && <EnrolledCourses />}

            {activeTab === "certificates" && <Certificates />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
