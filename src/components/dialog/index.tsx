import { ReactNode } from 'react';

import {
  Content,
  Overlay,
  Portal,
  Root,
  Trigger,
  Title,
  Description,
} from './styles';

type DialogProps = {
  children: ReactNode;
  trigger: JSX.Element;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function Dialog({ children, trigger, open, onOpenChange }: DialogProps) {
  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Trigger asChild>{trigger}</Trigger>
      <Portal>
        <Title></Title>
        <Description></Description>
        <Overlay />
        <Content>{children}</Content>
      </Portal>
    </Root>
  );
}