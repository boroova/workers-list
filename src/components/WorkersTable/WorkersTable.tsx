import { useState, useEffect } from "react";
import { Employee } from "../../models/Employee";
import { Link } from "react-router-dom";
import { t } from "i18next";

export interface TableData {
    data: Employee[];
}

export const WorkersTable = ({ data }: TableData) => {
    const [sortedData, setSortedData] = useState<Employee[]>([]);
    const [isAscending, setIsAscending] = useState(true);
    const [sortedColumn, setSortedColumn] = useState<keyof Employee | null>(null);

    useEffect(() => {
        setSortedData(data);
    }, [data]);

    const sort = (clickedColumn: keyof Employee) => {
        const sortedArray = [...sortedData].sort((a: Employee, b: Employee) => {
            if (a[clickedColumn] == null || b[clickedColumn] == null) return 0;

            if (typeof a[clickedColumn] === "number" && typeof b[clickedColumn] === "number") {
                return isAscending ? a[clickedColumn] - b[clickedColumn] : b[clickedColumn] - a[clickedColumn];
            } else if (typeof a[clickedColumn] === "string" && typeof b[clickedColumn] === "string") {
                return isAscending ? a[clickedColumn].localeCompare(b[clickedColumn]) : b[clickedColumn].localeCompare(a[clickedColumn]);
            } else {
                return 0;
            }
        });

        setIsAscending(!isAscending);
        setSortedColumn(clickedColumn);
        setSortedData(sortedArray);
    };

    const getClassForColumn = (column: keyof Employee) => {
        if (sortedColumn === column) {
            return isAscending ? "sorted-up" : "sorted-down";
        }
        return "";
    };

    const handleRemove = (uuid: string) => {
        setSortedData(sortedData.filter(worker => worker.uuid !== uuid));
      };

    return (
        <div className="table-responsive">
        <table className="table">
            <thead>
                <tr>
                    <th onClick={() => sort('uuid')} className={getClassForColumn('uuid')}>ID</th>
                    <th onClick={() => sort('name')} className={getClassForColumn('name')}>{t('name')}</th>
                    <th onClick={() => sort('surname')} className={getClassForColumn('surname')}>{t('surname')}</th>
                    <th onClick={() => sort('salary')} className={getClassForColumn('salary')}>{t('salary')}</th>
                    <th onClick={() => sort('status')} className={getClassForColumn('status')}>{t('status')}</th>
                    <th>{t('edit')}</th>
                    <th>{t('remove')}</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((el, index) => (
                    <tr key={index}>
                        <td>{el.uuid}</td>
                        <td>{el.name}</td>
                        <td>{el.surname}</td>
                        <td>{el.salary}</td>
                        <td>{el.status}</td>
                        <td>
                            <Link 
                                to={`/edit/${el.uuid}`}
                                state={{ worker: el }}
                            >
                                Edit
                            </Link>
                        </td>
                        <td>
                            <p onClick={() => handleRemove(el.uuid)} style={{textDecoration: 'underline', cursor: 'pointer'}}>Remove</p>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};
