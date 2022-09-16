// @ts-nocheck
import { Typography } from 'components';
import { careerItems } from 'data/section-career.data';
import { formatDate, getDurationDate } from 'globals/helpers/date/formatDate';

import * as s from './section-career.styles';

const SectionCareer = () => {
  return (
    <s.CareerWrapper>
      <h2>Career</h2>

      {careerItems.map(job => {
        return (
          <s.JobWrapper key={job.id}>
            <s.JobTitle>{job.title}</s.JobTitle>
            <Typography.Paragraph margin="sm">
              <a href={job.companyUrl} target="_blank" rel="noreferrer">
                {job.company}
              </a>
              <span>・{job.location}</span>
            </Typography.Paragraph>
            <Typography.Paragraph margin="sm">
              <span>{formatDate(job.startDate)}</span>
              <span> – </span>
              <span>{job.endDate ? formatDate(job.endDate) : 'Present'}</span>
              <span>・</span>
              <span>{getDurationDate(job.startDate, job.endDate)}</span>
            </Typography.Paragraph>
          </s.JobWrapper>
        );
      })}
    </s.CareerWrapper>
  );
};

export { SectionCareer };
