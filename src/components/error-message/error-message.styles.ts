import { styled } from 'styles/stitches.config';

import { Container } from 'components/container/container.styles';

export const ErrorMessageWrapper = styled('div', {
  height: 'calc(100vh - 20px)',
  textAlign: 'center'
});
export const ErrorMessageContainer = styled(Container, {
  height: 'calc(100% - 80px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const ErrorMessageContent = styled('div', {});
