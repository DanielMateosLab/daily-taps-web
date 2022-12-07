import { Message } from "yup/lib/types";

export const fieldRequiredError: Message = ({ path }) =>
  `${path.slice(0, 1).toUpperCase() + path.slice(1)} is required`;
