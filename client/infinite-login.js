class InfiniteLogin extends EventTarget {
    constructor(config = {}) {
        super();
        this.config = config;
        this.oauth = {
            github: {
                auth: {
                    url: "https://github.com/login/oauth/authorize",
                    scope: "user:email"
                }
            },
            google: {
                auth: {
                    url: "https://accounts.google.com/o/oauth2/v2/auth",
                    scope: "email profile",
                    params: {
                        response_type: "code",
                        access_type: "offline"
                    }
                }
            },
            worldId: {
                auth: {
                    url: "https://id.worldcoin.org/authorize",
                    scope: "openid",
                    params: {
                        response_type: "code"
                    }
                }
            },
            brightId: {
                auth: {
                    url: "https://app.brightid.org/auth",
                    scope: "profile",
                    params: {
                        response_type: "code",
                        context: "login"
                    }
                }
            }
        };
    }

    with(provider) {
        const config = this.oauth[provider]?.auth;
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
        const popup = window.open(url, "Login", [
            "width=600",
            "height=600",
            `left=${screen.width/2 - 300}`,
            `top=${screen.height/2 - 300}`
        ].join());

        if (!popup) {
            this.error("Popup blocked");
            return;
        }

        let timer = setInterval(() => {
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
            } catch {}
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