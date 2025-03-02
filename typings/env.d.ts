declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_NAME: string;
      CLIENT_ID: string;
      CLIENT_SECRET: string;
      NEXTAUTH_URL: string;
      NEXT_PUBLIC_DOMAIN: string;
      NEXTAUTH_SECRET: string;
      NEXT_PUBLIC_URL: string;
      RESEND_API_KEY: string;
    }
  }
}

export {};
