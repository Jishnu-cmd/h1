declare module "class-variance-authority" {
  export function cva(...args: any[]): (opts?: Record<string, any>) => string;
  export type VariantProps<T = any> = Record<string, any>;
}

declare module "lovable-tagger" {
  export function componentTagger(...args: any[]): any;
}

declare module "tailwindcss" {
  export type Config = any;
  const content: any;
  export { content as default };
}
