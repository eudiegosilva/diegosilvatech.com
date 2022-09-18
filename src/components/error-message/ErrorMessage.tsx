import { Text, Navbar, ShortcutError } from 'components';

import * as s from './error-message.styles';

export type ErrorMessageProps = {
  code: number;
};

const ErrorMessage = ({ code }: ErrorMessageProps) => {
  let title = '500';
  let description = "Something isn't right.";
  if (code === 404) {
    title = '404';
    description = "This page doesn't exist.";
  }
  return (
    <s.ErrorMessageWrapper>
      <Navbar />
      <s.ErrorMessageContainer>
        <s.ErrorMessageContent>
          <Text as="h1">{title}</Text>
          <ShortcutError />
          <Text>{description}</Text>
        </s.ErrorMessageContent>
      </s.ErrorMessageContainer>
    </s.ErrorMessageWrapper>
  );
};

export { ErrorMessage };
