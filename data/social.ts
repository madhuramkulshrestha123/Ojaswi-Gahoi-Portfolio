export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
  export const socialLinks: SocialLink[] = [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/ojaswi2c9t",
      icon: "github"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://in.linkedin.com/in/ojaswigahoi",
      icon: "linkedin"
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:ojaswigahoi@gmail.com",
      icon: "mail"
    },
    {
      id: "phone",
      name: "Phone",
      url: "tel:+91941945513",
      icon: "phone"
    }
  ];