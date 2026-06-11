import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    // mutationFn: (id) => deleteCabin(id),  // since the id is the samee can do below
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking successfully deleted");
      //// the below is to trigger a refetching of the data
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBooking };
}
