import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Header } from './components/Header/Header';
import './scss/styles.scss';
import { Employee } from './models/Employee';
import { Search } from './components/Search/Search';
import { v4 as uuidv4 } from 'uuid';
import { Edit } from './pages/Edit/Edit';
import { Add } from './pages/Add/Add';
import { useTranslation } from 'react-i18next';

function App() {
  const [workers, setWorkers] = useState<Employee[]>([]);
  const {t} = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/boroova/mock-api/workers');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Employee[] = await response.json();

        // Add a UUID to each employee object if it doesn't already have one
        const dataWithUUID = data.map(employee => ({
          ...employee,
          uuid: employee.uuid || uuidv4(), // Use existing uuid if available, otherwise generate a new one
        }));

        setWorkers(dataWithUUID);
        console.log(dataWithUUID); // Logs the data with UUIDs
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const updateWorker = (updatedWorker: Employee) => {
    setWorkers(prevWorkers =>
      prevWorkers.map(worker =>
        worker.uuid === updatedWorker.uuid ? updatedWorker : worker
      )
    );
  };

  const addWorker = (newWorker: Employee) => {
    if (!newWorker.uuid) {
      newWorker.uuid = uuidv4();
    }
    setWorkers(prevWorkers => [...prevWorkers, newWorker])
  };

  return (
    <Container>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>{t('employees')}</h1>
              <Search source={workers} />
            </>
          }
        />
        <Route
          path="/add"
          element={<Add addWorker={addWorker} />}
        />
        <Route
          path="/edit/:uuid"
          element={<Edit updateWorker={updateWorker} />}
        />
      </Routes>
    </Container>
  );
}

export default App;
