import { useQuery } from "@tanstack/react-query";
import { GET_CLIENTS, Clients } from "../queries/client";
import graphqlClient from "../graphClient";
export function useGetclient() {
  return useQuery<Clients, Error>({
    queryKey: ["clients"],
    queryFn: async () => {
      return graphqlClient.request<Clients>(GET_CLIENTS);
    },
  });
}
