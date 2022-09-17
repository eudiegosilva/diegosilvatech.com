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
              <a href={job.companyUrl} target="_blank" rel="noreferrer">
                {job.company}
              </a>
              <span>・{job.location}</span>
            </Text>
            <Text margin="sm">
              <span>{formatDate(job.startDate)}</span>
              <span> – </span>
              <span>{job.endDate ? formatDate(job.endDate) : 'Present'}</span>
              <span>・</span>
              <span>{getDurationDate(job.startDate, job.endDate)}</span>
            </Text>
          </s.JobWrapper>
        );
      })}
    </s.CareerWrapper>
  );
};

export { SectionCareer };
