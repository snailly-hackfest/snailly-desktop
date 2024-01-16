import { PageWrapper } from '@/layout';
import LogActivityModule from '@/modules/log-activity';

const LogActivity = () => {
  return (
    <PageWrapper layoutType='base' title='Log Aktivitas'>
      <LogActivityModule />
    </PageWrapper>
  );
};

export default LogActivity;
