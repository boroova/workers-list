import { initReactI18next } from "react-i18next";
import i18n from "i18next";

const resources = {
    en: {
        translation: {
            "employees": "Employees",
            "add": "Add",
            "name": "Name",
            "surname": "Surname",
            "salary": "Salary",
            "status": "Status",
            "edit": "Edit",
            "remove": "Remove",
            "home": "Home",
            "add new worker": "Add new worker"
        }
    },
    pl: {
        translation: {
            "employees": "Pracownicy",
            "add": "Dodaj",
            "name": "Imię",
            "surname": "Nazwisko",
            "salary": "Pensja",
            "status": "Status",
            "edit": "Edytuj",
            "remove": "Usuń",
            "home": "Strona główna",
            "add new worker": "Dodaj nowego pracownika",
            "Employed": "Zatrudniony",
            "On leave": "Na zwolnieniu",
            "Fired": "Zwolniony",
            "Name": "Imię",
            "Surname": "Nazwisko",
            "Birthdate": "Data urodzenia",
            "Street": "Adres",
            "City": "Miasto",
            "Postal Code": "Kod pocztowy",
            "Salary": "Pensja",
            "Phone number": "Numer telefonu",
            "Save": "Zapisz",
            "Choose worker status": "Wybierz status zatrudnienia",
            "Add": "Dodaj",
            "Worker": "pracownika"
        }    
        }
}

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en"
})

export default i18n;