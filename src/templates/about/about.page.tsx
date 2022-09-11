import Image from 'next/image';

import diegosilvatechImage from 'assets/images/diegosilvatech.jpg';
import { GradientTitle } from 'components';
import { PageContent, PageHead, PageHeadProps, PageStructure } from 'templates';

export type AboutPageProps = {
  pageTitle: string;
} & PageHeadProps;

const AboutPage = ({
  description,
  image,
  tabTitle,
  pageTitle
}: AboutPageProps) => {
  return (
    <PageStructure>
      <PageHead description={description} image={image} tabTitle={tabTitle} />
      <PageContent>
        {pageTitle && <GradientTitle>{pageTitle}</GradientTitle>}
        <Image
          className="author-image"
          alt="diegosilvatech"
          src={diegosilvatechImage}
          width="336"
          height="336"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
          priority
        />
      </PageContent>
    </PageStructure>
  );
};

export { AboutPage };
