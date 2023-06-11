import { setupWorker } from "msw";
import { homeHandlers } from "./handlers/home";

export const worker = setupWorker(...homeHandlers);
