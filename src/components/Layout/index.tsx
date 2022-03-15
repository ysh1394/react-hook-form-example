// eslint-disable-next-line import/prefer-default-export

import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

// import LoadingBar from '@/components/Common/LoadingBar';
// import useGlobalLoadingState from '@/hooks/useGlobalLoadingState';

import LayoutTemplate from './LayoutTemplate';
import { otherSiteLinks, routes } from './PathData';

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  const { push } = useRouter();
  // const isLoading = useGlobalLoadingState();

  const onPush = (path: string) => {
    push({ pathname: path });
  };

  return (
    <>
      {/* <LoadingBar isLoading={isLoading} /> */}
      <LayoutTemplate
        businessName="tp-distribution-console"
        headerPages={otherSiteLinks}
        headerTitle="물류 콘솔"
        navItems={routes}
        navTitle="The Pirates"
        navWidth={240}
        onClickItem={onPush}
      >
        {children}
      </LayoutTemplate>
    </>
  );
};

export default Layout;
