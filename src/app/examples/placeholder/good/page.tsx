"use client";

import Profile from "../components/Profile";
import useMembersData from "../hooks/useMembersData";

const Page = () => {
  const data = useMembersData();
  return (
    <div className="flex flex-col divide-y">
      {data
        ? data?.map((member, index) => <Profile key={index} member={member} />)
        : [1, 2].map((_, index) => <Profile key={index} />)}
    </div>
  );
};

export default Page;
