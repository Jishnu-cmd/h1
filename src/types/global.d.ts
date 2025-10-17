declare module "class-variance-authority" {
  // cva returns a function which itself can be called with variant props to produce a className string
  export function cva(...args: any[]): (opts?: Record<string, any>) => string;
  export type VariantProps<T = any> = Record<string, any>;
}

declare module "cmdk" {
  export const Command: any;
  export const CommandPrimitive: any;
  export default Command;
}

declare module "input-otp" {
  export const OTPInput: any;
  export const OTPInputContext: any;
  export default OTPInput;
}

declare module "sonner" {
  export const Toaster: any;
  export const toast: any;
  export default {};
}

declare module "clsx" {
  export type ClassValue = any;
  const clsx: (...args: any[]) => string;
  export { clsx };
  export default clsx;
}

declare module "lovable-tagger" {
  export function componentTagger(...args: any[]): any;
}

declare module "tailwindcss" {
  export type Config = any;
  const content: any;
  export { content as default };
}
