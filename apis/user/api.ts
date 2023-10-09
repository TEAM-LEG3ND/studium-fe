import appAxios from "../appAxios";
import { userSchema } from "./schema";

const getUserById = async (id: number) => {
  const { data } = await appAxios().get(`/user/${id}`);
  const validatedData = userSchema.parse(data);

  return validatedData;
};

export default getUserById;
