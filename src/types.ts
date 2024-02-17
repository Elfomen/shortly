export interface ButtonProps {
  label: string;
  color?: string;
  backgroundColor?: string;
  onPress?: () => void;
  radius?: number;
  size?: "small" | "medium" | "large";
  width?: string;
  type?: string;
}

export interface FooterLinkItemProps {
  name: string;
  uri: string;
}

export interface FooterLinkComponentProps {
  title: string;
  links: FooterLinkItemProps[];
}
