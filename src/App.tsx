import { Container } from 'react-bootstrap';
import './App.css';
import { Header } from './components/Header/Header';
import { useEffect, useState } from 'react';
// Import our custom CSS
import './scss/styles.scss'
import { Employee } from './models/Employee';
import { Search } from './components/Search/Search';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [workers, setWorkers] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/workers');
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

  return (
    <>
      <Container>
        <Header />
        <h1>Employees</h1>
        <Search source={workers}/>
      </Container>
    </>
  );
}

export default App;
