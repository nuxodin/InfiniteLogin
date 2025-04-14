# InfiniteLogin

Minimalistische OAuth-Authentifizierung.

## Installation

```bash
deno cache deps.ts
```

## Verwendung

### Server
```typescript
import { serve } from "https://deno.land/std/http/server.ts";

const auth = new InfiniteLogin({
  github: {
    clientId: "your-github-client-id",
    secret: "your-github-secret"
  }
});

serve(async (req) => {
  const url = new URL(req.url);
  if (url.pathname === "/auth/config") {
    return new Response(JSON.stringify(auth.clientConfig()), {
      headers: { "Content-Type": "application/json" }
    });
  }
  if (url.pathname === "/auth" && req.method === "POST") {
    const { code } = await req.json();
    const user = await auth.authenticate("github", code);
    return new Response(JSON.stringify(user), {
      headers: { "Content-Type": "application/json" }
    });
  }
});
```

### Client

#### Basis Verwendung
```html
<script type="module">
import { InfiniteLogin } from './client/infinite-login.js';
import { PROVIDERS } from './providers.js';

const config = {
  github: { clientId: "your-github-client-id" }
};

const login = new InfiniteLogin(config);

login.addEventListener('code', async e => {
  const user = await validateCode(e.detail);
  console.log(user);
});

login.with('github');
</script>
```

#### UI Komponente
```html
<script type="module">
import { InfiniteLoginUI } from './client/ui.js';

const config = {
  github: { clientId: "your-github-client-id" }
};

const login = new InfiniteLoginUI(config);
login.mount('#login-container');
</script>
```

## Response
```js
{
  id: "123456",
  provider: "github", // Der verwendete Provider
  name: "Max Mustermann",
  email: "max@example.com",
  avatar: "https://..."
}
```

## Verfügbare Provider

Alle Provider sind in `providers.js` konfiguriert:

- GitHub (`github`)
- Google (`google`)
- Auth0 (`auth0`) - {tenant} wird durch deine Auth0-Domain ersetzt
- Twitter (`twitter`) 
- Apple (`apple`)
- Microsoft (`microsoft`)
- Facebook (`facebook`)
- Discord (`discord`)
- LinkedIn (`linkedin`)
- GitLab (`gitlab`)
- Bitbucket (`bitbucket`)
- Slack (`slack`)
- WorldID (`worldId`)
- BrightID (`brightId`)

### Provider Spezifische Scopes

- GitHub: `user:email`
- Google: `email profile`
- WorldID: `openid`
- BrightID: `profile`
- Twitter: `users.read tweet.read`
- Apple: `name email`
- Microsoft: `user.read`
- Facebook: `email public_profile`
- Discord: `identify email`
- LinkedIn: `r_liteprofile r_emailaddress`
- GitLab: `read_user email`
- Bitbucket: `account email`
- Auth0: `openid profile email`
- Slack: `users:read users:read.email`

## Lizenz
MIT