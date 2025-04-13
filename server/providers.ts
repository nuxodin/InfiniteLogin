export const PROVIDERS = {
  github: {
    auth: {
      url: "https://github.com/login/oauth/authorize",
      scope: "user:email"
    },
    token: {
      url: "https://github.com/login/oauth/access_token",
      type: "token"
    },
    user: {
      url: "https://api.github.com/user"
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
    },
    token: {
      url: "https://oauth2.googleapis.com/token",
      type: "Bearer",
      params: {
        grant_type: "authorization_code"
      }
    },
    user: {
      url: "https://www.googleapis.com/oauth2/v2/userinfo"
    }
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
      type: "Bearer",
      params: {
        grant_type: "authorization_code"
      }
    },
    user: {
      url: "https://id.worldcoin.org/userinfo"
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
    },
    token: {
      url: "https://app.brightid.org/oauth2/token",
      type: "Bearer",
      params: {
        grant_type: "authorization_code"
      }
    },
    user: {
      url: "https://app.brightid.org/v2/userinfo"
    }
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
      type: "Bearer",
      params: {
        grant_type: "authorization_code"
      }
    },
    user: {
      url: "https://api.twitter.com/2/users/me"
    }
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
      params: {
        grant_type: "authorization_code"
      }
    },
    user: {
      url: "https://appleid.apple.com/auth/userinfo"
    }
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
      params: {
        grant_type: "authorization_code"
      }
    },
    user: {
      url: "https://graph.microsoft.com/v1.0/me"
    }
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
      type: "Bearer",
      params: {
        grant_type: "authorization_code"
      }
    },
    user: {
      url: "https://graph.facebook.com/v18.0/me?fields=id,name,email,picture"
    }
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
      params: {
        grant_type: "authorization_code"
      }
    },
    user: {
      url: "https://discord.com/api/users/@me"
    }
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
      params: {
        grant_type: "authorization_code"
      }
    },
    user: {
      url: "https://api.linkedin.com/v2/me"
    }
  }
} as const;

// Type-Export für TypeScript
export type Provider = keyof typeof PROVIDERS;