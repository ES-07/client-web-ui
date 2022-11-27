import { Property } from "./Property";

export interface Owner{
    id: number;
    name: string;
    birthday: string;
    address: string;
    email: string;
    hashed_password: string;
    cellphone: string;
    contract_date: string;
    notification_type: string;
    buildings: Property[];
    cognito_id: string;
}