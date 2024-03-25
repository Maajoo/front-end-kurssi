import { CssBaseline, Tab, Tabs } from '@mui/material';
import './App.css'
import TodoList from './components/TodoList';
import Home from './components/Home';
import { useState } from 'react';





function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <CssBaseline />
          <Tabs value={selectedTab} onChange={handleTabChange} textColor="inherit" indicatorColor="primary">
            <Tab label="HOME" />
            <Tab label="TODOS" />
          </Tabs>

        {selectedTab === 0 && <Home />}
        {selectedTab === 1 && <TodoList />}

    </>
  )
}

export default App;
