import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Input_client,
  create_credentials,
  create_response,
} from "../queries/client";
import graphqlClient from "../graphClient";

export function useCreateuser() {
  const queryClient = useQueryClient();
  return useMutation<create_credentials, create_response, Error>({
    mutationFn: async (variable) => {
      return graphqlClient.request<create_response>(Input_client, variable);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
    onError: (error) => {
      console.log("error message is", error);
    },
  });
}
