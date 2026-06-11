type Organisation = {
  name: string;
  url: string;
};

export type Position = {
  id: string;
  title: string;
  organisation: Organisation;
  startTime: string;
  endTime: string | null;
  description: string;
};

export type Degree = {
  id: string;
  name: string;
  institution: string;
  startTime: string;
  endTime: string;
  description: string;
};
