import { Record, Role } from './index';

export type DropzoneProps = {
    handleChange: any,
    wrapperStyle: any,
    activeText: string,
    inActiveText: string,
};

export type RecordListProps = {
    items: Array<Record>,
    roles: Array<Role>,
    history: any,
};

export type DetailPageProps = {
    item: Record,
    history: any,
};

export type RecordItemProps = {
    item: Record,
    roles: Array<Role>,
    history: any,
};

export type AddressProps = {
    streetAddress: string,
    city: string,
    postalCode: string,
    isHover: boolean,
};

export type ContactInfoProps = {
    email: string,
    cellPhone: string,
    phoneNumber: string,
}
