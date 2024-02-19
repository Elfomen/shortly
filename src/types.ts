export interface ButtonProps {
  label: string;
  color?: string;
  backgroundColor?: string;
  onPress?: () => void;
  radius?: number;
  size?: "small" | "medium" | "large";
  width?: string;
  type?: string;
  className?: string;
  loading?: boolean;
}

export interface FooterLinkItemProps {
  name: string;
  uri: string;
}

export interface FooterLinkComponentProps {
  title: string;
  links: FooterLinkItemProps[];
}

export interface LinksInterface {
  url: string;
  shorten: string;
}
