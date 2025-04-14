export const PROVIDERS = {
    github: {
        auth: {
            url: "https://github.com/login/oauth/authorize",
            scope: "user:email"
        },
        token: {
            url: "https://github.com/login/oauth/access_token",
            type: "token" // Default: application/json
        },
        user: {
            url: "https://api.github.com/user"
        },
        label: "GitHub",
        svg: "<svg viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z\"/></svg>"
    },
    google: {
        auth: {
            url: "https://accounts.google.com/o/oauth2/v2/auth",
            scope: "email profile",
            params: {
                response_type: "code",
                access_type: "offline"
            }
        },
        token: {
            url: "https://oauth2.googleapis.com/token",
            type: "Bearer",
            tokenRequestAsForm: true, // Specify form urlencoded
            params: {
                grant_type: "authorization_code"
            }
        },
        user: {
            url: "https://www.googleapis.com/oauth2/v2/userinfo"
        },
        label: "Google",
        svg: "<svg viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z\"/></svg>"
    },
    auth0: {
        auth: {
            url: "https://{tenant}.auth0.com/authorize",
            scope: "openid profile email",
            params: {
                response_type: "code"
            }
        },
        token: {
            url: "https://{tenant}.auth0.com/oauth/token",
            type: "Bearer",
            tokenRequestAsForm: true, // Specify form urlencoded
            params: {
                grant_type: "authorization_code"
            }
        },
        user: {
            url: "https://{tenant}.auth0.com/userinfo"
        },
        label: "Auth0",
        svg: "<svg viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M21.98 7.448L19.62 0H4.347L2.02 7.448c-1.352 4.312.03 9.206 3.815 12.015L12.003 24l6.137-4.552c3.754-2.794 5.182-7.688 3.83-12z\"/></svg>"
    },
    twitter: {
        auth: {
            url: "https://twitter.com/i/oauth2/authorize",
            scope: "users.read tweet.read",
            params: {
                response_type: "code"
            }
        },
        token: {
            url: "https://api.twitter.com/2/oauth2/token",
            type: "Bearer", // Default: application/json
            params: {
                grant_type: "authorization_code"
            }
        },
        user: {
            url: "https://api.twitter.com/2/users/me"
        },
        label: "Twitter",
        svg: "<svg viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z\"/></svg>"
    },
    microsoft: {
        auth: {
            url: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
            scope: "user.read",
            params: {
                response_type: "code"
            }
        },
        token: {
            url: "https://login.microsoftonline.com/common/oauth2/v2.0/token",
            type: "Bearer",
            tokenRequestAsForm: true, // Specify form urlencoded
            params: {
                grant_type: "authorization_code"
            }
        },
        user: {
            url: "https://graph.microsoft.com/v1.0/me"
        },
        label: "Microsoft",
        svg: "<svg viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z\"/></svg>"
    },
    facebook: {
        auth: {
            url: "https://facebook.com/v18.0/dialog/oauth",
            scope: "email public_profile",
            params: {
                response_type: "code"
            }
        },
        token: {
            url: "https://graph.facebook.com/v18.0/oauth/access_token",
            type: "Bearer", // Default: application/json
            params: {
                grant_type: "authorization_code"
            }
        },
        user: {
            url: "https://graph.facebook.com/v18.0/me?fields=id,name,email,picture"
        },
        label: "Facebook",
        svg: "<svg viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z\"/></svg>"
    },
    discord: {
        auth: {
            url: "https://discord.com/api/oauth2/authorize",
            scope: "identify email",
            params: {
                response_type: "code"
            }
        },
        token: {
            url: "https://discord.com/api/oauth2/token",
            type: "Bearer",
            tokenRequestAsForm: true, // Discord requires form urlencoded
            params: {
                grant_type: "authorization_code"
            }
        },
        user: {
            url: "https://discord.com/api/users/@me"
        },
        label: "Discord",
        svg: "<svg viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z\"/></svg>"
    },
    linkedin: {
        auth: {
            url: "https://www.linkedin.com/oauth/v2/authorization",
            scope: "r_liteprofile r_emailaddress",
            params: {
                response_type: "code"
            }
        },
        token: {
            url: "https://www.linkedin.com/oauth/v2/accessToken",
            type: "Bearer",
            tokenRequestAsForm: true, // Specify form urlencoded
            params: {
                grant_type: "authorization_code"
            }
        },
        user: {
            url: "https://api.linkedin.com/v2/me"
        },
        label: "LinkedIn",
        svg: "<svg viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z\"/></svg>"
    },
    gitlab: {
        auth: {
            url: "https://gitlab.com/oauth/authorize",
            scope: "read_user email",
            params: {
                response_type: "code"
            }
        },
        token: {
            url: "https://gitlab.com/oauth/token",
            type: "Bearer", // Default: application/json
            params: {
                grant_type: "authorization_code"
            }
        },
        user: {
            url: "https://gitlab.com/api/v4/user"
        },
        label: "GitLab",
        svg: "<svg viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M21.94 13.11l-1.05-3.22c0-.03-.01-.06-.02-.09l-2.11-6.48a.859.859 0 0 0-.8-.57c-.36 0-.68.25-.79.58l-2.07 6.39H8.9L6.83 3.33a.851.851 0 0 0-.79-.58c-.37 0-.69.25-.8.58L3.13 9.82v.01l-1.05 3.22c-.16.5.01 1.04.44 1.34l9.22 6.71c.17.12.39.12.56 0l9.22-6.71c.43-.3.6-.84.44-1.34\"/></svg>"
    },
    bitbucket: {
        auth: {
            url: "https://bitbucket.org/site/oauth2/authorize",
            scope: "account email",
            params: {
                response_type: "code"
            }
        },
        token: {
            url: "https://bitbucket.org/site/oauth2/access_token",
            type: "Bearer",
            tokenRequestAsForm: true, // Specify form urlencoded
            params: {
                grant_type: "authorization_code"
            }
        },
        user: {
            url: "https://api.bitbucket.org/2.0/user"
        },
        label: "Bitbucket",
        svg: "<svg viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M2.65 3C2.3 3 2 3.3 2 3.65v.12l2.73 16.5c.07.42.43.73.85.73h13.05c.31 0 .59-.22.64-.54L22 3.77a.643.643 0 0 0-.54-.77H2.65zM14.87 14H9.02L7.73 8h8.39l-1.25 6z\"/></svg>"
    },
    slack: {
        auth: {
            url: "https://slack.com/oauth/v2/authorize",
            scope: "users:read users:read.email",
            params: {
                response_type: "code"
            }
        },
        token: {
            url: "https://slack.com/api/oauth.v2.access",
            type: "Bearer",
            tokenRequestAsForm: true, // Specify form urlencoded
            params: {
                grant_type: "authorization_code"
            }
        },
        user: {
            url: "https://slack.com/api/users.identity"
        },
        label: "Slack",
        svg: "<svg viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M6 15a2 2 0 1 1 0 4c-1.105 0-2-.895-2-2s.895-2 2-2zm6.5-4a2 2 0 1 1 0 4H9a2 2 0 1 1 0-4h3.5zm-6.5 0a2 2 0 1 1 0 4c-1.105 0-2-.895-2-2s.895-2 2-2zm13 0a2 2 0 1 1 0 4c-1.105 0-2-.895-2-2s.895-2 2-2zm-6.5-4a2 2 0 1 1 0 4H9a2 2 0 1 1 0-4h3.5zm-6.5 0a2 2 0 1 1 0 4c-1.105 0-2-.895-2-2s.895-2 2-2zm13 0a2 2 0 1 1 0 4c-1.105 0-2-.895-2-2s.895-2 2-2zm-6.5-4a2 2 0 1 1 0 4H9a2 2 0 1 1 0-4h3.5z\"/></svg>"
    },
    apple: {
        auth: {
            url: "https://appleid.apple.com/auth/authorize",
            scope: "name email",
            params: {
                response_type: "code",
                response_mode: "form_post"
            }
        },
        token: {
            url: "https://appleid.apple.com/auth/token",
            type: "Bearer",
            tokenRequestAsForm: true, // Specify form urlencoded
            params: {
                grant_type: "authorization_code"
            }
        },
        user: {
            url: "https://appleid.apple.com/auth/userinfo"
        },
        label: "Apple",
        svg: "<svg viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M17.05 20.28c-.98.95-2.05.88-3.09.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.37C2.32 14.85 3.06 6.13 9.14 5.87c1.51-.06 2.6.53 3.48.53.87 0 2.52-.66 4.26-.45 7.24 1.13 6.48 12.39.17 14.33zm-4.41-17.7c-3.4.23-6.2 3.05-5.94 6.13 2.77.21 6.21-2.73 5.94-6.13z\"/></svg>"
    },
    worldId: {
        auth: {
            url: "https://id.worldcoin.org/authorize",
            scope: "openid",
            params: {
                response_type: "code"
            }
        },
        token: {
            url: "https://id.worldcoin.org/token",
            type: "Bearer", // Default: application/json
            params: {
                grant_type: "authorization_code"
            }
        },
        user: {
            url: "https://id.worldcoin.org/userinfo"
        },
        label: "World ID",
        svg: "<svg viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12 6 6 0 010-12z\"/></svg>"
    },
    brightId: {
        auth: {
            url: "https://app.brightid.org/auth",
            scope: "profile",
            params: {
                response_type: "code",
                context: "login"
            }
        },
        token: {
            url: "https://app.brightid.org/oauth2/token",
            type: "Bearer", // Default: application/json
            params: {
                grant_type: "authorization_code"
            }
        },
        user: {
            url: "https://app.brightid.org/v2/userinfo"
        },
        label: "BrightID",
        svg: "<svg viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z\"/></svg>"
    }
};