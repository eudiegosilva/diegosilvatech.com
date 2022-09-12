// @ts-nocheck
import { useRef } from 'react';

import * as ToastPrimitive from '@radix-ui/react-toast';
import { checkIcon } from 'assets/icons';
import Lottie from 'lottie-react';

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
  const verifiedRef = useRef();
  return (
    <ToastPrimitive.Provider>
      <s.ToastWrapper open={showToast} onOpenChange={setShowToast}>
        <s.IconWrapper variant={variant}>
          <Lottie
            lottieRef={verifiedRef}
            style={{ width: 20, height: 20 }}
            animationData={checkIcon}
            loop={true}
            autoplay={true}
          />
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
