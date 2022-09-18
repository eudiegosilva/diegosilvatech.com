// @ts-nocheck
import { forwardRef } from 'react';

import { Text } from 'components';

import * as s from './result-item.styles';

const getResultStyle = active => {
  return {
    padding: '$sm $md',
    background: active ? '$transparent-black-07' : '$transparent-black-03',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
    cursor: 'pointer',
    color: active ? '$text-contrast-high' : '$text-contrast-low',
    kbd: {
      color: active ? '$text-white' : '$brand-primary-09',
      backgroundColor: active ? '$brand-primary-09' : '$brand-primary-03'
    }
  };
};

const ResultItem = forwardRef(({ action, active }, ref) => {
  if (active) {
    action.icon.props.lottieRef.current?.play();
  } else {
    action.icon.props.lottieRef.current?.stop();
  }

  return (
    <s.Box
      ref={ref}
      css={getResultStyle(active)}
      onMouseEnter={() => action.icon.props.lottieRef.current?.play()}
      onMouseLeave={() => action.icon.props.lottieRef.current?.stop()}
      className="command-box"
    >
      <s.Action>
        {action.icon && action.icon}
        <s.ActionRow>
          <Text as="span">{action.name}</Text>
        </s.ActionRow>
      </s.Action>
      {action.shortcut?.length ? (
        <s.Shortcut aria-hidden>
          {action.shortcut.map(shortcut => (
            <Text as="kbd" key={shortcut}>
              {shortcut}
            </Text>
          ))}
        </s.Shortcut>
      ) : null}
    </s.Box>
  );
});

ResultItem.displayName = 'ResultItem';

export { ResultItem };
