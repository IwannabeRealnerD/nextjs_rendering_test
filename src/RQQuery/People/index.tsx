import { useQuery } from "@tanstack/react-query";

export const usePeopleData = () => {
  return useQuery(["SSR"], () =>
    fetch("https://swapi.dev/api/people/4").then((res) => res.json())
  );
};
