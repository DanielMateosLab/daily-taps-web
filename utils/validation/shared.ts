import { Message } from "yup/lib/types";

export const fieldRequiredError: Message = ({ path }) => `${path} is required`;
