import AppRoutes from './utils/AppRoutes';
import Layout from './components/layout/Layout';
import { RsvpProvider } from './utils/RsvpContext';
import './styles/main.scss'

function App() {
  return (
    <RsvpProvider>
      <div className="App">
        <Layout>
          <div className="appRoutes">
            <AppRoutes />
          </div>
        </Layout>
      </div>
    </RsvpProvider>
  );
}

export default App;
