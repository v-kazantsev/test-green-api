import classNames from 'classnames';
import './h-stack.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
}

export const HStack = ({ children, className }: Props) => (
  <div className={classNames("h-stack", className)}>
    {children}
  </div>
);
