import { Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { LanguageSelector } from "../../LanguageSelector/LanguageSelector";
import { t } from "i18next";

export const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">{t('home')}</Nav.Link>
                    <Nav.Link as={Link} to="/add">{t('add new worker')}</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <LanguageSelector />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
