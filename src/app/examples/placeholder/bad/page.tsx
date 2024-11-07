"use client";

import Profile from "../components/Profile";
import { members, type Member } from "../placeholderHelpers";
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
        <Profile member={member} key={index} />
      ))}
    </div>
  );
};

const Page = () => {
  return <Content />;
};

export default Page;
