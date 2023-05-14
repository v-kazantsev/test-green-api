import classNames from 'classnames';
import './v-stack.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
}

export const VStack = ({ children, className }: Props) => (
  <div className={classNames("v-stack", className)}>
    {children}
  </div>
);
