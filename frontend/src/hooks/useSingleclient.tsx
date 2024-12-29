import { useQuery } from "@tanstack/react-query";
import { GET_CLIENT, singleClient } from "../queries/client";
import graphqlClient from "../graphClient";

export function useSingleclient(id: String) {
  useQuery<singleClient, Error>({
    queryKey: ["clients", id],
    queryFn: async () => {
      return graphqlClient.request<singleClient>(GET_CLIENT, { id });
    },
  });
}

// export function useSingleclient(id: string) {
//   return useQuery<singleClient, Error>({
//     queryKey: ["clients", id],
//     queryFn: async () => {
//       if (!id) return null; // Prevent fetching if no ID
//       try {
//         return await graphqlClient.request<singleClient>(GET_CLIENT, { id });
//       } catch (error) {
//         console.error("Error fetching client data:", error);
//         return null;
//       }
//     },
//     enabled: !!id, // Ensure query only runs when ID is provided
//   });
// }
