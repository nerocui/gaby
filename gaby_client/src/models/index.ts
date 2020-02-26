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

export type State = {
    AuthState: AuthState,
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
    role: Role,
};

export type Record = {
    id: number,
    fileNumber: number,
    dateOfApplication: Date,
    dateOfVisit: Date,
    dateHelped: Date,
    diagnosisTime: Date,
    dateOfRelapse: Date,
    heavenDate: Date,
    locationOfVisit: Date,
    socialWorker: string,
    lengthOfTreatment: number,
    childId: number,
    streetAddress: string,
    city: string,
    postalCode: string,
    phoneNumber: number,
    cellPhone: number,
    email: string,
    cancerType: string,
    notes: Array<Note>,
    people: Array<Person>,
    relapse: boolean,
};
