import { useState } from "react";

import { members, type Member } from "../placeholderHelpers";

import { useEffect } from "react";

const LOADING_DELAY_MS = 3000;
const useMembersData = () => {
  const [data, setData] = useState<Member[]>();

  useEffect(() => {
    setTimeout(() => {
      setData(members);
    }, LOADING_DELAY_MS);
  }, []);

  return data;
};

export default useMembersData;
