"use client";
import Image from "next/image";
import type { Member } from "../placeholderHelpers";
import { motion } from "framer-motion";

const LoadingProfile = () => {
  return (
    <motion.div
      className="flex items-center gap-4 py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative overflow-hidden h-32 w-32 rounded-full bg-gray-200 animate-pulse" />
      <div className="flex flex-col gap-2">
        <div className="h-8 w-48 bg-gray-200 animate-pulse" />
        <div className="h-4 w-96 bg-gray-200 animate-pulse" />
        <div className="h-9 w-24 bg-gray-200 animate-pulse mt-2" />
      </div>
    </motion.div>
  );
};

const Profile = ({ member }: { member?: Member }) => {
  if (!member) return <LoadingProfile />;

  return (
    <motion.div
      className="flex items-center gap-4 py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative overflow-hidden h-32 w-32 rounded-full">
        <Image
          src={member.img}
          alt={member.name}
          width={500}
          height={500}
          style={{
            objectPosition: member.objectPosition,
            scale: member.scale,
          }}
          className="transition-transform object-cover w-full h-full"
        />
      </div>
      <div>
        <p className="text-2xl h-8 w-48 font-bold">{member.name}</p>
        <p className="text-base text-gray-500 h-6 w-96 text-wrap">
          {member.title}
        </p>
        <button className="text-sm text-gray-500 border border-gray-300 rounded-sm px-1 py-2 mt-2 w-24 flex justify-center items-center">
          View Profile
        </button>
      </div>
    </motion.div>
  );
};

export default Profile;
