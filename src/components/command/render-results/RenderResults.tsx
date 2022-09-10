// @ts-nocheck
import { KBarResults, useDeepMatches } from 'kbar';

import { ResultItem } from '../result-item/ResultItem';

import * as s from './render-results.styles';

const RenderResults = () => {
  const { results } = useDeepMatches();
  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <s.GroupName>{item}</s.GroupName>
        ) : (
          <ResultItem action={item} active={active}>
            {item.name}
          </ResultItem>
        )
      }
    ></KBarResults>
  );
};

export { RenderResults };
