export const Routes = {
  Home: "/",
  AboutMe: "about-me",
  Blog: "/blog",
  Projects: "/projects",
} as const;

export type Routes = typeof Routes[keyof typeof Routes];
