export interface ButtonProps {
  label: string;
  color?: string;
  backgroundColor?: string;
  onPress: () => void;
  radius: number;
  size: "small" | "medium" | "large";
}
