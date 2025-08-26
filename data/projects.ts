export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "scalable-chat-app",
    title: "CloakRoom",
    description: "A real-time chat system supporting 1000+ concurrent users using Kafka and Socket.IO with advanced caching and authentication.",
    longDescription: "Built a highly scalable real-time chat application capable of handling 1000+ concurrent users simultaneously. Implemented Apache Kafka for message queuing and Socket.IO for real-time communication, achieving significant performance improvements through Redis caching and efficient pub/sub architecture design.",
    technologies: ["Kafka", "Socket.IO", "Redis", "Google OAuth 2.0", "JWT", "Node.js", "React", "TypeScript", "WebSocket", "Pub/Sub"],
    achievements: [
      "Built real-time chat system supporting 1000+ concurrent users using Kafka and Socket.IO",
      "Achieved 40% latency reduction via Redis caching, load balancing, and efficient pub/sub design",
      "Integrated Google OAuth 2.0 and JWT for secure login with session-based user tracking"
    ],
    image: "/images/projects/cloakRoom.png",
    github: "https://github.com/ojaswigahoi/scalable-chat-app",
    featured: true
  },
  {
    id: "talentsync",
    title: "TalentSync",
    description: "A platform that revolutionizes interview processes with live code editing and video integration, reducing setup time by 90%.",
    longDescription: "Created an innovative interview platform that streamlines the technical interview process by integrating live code editing capabilities with video conferencing. Built using Next.js with exceptional performance optimization, achieving a 95+ Lighthouse score for optimal user experience.",
    technologies: ["Next.js", "TypeScript", "Live Code Editor", "Video Integration", "WebRTC", "TailwindCSS", "Performance Optimization"],
    achievements: [
      "Created platform that reduced interview setup time by 90% with live code editing and video",
      "Made Next.js frontend with 95+ Lighthouse score for smooth user experience"
    ],
    image: "/images/projects/talent.png",
    github: "https://github.com/ojaswigahoi/talentsync",
    featured: true
  },
  {
    id: "profinder",
    title: "ProFinder",
    description: "An innovative solution designed to simplify online shopping by providing real-time insights on when and where to buy products.",
    longDescription: "ProFinder is a cutting-edge solution designed to enhance the online shopping experience. By providing users with real-time insights, price comparisons, and optimal purchase timing, ProFinder helps users make informed decisions about when and where to buy products. Features include trend analysis, one-stop price comparison across multiple e-commerce platforms, and data-driven recommendations for optimal purchase timing.",
    technologies: ["React", "HTML/CSS", "Python", "JavaScript", "Custom API", "Price Prediction", "Data Analysis", "E-commerce Integration"],
    achievements: [
      "Easy Trend Analysis: Provides straightforward answers about whether to buy now or wait for better deals",
      "One-Stop Price Comparison: Compares prices across Amazon, Flipkart, and Myntra in one place",
      "Optimal Purchase Timing: Advises users on best time to buy based on historical data and upcoming sales",
      "Higher Conversion Rates: Reduces friction in buying process leading to quicker decisions",
      "Trust Building: Provides reliable, data-driven recommendations rather than assumptions",
      "Increased Traffic: Can increase customer traffic by 20-30% during sales periods"
    ],
    image: "/images/projects/Profinder.jpg",
    github: "https://github.com/ojaswigahoi/profinder",
    featured: true
  },
  {
    id: "zenith",
    title: "Zenith",
    description: "A decentralized music application enabling artists to mint and sell their music as NFTs.",
    longDescription: "Developed a decentralized music platform for artists to mint and sell NFTs with Solidity and IPFS, enabling transactions and faster monetization via Polygon. Implemented role-based access and interactive features like community hubs, increasing session duration substantially.",
    technologies: ["Solidity", "Polygon", "Ethereum", "IPFS", "Next.js", "TypeScript", "TailwindCSS", "Smart Contracts", "Web3.js", "Blockchain"],
    achievements: [
      "Built for 150+ artists to mint and sell NFTs with Solidity and IPFS",
      "Enabled 300+ transactions and 30% faster monetization via Polygon",
      "Implemented role-based access and interactive features like community hubs, increasing session duration by 65%",
      "Eliminated third-party dependencies and automated royalty payouts, reducing overhead and platform latency by 30%"
    ],
    image: "/images/projects/zenith/zenith.jpg",
    github: "https://github.com/achyut21/zenith",
    liveUrl: "https://devfolio.co/projects/zenith-202e",
    featured: false
  },
  {
    id: "pokearena",
    title: "PokeArena",
    description: "A blockchain-based platform digitizing Pokémon cards as NFTs with secure trading and battling features.",
    longDescription: "Developed a blockchain-based platform digitizing 300+ Pokémon cards as NFTs, enabling secure trading and battling with on-chain verified ownership and battle logic. Integrated Aptos wallet authentication for seamless trades with real-time feedback.",
    technologies: ["Move", "Aptos", "NFTs", "React", "TypeScript", "Node.js", "Express", "TailwindCSS", "Three.js", "MongoDB", "Blockchain"],
    achievements: [
      "Developed a blockchain-based platform digitizing 300+ Pokémon cards as NFTs",
      "Enabled secure trading and battling with on-chain verified ownership and battle logic",
      "Integrated Aptos wallet authentication to ease 120+ NFT trades with real-time feedback",
      "Crafted a pixel art-inspired UI/UX using TailwindCSS and Three.js, improving user engagement by 60%"
    ],
    image: "/images/projects/pokearena/pokearena.jpg",
    github: "https://github.com/achyut21/pokearena",
    featured: false
  },
  {
    id: "infinitus",
    title: "Infinitus'24",
    description: "Led the development of the Infinitus Fest website, attracting 20,000 students with 6,000 registrations.",
    longDescription: "Led the development of the Infinitus Fest website, attracting 20,000 students with 6,000 registrations across 10 events, optimizing for crowd loading. Integrated payment gateway for Cultural and Technical events.",
    technologies: ["Next.js", "Three.js", "TypeScript", "TailwindCSS", "Node.js", "Express", "MongoDB", "Razorpay", "Redux", "Framer Motion"],
    achievements: [
      "Attracted 20,000 students with 6,000 registrations across 10 events",
      "Emphasized crowd loading optimization for seamless user experience",
      "Integrated payment gateway for Cultural and Technical events"
    ],
    image: "/images/projects/infinitus/infinitus.jpg",
    github: "https://github.com/achyut21/infinitus24",
    featured: false
  },
  {
    id: "lightning-time",
    title: "Lightning Time",
    description: "A Bitcoin Lightning Network-powered time tracking web app that allows users to check in for work and automatically receive payments in Satoshis.",
    longDescription: "Developed during the MIT BITCOIN EXPO 2025 Hackathon, Lightning Time is a time tracking application that allows users to 'check in' to track their work hours and automatically receive Satoshi (SATs) payments for each hour worked. The app features real-time tracking, automatic Bitcoin payments via the Lightning Network, detailed analytics, and a responsive design for all devices.",
    technologies: ["Bitcoin", "Lightning Network", "LNbits", "Soulbound Tokens", "React", "Vite", "Node.js", "Express", "TailwindCSS", "Ethers.js", "Blockchain"],
    achievements: [
      "Built a real-time time tracking system with automatic Bitcoin payments via Lightning Network",
      "Implemented an admin dashboard for monitoring work time and payment statistics",
      "Developed detailed analytics for visualizing earnings, work patterns, and payment history",
      "Designed a future authentication system using Soulbound Tokens (SBTs) for secure admin access",
      "Created a responsive design that works seamlessly across mobile, tablet, and desktop devices"
    ],
    image: "/images/projects/lightning-time/lightning-time.jpg",
    github: "https://github.com/Achyut21/MIT-LIGHTING-APP",
    liveUrl: "https://devpost.com/software/lightning-time",
    featured: false
  },
  {
    id: "billrewards",
    title: "BillRewards",
    description: "A cashback reward system that incentivizes on-time bill payments with cryptocurrency rewards.",
    longDescription: "Built BillRewards, an innovative system that encourages timely bill payments by rewarding users with cryptocurrency tokens. The platform integrates with payment processors to track bill payments and automatically distributes rewards for on-time payments, helping service providers reduce late payments while offering users tangible benefits.",
    technologies: ["Ethereum", "Solidity", "Smart Contracts", "Web3.js", "React", "Node.js", "Express", "MongoDB", "Tesseract.js", "OCR Technology", "Blockchain"],
    achievements: [
      "Developed a smart contract-based reward system integrated with multiple payment processors",
      "Created a token distribution mechanism that automatically rewards on-time payments",
      "Implemented an analytics dashboard for tracking payment patterns and reward distributions",
      "Built a secure wallet integration system for claiming and managing reward tokens"
    ],
    image: "/images/projects/billrewards/billrewards.jpg",
    github: "https://github.com/achyut21/billrewards",
    liveUrl: "https://devpost.com/software/billrewards",
    featured: false
  },
  {
    id: "byteroot",
    title: "Byteroot",
    description: "A coding ecosystem enabling users to post AI-validated questions and collaborate on solutions.",
    longDescription: "Revolutionized the coding ecosystem by developing ByteRoot, enabling users to post AI-validated questions and create an ecosystem to solve those questions and have group discussions. Seamlessly integrated Piston API to fetch compiler outputs.",
    technologies: ["OpenAI", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker", "TailwindCSS", "Prisma", "Redis", "JWT"],
    achievements: [
      "Created a platform for posting AI-validated coding questions",
      "Built an ecosystem for collaborative problem-solving and group discussions",
      "Integrated Piston API for compiler outputs, enhancing code execution by 40%"
    ],
    image: "/images/projects/byteroot/byteroot.jpg",
    github: "https://github.com/achyut21/byteroot",
    featured: false
  },
  {
    id: "cryptovault-ipfs",
    title: "CryptoVault IPFS",
    description: "A decentralized backup and recovery system leveraging IPFS to securely store encrypted files.",
    longDescription: "Developed a decentralized backup and recovery system that combines AES symmetric encryption with RSA digital signatures to ensure confidential and tamper-proof file storage on IPFS. The system allows users to encrypt files locally, store them securely, and retrieve them using unique CIDs with metadata.",
    technologies: ["IPFS", "Helia", "AES-256-CBC", "RSA", "Cryptography", "Node.js", "Express", "React", "Vite", "Multer"],
    achievements: [
      "Created a secure encryption system using AES-256-CBC for file encryption",
      "Implemented RSA digital signatures for metadata integrity verification",
      "Developed a user-friendly two-step recovery process for seamless file retrieval",
      "Built a decentralized storage solution with complete privacy control"
    ],
    image: "/images/projects/cryptovault-ipfs/cryptovault-ipfs.webp",
    github: "https://github.com/Achyut21/CVIPFS",
    featured: false
  },
  {
    id: "neunotes",
    title: "NeuNotes",
    description: "A comprehensive academic notes sharing platform facilitating knowledge exchange among students and faculty.",
    longDescription: "Designed and developed NeuNotes, a collaborative platform for sharing academic content with role-based access control. The system features course organization, notes upload/preview, search functionality, ratings, comments, and analytics dashboards.",
    technologies: ["MySQL", "React", "Vite", "Node.js", "Express", "TailwindCSS", "Zustand", "Axios", "Multer", "Bcrypt", "REST API"],
    achievements: [
      "Built a comprehensive platform with role-based access for students, faculty, and admins",
      "Implemented a sophisticated database structure with 12 tables, stored procedures, and triggers",
      "Created a full-featured notes management system with ratings, comments, and favorites",
      "Developed an intuitive UI for browsing, uploading, and managing academic content"
    ],
    image: "/images/projects/neunotes/neunotes.webp",
    github: "https://github.com/achyut21/neunotes",
    featured: false
  },
  {
    id: "noteit",
    title: "NoteIT",
    description: "A mobile app for sharing and accessing study notes and resources with social features and gamification.",
    longDescription: "Developed NoteIT, an Android mobile application that allows students to share and access study notes and educational resources. The app features user authentication, PDF uploading/downloading, badge rewards for engagement, and an intuitive navigation system with fragments.",
    technologies: ["Android Studio", "Java", "Firebase", "Material Design", "XML"],
    achievements: [
      "Created 9 activities and 4 fragments for comprehensive app functionality",
      "Implemented secure user authentication and data storage with Firebase",
      "Designed an engaging user interface with gamification elements like badges",
      "Built a robust PDF upload and retrieval system for educational resources"
    ],
    image: "/images/projects/noteit/noteit.jpg",
    github: "https://github.com/Achyut21/Note_IT-Note-sharing-APP-",
    featured: false
  }
];