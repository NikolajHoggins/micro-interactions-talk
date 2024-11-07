"use client";

import Profile from "../components/Profile";
import useMembersData from "../hooks/useMembersData";

const Content = () => {
  const data = useMembersData();

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
