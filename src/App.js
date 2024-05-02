import { Box } from '@chakra-ui/react';
import './App.css';
import Carts from './component/Carts';
import AppProvider from './context/AppContext';

function App() {
  return (
    <Box > 
      <AppProvider>
        <Carts />
      </AppProvider>
    </Box>
  );
}

export default App;
