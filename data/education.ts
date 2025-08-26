export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    cgpa?:string;
    percentage?: string;
    description?: string;
  }
  
  export const education: Education[] = [
    {
      id: "bachelors",
      degree: "Bachelor's in Computer Science",
      institution: "VIT Bhopal University",
      location: "Sehore, Madhya Pradesh",
      cgpa: "8.86/10.00",
      startDate: "July 2022",
      endDate: "July 2026"
    },
    {
      id: "12th",
      degree: "Senior Secondary School Certificate",
      institution: "The Aryans School, Jhansi",
      location: "Jhansi, India",
      startDate: "April 2021",
      endDate: "March 2022",
      percentage: "90.6%"
    },
    {
      id: "10th",
      degree: "Higher Secondary School Certificate",
      institution: "St. Francis’ Convent Inter College, Jhansi",
      location: "Jhansi, India",
      startDate: "April 2019",
      endDate: "March 2020",
      percentage: "90.6%"
    }
  ];