import { assertRejects } from "../deps.ts";
import { InfiniteLogin } from "../mod.ts";
import { PROVIDERS } from "../../providers.js";

type Provider = keyof typeof PROVIDERS;

Deno.test("InfiniteLogin", async t => {
  const auth = new InfiniteLogin({
    github: {
      clientId: "id",
      secret: "secret"
    }
  });

  await t.step("rejects unknown provider", () => {
    assertRejects(() => auth.authenticate("invalid" as Provider, "code"),
      Error, "Unknown provider: invalid");
  });

  await t.step("rejects missing config", () => {
    assertRejects(() => auth.authenticate("google", "code"),
      Error, "Unknown provider: google");
  });
});