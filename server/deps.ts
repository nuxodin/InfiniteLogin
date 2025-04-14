// External dependencies
export { assertRejects } from "https://deno.land/std@0.215.0/assert/mod.ts";

// Types
export interface User {
  id: string;
  provider: string;
  email?: string;
  name?: string;
  avatar?: string;
}