// @ts-nocheck
import { Text } from 'components';
import { careerItems } from 'data/section-career.data';
import { formatDate, getDurationDate } from 'globals/helpers/date/formatDate';

import * as s from './section-career.styles';

const SectionCareer = () => {
  return (
    <s.CareerWrapper>
      <Text as="h2">Career</Text>

      {careerItems.map(job => {
        return (
          <s.JobWrapper key={job.id}>
            <Text as="h3">{job.title}</Text>
            <Text margin="sm">
              <Text
                as="a"
                href={job.companyUrl}
                target="_blank"
                rel="noreferrer"
              >
                {job.company}
              </Text>
              <Text as="span">・{job.location}</Text>
            </Text>
            <Text margin="sm">
              <Text as="span">{formatDate(job.startDate)}</Text>
              <Text as="span"> – </Text>
              <Text as="span">
                {job.endDate ? formatDate(job.endDate) : 'Present'}
              </Text>
              <Text as="span">・</Text>
              <Text as="span">
                {getDurationDate(job.startDate, job.endDate)}
              </Text>
            </Text>
          </s.JobWrapper>
        );
      })}
    </s.CareerWrapper>
  );
};

export { SectionCareer };
