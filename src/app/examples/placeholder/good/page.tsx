"use client";

import { members, type Member } from "../placeholderHelpers";
import { useEffect, useState } from "react";
import Profile from "../components/Profile";

const Content = () => {
  const [data, setData] = useState<Member[]>();

  useEffect(() => {
    setTimeout(() => {
      setData(members);
    }, 4000);
  }, []);

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
