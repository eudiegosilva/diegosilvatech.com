import { ErrorMessage, Navbar } from 'components';
import { PageContent, PageContainer } from 'page-structure';

export default function Custom404() {
  return (
    <PageContainer>
      <Navbar />
      <PageContent>
        <ErrorMessage code={404} />
      </PageContent>
    </PageContainer>
  );
}
