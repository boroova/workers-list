import { useLocation, useNavigate } from 'react-router-dom';
import { Employee } from '../../models/Employee'; // Adjust the import based on your directory structure
import { EmployeeForm } from '../../components/Form/Form';

interface EditProps {
  updateWorker: (worker: Employee) => void;
}

export const Edit = ({ updateWorker }: EditProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { worker } = location.state as { worker: Employee };

  const handleSubmit = (updatedWorker: Employee) => {
    console.log('Edited worker:', updatedWorker);
    // Update the local workers array
    updateWorker(updatedWorker);
    // Redirect to worker list page
    navigate('/');
  };

  return (
    <EmployeeForm initialWorker={worker} onSubmit={handleSubmit} />
  );
};
