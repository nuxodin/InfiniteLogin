import { assertRejects } from "https://deno.land/std@0.215.0/assert/mod.ts";
import { InfiniteLogin } from "../mod.ts";

Deno.test("InfiniteLogin", async t => {
  const auth = new InfiniteLogin({
    github: {
      clientId: "id",
      secret: "secret"
    }
  });

  await t.step("rejects unknown provider", () => {
    assertRejects(() => auth.authenticate("invalid", "code"),
      Error, "Unknown provider: invalid");
  });

  await t.step("rejects missing config", () => {
    assertRejects(() => auth.authenticate("google", "code"),
      Error, "Unknown provider: google");
  });
});