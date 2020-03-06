export type Action = {
    type: string,
    payload: any,
};

export type AuthState = {
    id: number,
	username: string,
	token: string,
	loggedIn: boolean,
};

export type RecordState = {
    items: Array<Record>,
    selectedItem: Record | null,
    roles: Array<Role>,
};

export type State = {
    AuthState: AuthState,
    RecordState: RecordState,
};

export type Note = {
    id: number,
    title: string,
    content: string,
};

export type Role = {
    id: number,
    name: string,
    description: string,
};

export type Person = {
    id: number,
    firstName: string,
    lastName: string,
    displayName: string,
    role: Role | null,
    roleId: number,
};

export type Record = {
    id: number,
    fileNumber: string,
    dateOfApplication: Date,
    dateOfVisit: Date,
    dateHelped: Date,
    diagnosisDate: Date,
    dateOfRelapse: Date,
    heavenDate: Date,
    locationOfVisit: string,
    dateOfBirth: Date,
    socialWorker: string,
    lengthOfTreatment: number,
    childId: number,
    streetAddress: string,
    city: string,
    postalCode: string,
    phoneNumber: string,
    cellPhone: string,
    email: string,
    cancerType: string,
    notes: Array<Note>,
    people: Array<Person>,
    relapse: boolean,
};
