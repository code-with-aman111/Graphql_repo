import { useQuery } from "@tanstack/react-query";
import { GET_CLIENT, singleClient } from "../queries/client";
import graphqlClient from "../graphClient";

export function useSingleclient(id: String) {
  return useQuery<singleClient, Error>({
    queryKey: ["clients", id],
    queryFn: async () => {
      return graphqlClient.request<singleClient>(GET_CLIENT, { id });
    },
  });
}
