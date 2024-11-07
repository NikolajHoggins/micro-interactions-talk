"use client";

import Image from "next/image";
import { members, type Member } from "./placeholderHelpers";
import { useEffect, useState } from "react";

const Content = () => {
  const [data, setData] = useState<Member[]>();

  useEffect(() => {
    setTimeout(() => {
      setData(members);
    }, 4000);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex flex-col divide-y">
      {data?.map((member, index) => (
        <div key={index} className="flex items-center gap-4 py-6">
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
            <p className="text-2xl font-bold">{member.name}</p>
            <p className="text-base text-gray-500">{member.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Page = () => {
  return <Content />;
};

export default Page;
