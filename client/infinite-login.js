import { PROVIDERS } from '../providers.js';

export class InfiniteLogin extends EventTarget {
    constructor(config = {}) {
        super();
        this.config = config;
    }

    with(provider) {
        const config = PROVIDERS[provider]?.auth;
        if (!config) {
            this.error(`Unknown provider: ${provider}`);
            return;
        }

        const clientId = this.config[provider]?.clientId;
        if (!clientId) {
            this.error(`Missing client ID for ${provider}`);
            return;
        }

        const params = new URLSearchParams({
            client_id: clientId,
            redirect_uri: location.origin,
            scope: config.scope,
            ...config.params
        });

        this.openPopup(`${config.url}?${params}`);
    }

    openPopup(url) {
        const popup = globalThis.open(url, "Login", [
            "width=600",
            "height=600",
            `left=${screen.width/2 - 300}`,
            `top=${screen.height/2 - 300}`
        ].join());

        if (!popup) {
            this.error("Popup blocked");
            return;
        }

        const timer = setInterval(() => {
            try {
                if (popup.closed) {
                    clearInterval(timer);
                    return;
                }
                const code = new URLSearchParams(popup.location.search).get("code");
                if (code) {
                    popup.close();
                    clearInterval(timer);
                    this.dispatchEvent(new CustomEvent("code", { detail: code }));
                }
            } catch {
                // Ignoriere Cross-Origin Fehler
            }
        }, 100);

        setTimeout(() => {
            popup.close();
            clearInterval(timer);
            this.error("Login timeout");
        }, 120000);
    }

    error(msg) {
        const event = new ErrorEvent('error', {
            message: msg,
            error: new Error(msg)
        });
        this.dispatchEvent(event);
    }
}