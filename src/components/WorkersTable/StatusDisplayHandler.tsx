import { Employee } from "../../models/Employee";
import { t } from "i18next";

interface StatusDisplayHandlerProps {
  status: Employee['status'];
}

export const StatusDisplayHandler = ({ status }: StatusDisplayHandlerProps) => {
    if (status === "Employed") {
        return <span data-testid="status" className="status text-bg-success">{t(status)}</span>;
    } else if (status === "On leave") {
        return <span data-testid="status" className="status text-bg-warning text-dark">{t(status)}</span>;
    } else if (status === "Fired") {
        return <span data-testid="status" className="status text-bg-danger">{t(status)}</span>;
    }
    return null;
};
