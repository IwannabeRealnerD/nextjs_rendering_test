import { useQuery } from "@tanstack/react-query";

export const usePeopleData = () => {
  return useQuery(["SSR"], () =>
    fetch(
      "https://api.github.com/repos/tannerlinsley/react-query"
    ).then((res) => res.json())
  );
};
