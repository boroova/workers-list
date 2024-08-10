export interface Employee {
  uuid: string;
  name: string;
  surname: string;
  birthdate: string | null;
  street: string;
  city: string;
  postalCode: string;
  salary: number;
  status: string;
  phoneNumber: phonenumber | null;
}

type phonenumber = string | { countryCode: string; number: string };
