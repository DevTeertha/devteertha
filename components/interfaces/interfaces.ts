export interface TypewritingRenderArgs {
  currentText: string;
  fullCurrentText: string;
}
export interface imageI {
  src: string;
  className?: string;
}
export interface serviceI {
  title: string;
  description: string;
  icon: string;
}
export interface portfolioI {
  name: string;
  description: string;
  images: string[];
  features: [];
  technology: object;
  links: object;
}
export interface skillsI {
  name: string;
  percentage: number;
  icon: string;
}
