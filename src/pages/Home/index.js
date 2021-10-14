import DefaultLayout from '../../components/DefaultLayout';
import ServersTable from '../../components/ServersTable';
import Sumary from '../../components/Sumary';

function Home() {
  return (
    <DefaultLayout>
      <Sumary />
      <ServersTable />
    </DefaultLayout>
  );
}

export default Home;