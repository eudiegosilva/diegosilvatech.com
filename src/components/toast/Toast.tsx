import * as ToastPrimitive from '@radix-ui/react-toast';
import { Icon } from 'components';

import * as s from './toast.styles';

export type ToastProps = {
  title: string;
  description: string;
  variant: 'success' | 'error';
  showToast: boolean;
  setShowToast: (showToast: boolean) => void;
};

const Toast = ({
  title,
  description,
  variant,
  showToast,
  setShowToast
}: ToastProps) => {
  return (
    <ToastPrimitive.Provider>
      <s.ToastWrapper open={showToast} onOpenChange={setShowToast}>
        <s.IconWrapper variant={variant}>
          <Icon.MessageCheckIcon />
        </s.IconWrapper>
        <div>
          <s.Title>{title}</s.Title>
          <s.Description>{description}</s.Description>
        </div>
        <s.Close aria-label="Close">
          <span aria-hidden>×</span>
        </s.Close>
      </s.ToastWrapper>
      <s.Viewport />
    </ToastPrimitive.Provider>
  );
};

export { Toast };
