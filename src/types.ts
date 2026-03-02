export type Position = {
  id: string;
  title: string;
  organisation: string;
  startTime: string;
  endTime: string | null;
  description: string;
};

export type Degree = {
  id: string;
  name: string;
  institution: string;
  startTime: string;
  endTime: string | null;
  description: string;
};
