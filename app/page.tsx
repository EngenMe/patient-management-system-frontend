"use client";

import Header1 from "@/components/MainPage/Header1";
import Header2 from "@/components/MainPage/Header2";
import Logo from "@/components/MainPage/Logo";
import Paragraph1 from "@/components/MainPage/Paragraph1";
import BlurIn from "@/components/ui/blur-in";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";

import nodeJsLogo from "@/public/Node.js_logo.svg";
import nextJsLogo from "@/public/Nextjs-logo.svg";
import expressJsLogo from "@/public/Expressjs.png";
import postgresQlLogo from "@/public/PostgreSQL_logo.3colors.svg";
import sequelizeLogo from "@/public/Sequelize.svg";
import awsS3Logo from "@/public/Amazon-S3-Logo.svg";
import awsRdsLogo from "@/public/RDS.svg";
import awsEc2Logo from "@/public/AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg";
import twilioLogo from "@/public/Twilio_(3).svg";
import reactLogo from "@/public/React-icon.svg";
import tailwindCssLogo from "@/public/tailwindcss-mark.svg";
import jestLogo from "@/public/Jest.svg";
import Link from "next/link";

const MainPage = () => {
  return (
    <div className="py-20 px-10 flex flex-col gap-10">
      <div className="flex justify-center">
        <Logo />
      </div>
      <BlurIn word="Patient Management System" className="text-4xl font-bold" />
      {/* Description */}
      <div className="pt-4">
        <Header1>Description:</Header1>
      </div>
      <Paragraph1>
        The Patient Management System is a web-based application designed to
        streamline the patient onboarding process, appointment scheduling, and
        administrative oversight. It offers an intuitive interface for patients
        to register, verify their identity via SMS-based One-Time Password
        (OTP), and schedule appointments with doctors. Administrators can manage
        appointments through a secure dashboard, ensuring smooth healthcare
        service delivery. <br />
        <br />
        The system follows a modern, secure, and scalable architecture built
        with industry-standard technologies, emphasizing both performance and
        maintainability.
      </Paragraph1>
      {/* Technologies Used */}
      <div className="pt-4">
        <Header1>Technologies Used</Header1>
      </div>
      <Paragraph1>
        Our stack comprises both front-end and back-end technologies, database
        management, cloud storage, and third-party services. Each technology has
        been chosen for its reliability, community support, and suitability to
        the project’s requirements.
      </Paragraph1>
      {/* Front End */}
      <Header2>Front-End</Header2>
      {/* Next js */}
      <Link href="https://nextjs.org/" target="_blank">
        <Card
          className="max-w-md mx-auto my-8 border rounded-xl shadow hover:shadow-md transition-shadow bg-gradient-to-br from-[#D7EDED29] to-[#CCEBEB00]"
          style={{
            boxShadow: `0 4px 20px 5px rgba(255, 255, 255, 0.33)`,
          }}
        >
          <CardHeader className="flex items-center space-x-4">
            <div className="w-32 h-32 relative">
              <Image
                src={nextJsLogo}
                alt="Next.js Icon"
                fill
                className="object-contain"
              />
            </div>
            <CardTitle>Next.js (v15.0.3)</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm text-center">
              Next.js powers the client interface. It provides server-side
              rendering (SSR) for improved performance and SEO, as well as
              seamless routing and fast development with React 19.0.0-rc.
            </CardDescription>
          </CardContent>
        </Card>
      </Link>
      {/* Back End */}
      <Header2>Back-End</Header2>
      <div className="grid lg:grid-cols-2">
        {/* Node Js */}
        <Link href="https://nodejs.org/en" target="_blank">
          <Card
            className="max-w-md mx-auto my-8 border rounded-xl shadow hover:shadow-md transition-shadow bg-gradient-to-br from-[#D7EDED29] to-[#CCEBEB00]"
            style={{
              boxShadow: `0 4px 20px 5px rgba(115, 165, 93, 0.33)`,
            }}
          >
            <CardHeader className="flex items-center space-x-4">
              <div className="w-32 h-32 relative">
                <Image
                  src={nodeJsLogo}
                  alt="Node.js Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <CardTitle>Node.js (v20.17.0)</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-center">
                A JavaScript runtime environment used to execute server-side
                logic efficiently.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
        {/* Express JS */}
        <Link href="https://expressjs.com/" target="_blank">
          <Card
            className="max-w-md mx-auto my-8 border rounded-xl shadow hover:shadow-md transition-shadow bg-gradient-to-br from-[#D7EDED29] to-[#CCEBEB00]"
            style={{
              boxShadow: `0 4px 20px 5px rgba(241, 226, 12, 0.33)`,
            }}
          >
            <CardHeader className="flex items-center space-x-4">
              <div className="w-32 h-32 relative">
                <Image
                  src={expressJsLogo}
                  alt="Express.js Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <CardTitle>Express.js (v4.21.1)</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-center">
                A minimal and flexible web application framework for Node.js. It
                provides routing and middleware support to handle HTTP requests
                from the front-end.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      </div>
      {/* Database & ORM */}
      <Header2>Database & ORM:</Header2>
      <div className="grid lg:grid-cols-2">
        {/* PostgreSQL */}
        <Link href="https://www.postgresql.org/" target="_blank">
          <Card
            className="max-w-md mx-auto my-8 border rounded-xl shadow hover:shadow-md transition-shadow bg-gradient-to-br from-[#D7EDED29] to-[#CCEBEB00]"
            style={{
              boxShadow: `0 4px 20px 5px rgba(64, 102, 145, 0.33)`,
            }}
          >
            <CardHeader className="flex items-center space-x-4">
              <div className="w-32 h-32 relative">
                <Image
                  src={postgresQlLogo}
                  alt="PostgreSQL Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <CardTitle>PostgreSQL (v17.1)</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-center">
                A powerful, open-source relational database that stores all
                persistent data securely.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
        {/* Sequelize */}
        <Link href="https://sequelize.org/" target="_blank">
          <Card
            className="max-w-md mx-auto my-8 border rounded-xl shadow hover:shadow-md transition-shadow bg-gradient-to-br from-[#D7EDED29] to-[#CCEBEB00]"
            style={{
              boxShadow: `0 4px 20px 5px rgba(52, 63, 106, 0.33)`,
            }}
          >
            <CardHeader className="flex items-center space-x-4">
              <div className="w-32 h-32 relative">
                <Image
                  src={sequelizeLogo}
                  alt="Sequelize Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <CardTitle>Sequelize (v6.37.5)</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-center">
                An Object-Relational Mapping (ORM) library for Node.js,
                facilitating database interactions through a convenient
                JavaScript API.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      </div>
      {/* Cloud Services & Integrations */}
      <Header2>Cloud Services & Integrations:</Header2>
      <div className="grid lg:grid-cols-2">
        {/* S3 */}
        <Link href="https://aws.amazon.com/s3/" target="_blank">
          <Card
            className="max-w-md mx-auto my-8 border rounded-xl shadow hover:shadow-md transition-shadow bg-gradient-to-br from-[#D7EDED29] to-[#CCEBEB00]"
            style={{
              boxShadow: `0 4px 20px 5px rgba(214, 85, 69, 0.33)`,
            }}
          >
            <CardHeader className="flex items-center space-x-4">
              <div className="w-32 h-32 relative">
                <Image
                  src={awsS3Logo}
                  alt="AWS S3 Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <CardTitle>AWS S3 (v3.705.0)</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-center">
                Patient ID documents and images are stored in AWS S3. Access is
                strictly controlled via AWS Identity and Access Management (IAM)
                users, ensuring that only authorized personnel can retrieve
                these assets.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
        {/* RDS */}
        <Link href="https://aws.amazon.com/rds/" target="_blank">
          <Card
            className="max-w-md mx-auto my-8 border rounded-xl shadow hover:shadow-md transition-shadow bg-gradient-to-br from-[#D7EDED29] to-[#CCEBEB00]"
            style={{
              boxShadow: `0 4px 20px 5px rgba(98, 119, 252, 0.33)`,
            }}
          >
            <CardHeader className="flex items-center space-x-4">
              <div className="w-32 h-32 relative">
                <Image
                  src={awsRdsLogo}
                  alt="AWS RDS Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <CardTitle>AWS RDS</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-center">
                AWS RDS is utilized to manage the PostgreSQL database in a
                secure, scalable, and fully-managed environment. It ensures high
                availability and reliability for storing patient, appointment,
                and administrative data.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      </div>
      <div className="grid lg:grid-cols-2">
        {/* EC2 */}
        <Link href="https://aws.amazon.com/ec2/" target="_blank">
          <Card
            className="max-w-md mx-auto my-8 border rounded-xl shadow hover:shadow-md transition-shadow bg-gradient-to-br from-[#D7EDED29] to-[#CCEBEB00]"
            style={{
              boxShadow: `0 4px 20px 5px rgba(236, 153, 29, 0.33)`,
            }}
          >
            <CardHeader className="flex items-center space-x-4">
              <div className="w-32 h-32 relative">
                <Image
                  src={awsEc2Logo}
                  alt="AWS EC2 Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <CardTitle>AWS EC2</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-center">
                The backend application is hosted on an AWS EC2 instance to
                ensure a highly available and scalable infrastructure.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
        {/* Twilio */}
        <Link href="https://www.twilio.com/en-us" target="_blank">
          <Card
            className="max-w-md mx-auto my-8 border rounded-xl shadow hover:shadow-md transition-shadow bg-gradient-to-br from-[#D7EDED29] to-[#CCEBEB00]"
            style={{
              boxShadow: `0 4px 20px 5px rgba(228, 48, 72, 0.33)`,
            }}
          >
            <CardHeader className="flex items-center space-x-4">
              <div className="w-32 h-32 relative">
                <Image
                  src={twilioLogo}
                  alt="Twilio Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <CardTitle>Twilio (v5.3.7)</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-center">
                Twilio is integrated for secure and reliable SMS-based OTP
                verification, ensuring that only the intended recipient can
                complete the patient registration process.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      </div>
      {/* Other Libraries and Tools */}
      <Header2>Other Libraries and Tools</Header2>
      <div className="grid lg:grid-cols-3">
        {/* React */}
        <Link href="https://react.dev/" target="_blank">
          <Card
            className="max-w-md mx-auto my-8 border rounded-xl shadow hover:shadow-md transition-shadow bg-gradient-to-br from-[#D7EDED29] to-[#CCEBEB00]"
            style={{
              boxShadow: `0 4px 20px 5px rgba(125, 217, 251, 0.33)`,
            }}
          >
            <CardHeader className="flex items-center space-x-4">
              <div className="w-32 h-32 relative">
                <Image
                  src={reactLogo}
                  alt="React Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <CardTitle>React (v19.0.0)</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-center">
                React is used as the core JavaScript library for building
                dynamic and interactive user interfaces. Its component-based
                architecture allows for reusable and maintainable code, enabling
                a seamless user experience throughout the application.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
        {/* Jest */}
        <Link href="https://jestjs.io/" target="_blank">
          <Card
            className="max-w-md mx-auto my-8 border rounded-xl shadow hover:shadow-md transition-shadow bg-gradient-to-br from-[#D7EDED29] to-[#CCEBEB00]"
            style={{
              boxShadow: `0 4px 20px 5px rgba(146, 66, 92, 0.33)`,
            }}
          >
            <CardHeader className="flex items-center space-x-4">
              <div className="w-32 h-32 relative">
                <Image
                  src={jestLogo}
                  alt="Jest Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <CardTitle>Jest (v29.7.0)</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-center">
                Jest is a JavaScript testing framework used for testing the
                back-end functionality of the system. It provides powerful
                mocking capabilities and clear test results, ensuring that APIs
                and business logic work as expected while maintaining the
                reliability of the application.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
        {/* Tailwind CSS */}
        <Link href="https://tailwindcss.com/" target="_blank">
          <Card
            className="max-w-md mx-auto my-8 border rounded-xl shadow hover:shadow-md transition-shadow bg-gradient-to-br from-[#D7EDED29] to-[#CCEBEB00]"
            style={{
              boxShadow: `0 4px 20px 5px rgba(96, 188, 248, 0.33)`,
            }}
          >
            <CardHeader className="flex items-center space-x-4">
              <div className="w-32 h-32 relative">
                <Image
                  src={tailwindCssLogo}
                  alt="Tailwind Css Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <CardTitle>Tailwind CSS (v19.0.0)</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-center">
                Tailwind CSS is a utility-first CSS framework used to style the
                application. It allows for rapid UI development by providing
                pre-defined classes that can be composed directly in the markup,
                ensuring consistency and responsiveness across different screen
                sizes.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      </div>
      {/* Database Schema Overview */}
      <Header2>Testing and Documentation</Header2>
      <Paragraph1>
        Testing: The backend is thoroughly tested using Jest, ensuring that all
        endpoints and functionalities (including OTP generation, appointment
        scheduling, and admin management) are reliable and bug-free.
      </Paragraph1>
      <Paragraph1>
        Documentation: The backend API is documented using Swagger, accessible
        at /api-docs. This provides developers and stakeholders with a clear
        reference of the available endpoints, request/response formats, and
        authentication requirements.
      </Paragraph1>
      {/* Conclusion */}
      <Paragraph1>
        The Patient Management System leverages a powerful technology stack and
        robust architecture to offer a user-friendly and secure environment for
        patient onboarding and appointment management. With Next.js on the
        front-end, Node.js and Express on the back-end, PostgreSQL via Sequelize
        for data persistence, AWS S3 for secure storage, and Twilio for OTP
        verification, the application is both reliable and scalable.
        Well-defined breadcrumbs and an intuitive UI enhance the user
        experience, while comprehensive testing and documentation ensure
        maintainability and confidence in the system’s capabilities.
      </Paragraph1>
      <Paragraph1>
        This system can serve as a strong foundation for future enhancements,
        including expanded appointment management features, integration with
        telemedicine services, and advanced analytics for patient care
        optimization.
      </Paragraph1>
    </div>
  );
};

export default MainPage;
