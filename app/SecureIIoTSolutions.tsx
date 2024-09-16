'use client'

import { useState } from 'react'
import { ArrowRightIcon, LockIcon, TrendingUpIcon, UsersIcon } from "lucide-react"

export default function Component() {
  const [showFullPlan, setShowFullPlan] = useState(false)

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans relative overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, #333333 1px, transparent 1px),
          linear-gradient(to bottom, #333333 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        opacity: 0.1
      }} />
      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <header className="text-center space-y-4">
            <LockIcon className="w-16 h-16 mx-auto text-blue-500" />
            <h1 className="text-4xl font-bold tracking-tight">SecureIIoT Solutions</h1>
            <p className="text-xl text-gray-400">
              {showFullPlan ? "Comprehensive Business Plan" : "Safeguarding the Industrial Internet of Things"}
            </p>
          </header>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setShowFullPlan(false)}
              className={`px-4 py-2 rounded-md ${showFullPlan ? 'bg-gray-700' : 'bg-blue-600'}`}
            >
              Elevator Pitch
            </button>
            <button
              onClick={() => setShowFullPlan(true)}
              className={`px-4 py-2 rounded-md ${showFullPlan ? 'bg-blue-600' : 'bg-gray-700'}`}
            >
              Full Plan
            </button>
          </div>

          {showFullPlan ? (
            <FullPlan />
          ) : (
            <ElevatorPitch />
          )}
        </div>
      </div>
    </div>
  )
}

function ElevatorPitch() {
  return (
    <div className="space-y-12">
      <section className="space-y-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Executive Summary</h2>
          <p className="text-gray-300">
            Addressing critical security gaps in IIoT environments with specialized cybersecurity services and solutions.
            Seeking $2M investment for development, team expansion, and market presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Services & Products</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Specialized Consulting</li>
              <li>• Managed Security Services</li>
              <li>• Proprietary Software/Hardware</li>
              <li>• Industry Training Programs</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Target Market</h3>
            <p className="text-gray-300">
              Energy, manufacturing, transportation, and healthcare industries in North America and Europe.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Financial Projections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((year) => (
            <div key={year} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Year {year}</h3>
              <p className="text-3xl font-bold text-blue-500">
                ${year === 1 ? "1M" : year === 2 ? "3M" : "7M"}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Why Invest?</h2>
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <TrendingUpIcon className="w-8 h-8 text-green-500 mb-2" />
            <p className="text-sm">High Growth Potential</p>
          </div>
          <div className="flex flex-col items-center">
            <UsersIcon className="w-8 h-8 text-yellow-500 mb-2" />
            <p className="text-sm">Experienced Team</p>
          </div>
          <div className="flex flex-col items-center">
            <ArrowRightIcon className="w-8 h-8 text-red-500 mb-2" />
            <p className="text-sm">First-Mover Advantage</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FullPlan() {
  return (
    <div className="space-y-8">
      {[
        {
          title: "Executive Summary",
          content: `As industries increasingly adopt Industrial Internet of Things (IIoT) technologies to enhance efficiency and productivity, the security risks associated with these connected environments have escalated. Many IIoT devices lack robust security features, making them vulnerable targets for cyber threats, including ransomware and nation-state attacks. Our company, SecureIIoT Solutions, aims to address this critical gap by providing specialized cybersecurity services and solutions tailored specifically for the IIoT landscape.

We offer a comprehensive suite of services, including specialized consulting, managed security services, proprietary software and hardware solutions, and industry training programs. With a unique blend of cybersecurity expertise and business acumen, we are poised to become a market leader in securing industrial environments. We seek an initial investment of $2 million to develop our offerings, expand our team, and establish a strong market presence.`
        },
        {
          title: "Company Description",
          content: `SecureIIoT Solutions is a cybersecurity firm dedicated to protecting industrial environments leveraging IIoT technologies. Founded by a seasoned cybersecurity professional with an MBA, our company understands both the technical and business challenges faced by industrial organizations. Our mission is to provide end-to-end security solutions that not only safeguard critical infrastructure but also ensure compliance with evolving regulatory standards.`
        },
        {
          title: "Market Analysis",
          content: `Industry Overview:
• High Demand for IIoT Security: The global IIoT market is projected to reach $263.4 billion by 2027, with a significant portion allocated to security solutions.
• Regulatory Drivers: Regulations like the NIS Directive in Europe and NIST guidelines in the U.S. mandate stringent cybersecurity measures for critical infrastructure sectors.

Target Market:
• Industries: Energy, manufacturing, transportation, and healthcare.
• Geographical Focus: Initially targeting North America and Europe, with plans for global expansion.

Competitive Landscape:
• Existing Competitors: Traditional cybersecurity firms focusing on IT environments.
• Our Advantage: Specialized focus on IIoT security, combining expertise in both cybersecurity and industrial operations.`
        },
        {
          title: "Organization and Management",
          content: `• Founder and CEO: [Name], a cybersecurity expert with over 15 years of experience and an MBA.
• CTO: [Name], specialized in developing security software and hardware for industrial applications.
• Advisory Board: Comprising industry veterans from cybersecurity and industrial sectors.

Organizational Structure:
• Security Consulting Division
• Managed Security Services Division
• Product Development Division
• Training and Certification Division`
        },
        {
          title: "Services and Product Line",
          content: `1. Specialized Consulting Services
   • IIoT Security Assessments: Penetration testing, vulnerability assessments, and threat modeling.
   • Implementation Services: Network segmentation strategies and security framework deployment.

2. Managed Security Services (MSSP)
   • Ongoing Monitoring: 24/7 threat detection and response.
   • Compliance Management: Ensuring adherence to industry regulations and standards.

3. Proprietary Security Tools and Protocols
   • Security Software Solutions: Anomaly detection systems and customized SIEM platforms for IIoT data.
   • Hardware Solutions: Secure gateways and edge devices with built-in security protocols.

4. Training and Certification Programs
   • Industry Training: Workshops and certification courses for professionals and organizations.
   • Online Learning Platform: E-learning modules covering best practices in IIoT security.`
        },
        {
          title: "Marketing and Sales Strategy",
          content: `• Brand Positioning: Establishing SecureIIoT Solutions as the go-to expert in IIoT cybersecurity.
• Digital Marketing: Leveraging SEO, content marketing, and social media to reach target audiences.
• Strategic Partnerships: Collaborating with industrial equipment manufacturers and regulatory bodies.
• Sales Team: A dedicated team targeting key accounts in critical infrastructure sectors.`
        },
        {
          title: "Funding Request",
          content: `We are seeking an investment of $2 million to be allocated as follows:

• Product Development: $800,000 for software and hardware solution development.
• Talent Acquisition: $500,000 to hire top cybersecurity and IIoT experts.
• Marketing and Sales: $400,000 for brand development and market penetration strategies.
• Operational Expenses: $300,000 for office space, equipment, and administrative costs.`
        },
        {
          title: "Financial Projections",
          content: `Revenue Streams:
• Year 1: Focus on consulting services and establishing MSSP offerings.
• Year 2: Launch proprietary software solutions and hardware products.
• Year 3: Expand training programs and scale operations.

Projected Revenues:
• Year 1: $1 million
• Year 2: $3 million
• Year 3: $7 million

Profit Margins:
• Consulting and Services: Estimated gross margin of 60%.
• Software and Hardware Sales: Estimated gross margin of 70%.
• Training Programs: Estimated gross margin of 80%.`
        },
        {
          title: "Appendix",
          content: `SWOT Analysis:
• Strengths: Specialized expertise, high-profit margins, first-mover advantage in IIoT security.
• Weaknesses: Scalability challenges in consulting services.
• Opportunities: Growing market demand, regulatory compliance needs.
• Threats: Emerging competitors, rapid technological changes.

Risk Mitigation Strategies:
• Scalability Plan: Developing scalable products and expanding the team strategically.
• Continuous Innovation: Investing in R&D to stay ahead of technological advancements`
        }
      ].map((section, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <p className="text-gray-300 whitespace-pre-line">{section.content}</p>
        </div>
      ))}
    </div>
  )
}