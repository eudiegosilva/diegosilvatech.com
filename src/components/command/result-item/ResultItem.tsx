import { forwardRef } from 'react';

import * as s from './result-item.styles';

const getResultStyle = active => {
  return {
    padding: '12px 16px',
    background: active
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
    cursor: 'pointer',
    color: active ? '#f2f2f2' : '#8f9ba8'
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
    >
      <s.Action>
        {action.icon && action.icon}
        <s.ActionRow>
          <span>{action.name}</span>
        </s.ActionRow>
      </s.Action>
      {action.shortcut?.length ? (
        <s.Shortcut aria-hidden>
          {action.shortcut.map(shortcut => (
            <s.Kbd key={shortcut}>{shortcut}</s.Kbd>
          ))}
        </s.Shortcut>
      ) : null}
    </s.Box>
  );
});

ResultItem.displayName = 'ResultItem';

export { ResultItem };
