import { FooterLinkComponentProps } from "../types";

export const getFooterLinks = () => {
  const links: FooterLinkComponentProps[] = [
    {
      title: "Features",
      links: [
        {
          name: "Link Shortening",
          uri: "",
        },
        {
          name: "Branded Links",
          uri: "",
        },
        {
          name: "Analytics",
          uri: "",
        },
      ],
    },
    {
      title: "Ressources",
      links: [
        {
          name: "Blog",
          uri: "",
        },
        {
          name: "Developers",
          uri: "",
        },
        {
          name: "Support",
          uri: "",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          name: "About",
          uri: "",
        },
        {
          name: "Our Team",
          uri: "",
        },
        {
          name: "Careers",
          uri: "",
        },
        {
          name: "Contact",
          uri: "",
        },
      ],
    },
  ];

  return links;
};
