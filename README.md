**VitaFordge**

**Project Description:**

VitaeFordge is a web-based application that allows users to create professional resumes using multiple templates. Users can enter their details in a structured form, and AI-powered suggestions will help improve their content, making their resumes more polished and impactful. The platform will support user authentication, allowing users to save and manage multiple resumes securely.

**Functional Requirements / Features:**

**1. User Authentication**

•	Users can register and log in using JWT-based authentication.
•	Passwords will be securely hashed before storage.
•	Users will have personalized dashboards to manage their resumes.

**2. Resume Creation & Management**

•	Users can create, edit, and delete multiple resumes.
•	Multi-step form for structured data entry: 
o	Personal Information
o	Work Experience
o	Education
o	Skills & Certifications
o	Projects & Achievements
•	Users can set a default resume for quick access.

**3. AI-Powered Enhancements**

•	AI-assisted content suggestions using AI API (specific AI is to be decided).
•	Automated improvement for: 
o	Work experience descriptions.
o	Professional summary generation.
o	Skills and keyword suggestions.

**4. Resume Templates & Exporting**

•	Users can select from multiple resume templates.
•	Users can upload and use custom-made resume templates.
•	Real-time preview of the resume before exporting.
•	Download resume as PDF.

**5. Dashboard & User Profiles**

•	Users can view and manage all their saved resumes.
•	Profile settings for updating user details.

**Tech Stack:**

•	MERN Stack: 
o	Frontend: React.js
o	Backend: Node.js (+ Express.js)
o	Database: MongoDB

•	Redux for State Management.
•	Authentication: JWT-based user authentication.
•	Styling: Tailwind CSS.
•	PDF Generation: Used JavaScript builtin function "window.open(print)".
