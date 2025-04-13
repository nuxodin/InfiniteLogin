import type { User } from "./deps.ts";
import { PROVIDERS, type Provider } from "./providers.ts";

interface Config {
  clientId: string;
  secret: string;
}

export class InfiniteLogin {
  constructor(private configs: Partial<Record<Provider, Config>>) {}

  clientConfig() {
    return Object.fromEntries(
      Object.entries(this.configs)
        .map(([provider, cfg]) => [provider, { clientId: cfg.clientId }])
    );
  }

  async authenticate(provider: Provider, code: string): Promise<User> {
    const config = this.configs[provider];
    if (!config) throw new Error(`Provider not configured: ${provider}`);

    const providerConfig = PROVIDERS[provider];
    
    try {
      const token = await this.getToken(providerConfig.token.url, {
        client_id: config.clientId,
        client_secret: config.secret,
        code,
        ...providerConfig.token.params
      });

      const user = await this.getUser(
        providerConfig.user.url, 
        providerConfig.token.type, 
        token
      );

      return {
        id: String(user.id),
        provider,
        email: user.email,
        name: user.name || user.login,
        avatar: user.avatar_url || user.picture
      };
    } catch (error) {
      throw new Error(`Authentication failed: ${error.message}`);
    }
  }

  private async getToken(url: string, params: Record<string, string>) {
    const res = await fetch(url, {
      method: "POST",
      headers: { 
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    });
    
    if (!res.ok) {
      throw new Error(`Token request failed: ${res.status} ${res.statusText}`);
    }
    
    const data = await res.json();
    if (!data.access_token) {
      throw new Error("No access token in response");
    }
    
    return data.access_token;
  }

  private async getUser(url: string, type: string, token: string) {
    const res = await fetch(url, {
      headers: { 
        Authorization: `${type} ${token}`,
        Accept: "application/json"
      }
    });
    
    if (!res.ok) {
      throw new Error(`User request failed: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  }
}