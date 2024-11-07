import { useState } from "react";

import { members, type Member } from "../placeholderHelpers";

import { useEffect } from "react";

import { LOADING_DELAY } from "../placeholderHelpers";

const useMembersData = () => {
  const [data, setData] = useState<Member[]>();

  useEffect(() => {
    setTimeout(() => {
      setData(members);
    }, LOADING_DELAY);
  }, []);

  return data;
};

export default useMembersData;
