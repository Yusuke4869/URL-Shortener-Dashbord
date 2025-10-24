const readEnv = (key: string): string | undefined => {
  const value = process.env[key];
  return typeof value === "string" && value.length > 0 ? value : undefined;
};

const required = (key: string): string => {
  const value = readEnv(key);
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

export const env = {
  AUTH0_SECRET: required("AUTH0_SECRET"),
  APP_BASE_URL: required("APP_BASE_URL"),
  AUTH0_DOMAIN: required("AUTH0_DOMAIN"),
  AUTH0_CLIENT_ID: required("AUTH0_CLIENT_ID"),
  AUTH0_CLIENT_SECRET: required("AUTH0_CLIENT_SECRET"),
} as const;
