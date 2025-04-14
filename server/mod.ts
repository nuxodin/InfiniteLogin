import type { User } from "./deps.ts";
import { PROVIDERS } from "../providers.js";

interface ProviderConfig {
  auth: {
    url: string;
    scope: string;
    params?: Record<string, string>;
  };
  token: {
    url: string;
    type: string;
    params?: Record<string, string>;
    tokenRequestAsForm?: boolean; // Changed from tokenContentType
  };
  user: {
    url: string;
  };
  label: string;
  svg: string;
}

type Provider = keyof typeof PROVIDERS;
const providers = PROVIDERS as Record<Provider, ProviderConfig>;

interface Config {
  clientId: string;
  secret: string;
  tenant?: string; // Added for Auth0
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
    if (!config) throw new Error(`Unknown provider: ${provider}`);

    let providerConfig = providers[provider];

    // Replace {tenant} for Auth0
    if (provider === 'auth0' && config.tenant) {
      providerConfig = JSON.parse(
        JSON.stringify(providerConfig)
          .replace(/{tenant}/g, config.tenant)
      );
    }
    
    try {
      const tokenParams = {
        client_id: config.clientId,
        client_secret: config.secret,
        code,
        redirect_uri: '', // Some providers might require this, add if needed
        ...(providerConfig.token.params || {})
      };

      // Adjust redirect_uri based on client context if necessary
      // For now, assuming it's not strictly required by most or handled by provider config

      const token = await this.getToken(provider, providerConfig.token.url, tokenParams);

      const user = await this.getUser(
        providerConfig.user.url, 
        providerConfig.token.type, 
        token
      );

      // Note: User data mapping might need adjustments per provider
      return {
        id: String(user.id),
        provider,
        email: user.email,
        name: user.name || user.login || user.displayName, // Added displayName as potential field
        avatar: user.avatar_url || user.picture || user.profile_image_url // Added more potential fields
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(`Authentication failed for ${provider}: ${message}`);
    }
  }

  private async getToken(provider: Provider, url: string, params: Record<string, string>) {
    const providerConfig = providers[provider]; // Get provider config
    const isForm = providerConfig.token.tokenRequestAsForm;

    // Determine Content-Type and body based on the flag
    const contentType = isForm ? "application/x-www-form-urlencoded" : "application/json";
    const body = isForm ? new URLSearchParams(params) : JSON.stringify(params);

    // Define headers object directly
    const headers: HeadersInit = {
        Accept: "application/json",
        "Content-Type": contentType
    };

    const res = await fetch(url, {
      method: "POST",
      headers,
      body
    });
    
    if (!res.ok) {
      const errorBody = await res.text();
      throw new Error(`Token request failed: ${res.status} ${res.statusText} - ${errorBody}`);
    }
    
    const data = await res.json();
    if (!data.access_token) {
      console.error("Token response data:", data); // Log for debugging
      throw new Error("No access_token in response");
    }
    
    return data.access_token;
  }

  private async getUser(url: string, type: string, token: string) {
    const res = await fetch(url, {
      headers: { 
        Authorization: `${type} ${token}`,
        Accept: "application/json",
        // Some APIs might need a User-Agent
        // "User-Agent": "InfiniteLogin/1.0"
      }
    });
    
    if (!res.ok) {
      const errorBody = await res.text();
      throw new Error(`User request failed: ${res.status} ${res.statusText} - ${errorBody}`);
    }
    
    return res.json();
  }
}