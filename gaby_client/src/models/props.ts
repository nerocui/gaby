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
};
