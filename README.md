# InfiniteLogin

Todo: übersetze ins Englische


Minimalistische OAuth-Authentifizierung.

## Installation

```bash
deno cache deps.ts
```

## Verwendung

### Server
```typescript
const auth = new InfiniteLogin({
  github: {
    clientId: "your-github-client-id",
    secret: "your-github-secret"
  },
  google: {
    clientId: "your-google-client-id",
    secret: "your-google-secret"
  },
  worldId: {
    clientId: "your-worldid-client-id",
    secret: "your-worldid-secret"
  },
  brightId: {
    clientId: "your-brightid-client-id",
    secret: "your-brightid-secret"
  },
  twitter: {
    clientId: "your-twitter-client-id",
    secret: "your-twitter-secret"
  }
  // Weitere verfügbare Provider:
  // - apple
  // - microsoft
  // - facebook
  // - discord
});

// Optional: Client-Konfiguration abrufen
const clientConfig = auth.clientConfig();
// Returns: { github: { clientId: "..." }, google: { clientId: "..." }, ... }

// Code validieren und User-Daten erhalten
const user = await auth.authenticate("github", code);
```

### Client
```html
<script src="client/infinite-login.js"></script>
<script>
// Konfiguration direkt übergeben
const config = {
  github: { clientId: "your-github-client-id" },
  google: { clientId: "your-google-client-id" },
  worldId: { clientId: "your-worldid-client-id" },
  brightId: { clientId: "your-brightid-client-id" },
  twitter: { clientId: "your-twitter-client-id" }
  // Weitere Provider wie oben konfigurierbar
};

const login = new InfiniteLogin(config);

login.addEventListener('code', async e => {
  const user = await validateCode(e.detail);
  console.log(user);
});

// Verfügbare Provider:
// - github
// - google
// - worldId
// - brightId
// - twitter
// - apple
// - microsoft
// - facebook
// - discord
login.with('github'); 
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

## Provider Spezifische Scopes

- GitHub: `user:email`
- Google: `email profile`
- WorldID: `openid`
- BrightID: `profile`
- Twitter: `users.read tweet.read`
- Die anderen Provider verwenden ihre Standard-Scopes

## Lizenz
MIT