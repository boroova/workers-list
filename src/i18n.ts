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
            "add new worker": "Dodaj nowego pracownika"
    }    
}
}

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en"
})

export default i18n;