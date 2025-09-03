export const profile = {
  name: "George Wanyoike Njoroge",
  title: "Cybersecurity & Networking Specialist",
  location: "Nairobi, Kenya",
  email: "georgewanyoike57@gmail.com",
  phone: "+254 707 853 938",
  links: {
    linkedin: "https://www.linkedin.com/in/george-wanyoike",
    github: "https://github.com/realsirgeorge",
    resumeUrl: "/George_Wanyoike_CV.pdf"
  },
  hero: {
    tagline: "Securing networks, strengthening digital infrastructure, and enabling resilient organizations.",
    ctas: [
      { label: "Hire Me", href: "#contact", primary: true },
      { label: "Download CV", href: "/George_Wanyoike_CV.pdf" },
      { label: "GitHub", href: "https://github.com/realsirgeorge" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/george-wanyoike" }
    ]
  },
  about: {
    short: "Cybersecurity and Networking specialist with hands-on IT operations experience. I design resilient networks, implement secure systems, and turn operational insights into stronger defenses.",
    highlights: [
      "CCNA & HCIA-Data Communication certified",
      "Firewall reviews, SIEM monitoring, vulnerability assessment",
      "Azure administration & enterprise tooling",
      "Active in CTFs, hackathons, and tech communities"
    ]
  },
  skills: {
    cybersecurity: [
      { name: "Incident Response", proficiency: 85 },
      { name: "SIEM Monitoring", proficiency: 90 },
      { name: "Vulnerability Assessment", proficiency: 80 },
      { name: "Firewall Reviews", proficiency: 88 },
      { name: "IAM (Microsoft)", proficiency: 82 }
    ],
    networking: [
      { name: "Routing & Switching", proficiency: 92 },
      { name: "VLANs", proficiency: 88 },
      { name: "IPv6", proficiency: 85 },
      { name: "VPN & Secure Remote Access", proficiency: 90 },
      { name: "CCTV Integration", proficiency: 85 }
    ],
    cloud: [
      { name: "Azure Administration (AZ-104)", proficiency: 85 },
      { name: "Microsoft 365", proficiency: 90 },
      { name: "Monitoring & Endpoint Security", proficiency: 88 }
    ]
  },
  experience: [
    {
      org: "NACOSTI",
      role: "Cybersecurity & Network Operations",
      period: "Dec 2024 – Present",
      points: [
        "Monitored network uptime, user access logs, and anomaly signals",
        "Supported firewall reviews and controlled penetration testing",
        "Audited CCTV hardware and network infrastructure",
        "Produced weekly security posture reports for leadership"
      ],
      tech: ["Firewalls", "Syslog", "SIEM", "Network Monitoring"]
    },
    {
      org: "JKUAT Industrial Park",
      role: "Quality Control Technician",
      period: "Jul 2023 – Sep 2023",
      points: [
        "Enforced quality standards on device assembly (Taifa Tablets)",
        "Executed data sanitization and secure device disposal",
        "Performed warranty repairs with security checks"
      ],
      tech: ["Hardware QC", "Secure Erase", "Inventory Controls"]
    },
    {
      org: "JKUAT IT Department",
      role: "Technical Support (Attachment)",
      period: "May 2022 – Aug 2022",
      points: [
        "Resolved campus network issues; configured routers, switches, servers",
        "Reduced downtime by ~20% through proactive troubleshooting"
      ],
      tech: ["Routing/Switching", "Linux", "Windows Server"]
    }
  ],
  professionalDevelopment: [
    {
      title: "Hackathons Participation",
      description: "Problem-solving under constraints with security focus",
      icon: "Code"
    },
    {
      title: "CTF Player",
      description: "Online & physical competitions — offensive/defensive skills",
      icon: "Shield"
    },
    {
      title: "Tech Community Events",
      description: "Active in technical events and industry networking",
      icon: "Users"
    },
    {
      title: "Rotaractor",
      description: "Rotary International service & leadership",
      icon: "Award"
    }
  ],
  education: [
    "B.Sc. Computer Technology (Second Upper), JKUAT (2020–2024)",
    "Cyber Shujaa — Security Engineer Learning Program",
    "Microsoft ADC — Cloud & Security Track",
    "Adili Cyber Group — Cybersecurity Training & Practice",
    "Cisco Networking Academy",
    "Huawei ICT Academy (HCIA–Data Communication)"
  ],
  certifications: [
    { name: "CCNA", issuer: "Cisco", status: "Completed", verified: true },
    { name: "HCIA — Data Communication", issuer: "Huawei", status: "Completed", verified: true },
    { name: "(ISC)² Certified in Cybersecurity", issuer: "(ISC)²", status: "Completed", verified: true },
    { name: "Microsoft AZ-104", issuer: "Microsoft", status: "Azure Administrator", verified: true },
    { name: "Microsoft SC-900", issuer: "Microsoft", status: "Security, Compliance & Identity", verified: true },
    { name: "Security Engineer", issuer: "Microsoft ADC", status: "Completed", verified: true }
  ]
};