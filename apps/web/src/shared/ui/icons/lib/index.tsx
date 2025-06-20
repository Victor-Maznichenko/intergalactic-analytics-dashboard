import type { ReactElement } from 'react';

type IconProps = {
  size?: number;
  fill?: string;
  className?: string;
};
export type IconType = (props: IconProps) => ReactElement | null;

export const withDefaultProps =
  (Icon: IconType) =>
  ({ size, ...props }: IconProps): JSX.Element => <Icon size={size} {...props} />;
