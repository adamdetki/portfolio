import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export default function Flex({ children, className = '', ...props }: Props) {
  return (
    <div className={`flex ${className}`} {...props}>
      {children}
    </div>
  );
}
