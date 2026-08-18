"use client";

import Image from "next/image";
import { ChangeEvent, RefObject } from "react";
import { FiCamera, FiUser } from "react-icons/fi";
import { User } from "@/constants/site";
import { ProfileFormValues } from "@/features/profile/schemas/profile.schema";
import { UseFormSetValue } from "react-hook-form";

interface ProfileHeaderProps {
  user: User | null;
  avatarPreview: string | null;
  fileInputRef: RefObject<HTMLInputElement | null>;
  setValue: UseFormSetValue<ProfileFormValues>;
  setAvatarPreview: React.Dispatch<React.SetStateAction<string | null>>;
}

const ProfileHeader = ({
  user,
  avatarPreview,
  fileInputRef,
  setValue,
  setAvatarPreview,
}: ProfileHeaderProps) => {
  const handleAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setValue("avatar", file, {
      shouldValidate: true,
      shouldDirty: true,
    });

    const previewUrl = URL.createObjectURL(file);

    setAvatarPreview((previous) => {
      if (previous?.startsWith("blob:")) {
        URL.revokeObjectURL(previous);
      }

      return previewUrl;
    });
  };

  return (
    <div className="relative -mt-20 flex flex-col items-center text-center md:-mt-24">
      <div className="group relative">
        {/* Avatar */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="cursor-pointer relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-slate-200 shadow-xl md:h-44 md:w-44"
        >
          {avatarPreview ? (
            <Image
              src={avatarPreview}
              alt="user image"
              fill
              className="object-cover"
            />
          ) : (
            <FiUser className="h-16 w-16 text-slate-400 md:h-20 md:w-20" />
          )}
        </button>

        {/* Camera */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="cursor-pointer absolute right-1.5 bottom-1.5 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-blue-800 text-white shadow-lg transition-all duration-200 hover:bg-blue-900 md:right-2 md:bottom-2"
        >
          <FiCamera className="h-4.5 w-4.5" />
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp"
          onChange={handleAvatarChange}
          className="hidden"
        />
      </div>

      <h1 className="mt-4 text-2xl font-bold text-blue-800 md:text-3xl">
        {user?.first_name} {user?.last_name}
      </h1>

      <p className="mt-1 text-sm font-medium text-gray-400 md:text-base">
        {user?.email}
      </p>
    </div>
  );
};

export default ProfileHeader;
