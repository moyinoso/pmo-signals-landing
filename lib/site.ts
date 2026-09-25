export const site = {
  name: "Moyinoluwa Oso Ogooluwa",
  shortName: "PMO",
  email: "osoworkmail00@gmail.com",
  portfolioUrl: "https://pmo-portfolio-three.vercel.app/",
};

export const links = {
  github: "https://github.com/moyinoso",
  linkedin: "https://www.linkedin.com/in/m-oso",
  medium: "https://medium.com/@osoworkmail00",
};
export const caseStudyUrl = (slug: string) =>
  `${site.portfolioUrl}/work/${slug}`;

export type Project = {
  signal: string;
  title: string;
  question: string;
  tags: string[];
  slug: string;
};

export const projects: Project[] = [
  {
    signal: "01",
    title: "ZEPTO RETAIL ANALYTICS",
    question:
      "What can retail transaction data reveal about product performance, pricing, and sales?",
    tags: ["SQL", "Power BI", "Data Analysis"],
    slug: "zepto-retail",
  },
  {
    signal: "02",
    title: "CUSTOMER CHURN ANALYSIS",
    question:
      "Can customer behaviour reveal the signals behind churn before customers leave?",
    tags: ["Python", "Pandas", "Plotly", "SQL"],
    slug: "customer-churn",
  },
  {
    signal: "03",
    title: "HR WORKFORCE ANALYTICS",
    question:
      "What patterns in workforce data can help explain employee turnover and workforce performance?",
    tags: ["Excel", "Power Query", "Power BI", "DAX"],
    slug: "hr-workforce",
  },
  {
    signal: "04",
    title: "HEALTH RISK ANALYSIS",
    question:
      "What patterns in lifestyle and health data can reveal potential risk?",
    tags: ["Power BI", "DAX", "Data Analysis"],
    slug: "health-risk",
  },
];
