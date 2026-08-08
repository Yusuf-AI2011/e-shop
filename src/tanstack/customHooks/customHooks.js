import { useMutation } from "@tanstack/react-query";
import { GetToken } from "../mutations/mutations";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useAuth = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: GetToken,
    onSuccess: () => {
      router("/admin");
      setTimeout(() => {
        toast.success("Welcome!");
      }, [1000]);
    },
    onError: () => {
      toast.error("Something went wrong!");
    },
  });
};
