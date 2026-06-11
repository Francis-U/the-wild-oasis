import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const {
    isLoading,
    error,
    data: settings = {},
  } = useQuery({
    // queryKey: "settings",/// from v4, querykey has to be an array
    queryKey: ["settings"],
    queryFn: getSettings, //////this needs to be an asynchronous fn
  });
  return { isLoading, error, settings };
}
