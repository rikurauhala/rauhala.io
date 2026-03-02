export type Position = {
  id: number;
  title: string;
  organisation: string;
  startTime: string;
  endTime: string | null;
  description: string;
};

export type Degree = {
  id: number;
  name: string;
  institution: string;
  startTime: string;
  endTime: string | null;
  description: string;
};
