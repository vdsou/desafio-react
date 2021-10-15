import React from 'react';
import { DefaultLayout } from '../../components/DefaultLayout';
import ServersTable from '../../components/ServersTable';
import Summary from '../../components/Summary';

function Home() {
  return (
    <DefaultLayout>
      <Summary />
      <ServersTable />
    </DefaultLayout>
  );
}

export default Home;