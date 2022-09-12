import { Typography } from 'components';

import * as s from './section-bio.styles';

const SectionBio = () => {
  return (
    <s.BioWrapper>
      <h2>Bio</h2>

      <div>
        <Typography.Paragraph>
          This content was made for organizers of events, interviews and talks.
          Just copy-and-paste.
        </Typography.Paragraph>
        <blockquote>
          <Typography.Paragraph>
            Diego Silva is a Brazilian Frontend Developer. He currently lives in
            São Paulo and works with Developer Experience at Neon Bank. He is
            passionate about beautiful and smart user interfaces. He has
            extensive experience with selection processes and resume building.
            He is the founder and Community Manager of 99juniors.
          </Typography.Paragraph>
        </blockquote>
      </div>
    </s.BioWrapper>
  );
};

export { SectionBio };
