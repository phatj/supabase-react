/// <reference types="vite/client" />

interface Envs {
  ANALYZE?: "true";
  VITE_SUPABASE_URL: string;
  VITE_SUPABASE_KEY: string;
}

interface ImportMetaEnv extends Envs {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace NodeJS {
  export interface ProcessEnv extends Envs {}
}
