import { useState, useEffect } from 'react';
import { Employee } from '../../models/Employee';
import { Container, Row, Col, Form as BootstrapForm, Button } from 'react-bootstrap';
import { t } from "i18next";

interface FormProps {
  initialWorker: Employee;
  onSubmit: (worker: Employee) => void;
}

export const EmployeeForm = ({ initialWorker, onSubmit }: FormProps) => {
  const [worker, setWorker] = useState<Employee>(initialWorker);

  useEffect(() => {
    setWorker(initialWorker);
  }, [initialWorker]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (event: React.ChangeEvent<any>) => {
    const { name, value } = event.target as HTMLInputElement | HTMLSelectElement;
  
    setWorker(prevWorker => ({
      ...prevWorker,
      [name]: value,
    } as Employee));
  };
  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(worker);
  };

  return (
    <Container>
      <h2 className="my-4">{worker.uuid ? t("edit") + " " + t("Worker") : t("Add") + " " + t("Worker")}</h2>
      <BootstrapForm onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <BootstrapForm.Group controlId="formName">
              <BootstrapForm.Label>{t("Name")}</BootstrapForm.Label>
              <BootstrapForm.Control
                type="text"
                name="name"
                value={worker.name || ''}
                onChange={handleInputChange}
                required
              />
            </BootstrapForm.Group>
          </Col>
          <Col md={6}>
            <BootstrapForm.Group controlId="formSurname">
              <BootstrapForm.Label>{t("Surname")}</BootstrapForm.Label>
              <BootstrapForm.Control
                type="text"
                name="surname"
                value={worker.surname || ''}
                onChange={handleInputChange}
                required
              />
            </BootstrapForm.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <BootstrapForm.Group controlId="formBirthdate">
              <BootstrapForm.Label>{t("Birthdate")}</BootstrapForm.Label>
              <BootstrapForm.Control
                type="date"
                name="birthdate"
                value={worker.birthdate || ''}
                onChange={handleInputChange}
                required
              />
            </BootstrapForm.Group>
          </Col>
          <Col md={6}>
            <BootstrapForm.Group controlId="formStreet">
              <BootstrapForm.Label>{t("Street")}</BootstrapForm.Label>
              <BootstrapForm.Control
                type="text"
                name="street"
                value={worker.street || ''}
                onChange={handleInputChange}
                required
              />
            </BootstrapForm.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <BootstrapForm.Group controlId="formCity">
              <BootstrapForm.Label>{t("City")}</BootstrapForm.Label>
              <BootstrapForm.Control
                type="text"
                name="city"
                value={worker.city || ''}
                onChange={handleInputChange}
                required
              />
            </BootstrapForm.Group>
          </Col>
          <Col md={6}>
            <BootstrapForm.Group controlId="formPostalCode">
              <BootstrapForm.Label>{t("Postal Code")}</BootstrapForm.Label>
              <BootstrapForm.Control
                type="text"
                name="postalCode"
                value={worker.postalCode || ''}
                onChange={handleInputChange}
                required
              />
            </BootstrapForm.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <BootstrapForm.Group controlId="formSalary">
              <BootstrapForm.Label>{t("Salary")}</BootstrapForm.Label>
              <BootstrapForm.Control
                type="number"
                name="salary"
                value={worker.salary || 0}
                onChange={handleInputChange}
                required
              />
            </BootstrapForm.Group>
          </Col>
          <Col md={6}>
            <BootstrapForm.Group controlId="formPhoneNumber">
              <BootstrapForm.Label>{t("Phone number")}</BootstrapForm.Label>
              <BootstrapForm.Control
                type="tel"
                name="phoneNumber"
                value={typeof worker.phoneNumber === 'string' ? worker.phoneNumber : ''}
                onChange={handleInputChange}
                required
              />
            </BootstrapForm.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
          <BootstrapForm.Group controlId="formStatus">
            <BootstrapForm.Label>Status</BootstrapForm.Label>
            <BootstrapForm.Select
              name="status"
              value={worker.status || ''}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>--- {t("Choose worker status")} ---</option>
              <option value="Employed">{t("Employed")}</option>
              <option value="On leave">{t("On leave")}</option>
              <option value="Fired">{t("Fired")}</option>
            </BootstrapForm.Select>
          </BootstrapForm.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
        {t("Save")}
        </Button>
      </BootstrapForm>
    </Container>
  );
};
