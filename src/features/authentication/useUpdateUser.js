import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (user) => {
      toast.success("User account successfully updated");
      ////we can set the new user directly into the cache instead of invalidating the queries

      // queryClient.setQueryData(["user"], user.user);

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      // reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateUser };
}
