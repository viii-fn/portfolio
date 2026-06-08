export interface userProp {
  firstName: string;
  lastName: string;
  roles: rolesProp[];
  projects: projectsProp[];
  social: socialProp[];
}

interface rolesProp {
  title: string;
  career: string;
  years: number;
  skills: string[];
  job?: jobProp[];
}

interface jobProp {
  title: string;
  company: string;
  startDate: Date;
  endDate?: Date | null;
  description: string;
  social: socialProp[];
}

interface projectsProp {
  url: string;
  title: string;
  description: string;
}

interface socialProp {
  title: string;
  url: string;
}