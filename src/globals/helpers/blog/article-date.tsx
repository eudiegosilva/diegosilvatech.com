import { parseISO, format } from 'date-fns';

type ArticleDateProps = {
  dateString: string;
};

function ArticleDate({ dateString }: ArticleDateProps) {
  if (!dateString) return <div />;

  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLL	d, yyyy')}</time>;
}

export { ArticleDate };
