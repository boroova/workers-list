import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Employee } from '../../models/Employee'; // Adjust the import based on your directory structure
import { Container } from 'react-bootstrap';
import { Header } from '../../components/Header/Header';

interface EditProps {
    workers: Employee[];
    updateWorker: (worker: Employee) => void;
  }
  
  export const Edit = ({ updateWorker }: EditProps) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { worker } = location.state as { worker: Employee };
    const [editedWorker, setEditedWorker] = useState<Employee>(worker);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setEditedWorker({ ...editedWorker, [name]: value } as Employee);
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('Form submitted');
      console.log('Edited worker:', editedWorker);
      // Update the local workers array
      updateWorker(editedWorker);
      // Redirect to worker list page
      navigate('/');
    };

  return (
    <Container>
      <h2>Edit Worker</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={editedWorker.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Surname:
          <input
            type="text"
            name="surname"
            value={editedWorker.surname}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Salary:
          <input
            type="number"
            name="salary"
            value={editedWorker.salary}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Status:
          <input
            type="text"
            name="status"
            value={editedWorker.status}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </Container>
  );
};
