import Image from 'next/image';

import diegosilvatechImage from 'assets/images/diegosilvatech.jpg';
import { Page, PageProps } from 'templates';

import * as s from 'templates/page/page.styles';

export type AboutPageProps = Omit<PageProps, 'children'>;

const AboutPage = ({
  description,
  image,
  tabTitle,
  pageTitle
}: AboutPageProps) => {
  return (
    <Page
      description={description}
      image={image}
      tabTitle={tabTitle}
      pageTitle={pageTitle}
    >
      {/* <s.Container>
        <s.Section>
          <Image
            alt="diegosilvatech"
            src={diegosilvatechImage}
            width="336"
            height="336"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
            priority
          />
        </s.Section>
      </s.Container> */}
    </Page>
  );
};

export { AboutPage };
