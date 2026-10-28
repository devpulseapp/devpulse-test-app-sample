/** What the App, its page and its parts share: one module, which stays in the package once. */
export const decorate = (text: string, mark: string): string => `${mark} ${text} ${mark}`;
