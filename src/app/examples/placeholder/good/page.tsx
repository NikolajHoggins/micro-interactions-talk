"use client";

import Profile from "../components/Profile";
import useMembersData from "../hooks/useMembersData";

const Content = () => {
  const data = useMembersData();

  return (
    <div className="flex flex-col divide-y">
      {data
        ? data?.map((member, index) => <Profile key={index} member={member} />)
        : [1, 2].map((_, index) => <Profile key={index} />)}
    </div>
  );
};

const Page = () => {
  return <Content />;
};

export default Page;
