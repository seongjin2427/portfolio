import { Outlet } from 'react-router-dom';
import Layout from '../layout/Layout';

function Main() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
export default Main;
