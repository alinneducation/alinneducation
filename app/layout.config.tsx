import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo"
        >
          <circle cx={12} cy={12} r={12} fill="currentColor" />
        </svg>
        Alinn Education
      </>
    ),
  },
  links: [
    {
      text: "Home",
      url: "/",
      active: "nested-url",
    },
    {
      text: "Grade 12",
      url: "/courses/grade-12",
      active: "nested-url",
    },
    {
      text: "Teachers",
      url: "/teachers",
      active: "nested-url",
    },
    {
      text: "About Us",
      url: "/aboutus",
      active: "nested-url",
    },
    {
      text: "Contact Us",
      url: "/contactus",
      active: "nested-url",
    },
  ],
};
