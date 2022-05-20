export interface IStudent {
  id?:number;
  st_name: string;
  st_age: number;
  st_email: string;
  english: number;
  maths: number;
  science: number;
  social_science: number;
  isEdit: boolean;
  }
  export interface IResponse {
    id:number;
    st_name: string;
    st_age: number;
    st_email: string;
    english: number;
    maths: number;
    science: number;
    social_science: number;
    isEdit?: boolean;
  }

  export interface ISubject {
    subject_marks: number;
    subject_name: string;
  }

  
export const COLUMNS_SCHEMA = [
  {
    key: 'st_name',
    type: 'text',
    label: 'Student Name'
  },
  {
    key: 'st_age',
    type: 'number',
    label: 'Age'
  },
  {
    key: 'st_email',
    type: 'email',
    label: 'Email',
    required: true,
    pattern: '.+@.+',
  },
  {
    key: 'english',
    type: 'number',
    label: 'English',
    pattern:'^([0-9]|[1-9][0-9]|100)$'
  },
  {
    key: 'maths',
    type: 'number',
    label: 'Maths',
  },
  {
    key: 'science',
    type: 'number',
    label: 'Science',
  },
  {
    key: 'social_science',
    type: 'number',
    label: 'Social Science',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];
