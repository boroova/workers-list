import { useNavigate } from 'react-router-dom';
import { Employee } from '../../models/Employee'; // Adjust the import based on your directory structure
import { EmployeeForm } from '../../components/Form/Form';

interface AddProps {
  addWorker: (worker: Employee) => void;
}

export const Add = ({ addWorker }: AddProps) => {
  const navigate = useNavigate();
  const initialWorker: Employee = {
    uuid: '',
    name: '',
    surname: '',
    birthdate: '',
    street: '',
    city: '',
    postalCode: '',
    salary: 0,
    status: '',
    phoneNumber: ''
  };

  const handleSubmit = (newWorker: Employee) => {
    console.log('New worker:', newWorker);
    // Add the new worker to the local workers array
    addWorker(newWorker);
    // Redirect to worker list page
    navigate('/');
  };

  return (
    <EmployeeForm initialWorker={initialWorker} onSubmit={handleSubmit} />
  );
};
