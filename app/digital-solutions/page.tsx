'use client';
import Image from 'next/image';
import { JSX, useEffect, useState } from 'react';
import {
  FaSchool,
  FaMoneyCheckAlt,
  FaBoxes,
  FaUserTie,
  FaIndustry,
  FaTruckMoving,
  FaLaptopHouse,
  FaHardHat,
  FaCashRegister,
  FaSms,
  FaCode,
  FaFileAlt,
} from 'react-icons/fa';

type Product = {
  title: string;
  icon: JSX.Element;
  description: string;
};

const products: Product[] = [
  { title: 'Integrated School Management System', icon: <FaSchool />, description: "Introducing Eulap’s Integrated School Management System: a comprehensive solution designed to streamline the complexities of educational administration. This all-in-one platform integrates critical functions such as student information management, scheduling, finance, and communication tools into a single, easy-to-use interface. By automating routine tasks and centralizing data, it frees up educators and administrators to focus on what truly matters—educating students. Our system is not just about managing the day-to-day; it’s about bridging gaps in communication and operations, and building brighter futures for students. With robust analytics and customizable features, schools can tailor the experience to meet their unique needs, fostering an environment where every student has the opportunity to succeed. Step into the future of education with Eulap’s Integrated School Management System, where we’re not just managing educational needs—we’re enhancing them." },
  { title: 'Financial Accounting', icon: <FaMoneyCheckAlt />, description: "Introducing Eulap’s Financial Accounting System: a cutting-edge solution crafted to elevate your accounting practices into the digital age. This robust system simplifies complex financial processes, from real-time transaction recording to comprehensive reporting and analysis. Designed for precision and compliance, it ensures your financial data is accurate, accessible, and secure.Our system goes beyond traditional accounting software by offering intuitive interfaces and customizable modules that adapt to your business needs. Whether you’re managing payroll, tracking expenses, or forecasting budgets, Eulap’s Financial Accounting System is your partner in achieving digital accounting excellence. Embrace the future of finance with Eulap, where we bridge the gap to digital accounting excellence, empowering your business with smarter financial management." },
  { title: 'Inventory Management', icon: <FaBoxes />, description: "Introducing Eulap’s Inventory Management System: a smart solution designed to optimize and streamline your inventory processes. Our system revolutionizes the way you track and manage stock, combining advanced automation with user-friendly features to ensure accuracy and efficiency. Whether it’s overseeing stock levels, managing reorders, or analyzing sales patterns, our software makes inventory control effortless. Eulap’s Inventory Management System is built to adapt to businesses of all sizes, offering scalable solutions that grow with your needs. With real-time updates and insightful analytics, you can make informed decisions that reduce waste and increase profitability. Elevate your inventory management with Eulap—where we help you stock smarter, not harder."},
  { title: 'HRIS with Payroll', icon: <FaUserTie />, description: " Our Human Resource Integrated System (HRIS) with Payroll is designed to seamlessly integrate with your company policies, offering a tailor-fit solution for simplifying HR management and payroll processes. This robust system helps streamline everything from employee onboarding to payroll administration, ensuring precision and reducing administrative burdens. With adaptable tools for data management, attendance tracking, and benefits administration, our HRIS is built to handle complex HR tasks efficiently. By aligning closely with your specific needs and compliance standards, it not only enhances operational efficiency but also boosts employee satisfaction through streamlined workflows and accurate payroll management." },
  { title: 'Manufacturing System', icon: <FaIndustry />, description: " Eulap's Manufacturing System revolutionizes your production process, from the intake of raw materials to the delivery of finished goods. Designed for optimal efficiency and precision, this comprehensive system streamlines inventory management, enhances production planning, and enforces rigorous quality controls. With features that support real-time updates, automated scheduling, and detailed cost analysis, it not only maximizes productivity but also ensures high standards of quality and cost-effectiveness. Transform your manufacturing operations with Eulap's system to achieve unparalleled precision and efficiency." },
  { title: 'Fleet Management', icon: <FaTruckMoving />, description: "Our Fleet Management system offers a comprehensive solution to streamline your vehicle operations, ensuring each part of your fleet functions optimally for maximal efficiency and safety. With the tagline 'Drive Success: Navigate Your Fleet with Precision and Control,' our system empowers you to monitor vehicle statuses, optimize routes, and manage maintenance schedules with ease. Utilize detailed analytics and real-time data to make informed decisions, reduce operational costs, and enhance driver performance. Join us in driving success by managing your fleet more effectively and ensuring each journey is as productive as it is profitable." },
  { title: 'Asset Management', icon: <FaLaptopHouse />, description: "Our Asset Management solution simplifies the complex task of maximizing the value of your assets. It offers a precision-driven approach to optimize every aspect of asset utilization and maintenance. With our system, you can efficiently track and manage inventories, ensure timely maintenance, and enhance the overall performance of your assets. This streamlined management not only reduces downtime and operational costs but also ensures that each asset is leveraged to its fullest potential with minimal effort on your part. Dive into a world where asset optimization meets effortless management, and experience unmatched operational efficiency." },
  { title: 'Construction Management System', icon: <FaHardHat />, description: "Our Project Management System for construction is engineered to elevate your project delivery from the ground up. This specialized software empowers your team to oversee construction projects with unparalleled precision and control, ensuring each phase-from planning to completion-is executed flawlessly. Tailored to adapt to unique industry standards and company policies, our system integrates seamlessly into your operations, enhancing collaboration and efficiency. With tools designed for real-time scheduling, resource allocation, and progress tracking, it helps you maintain high standards of quality and on-time project completion, setting a solid foundation for success in every build." },
  { title: 'Point of Sale', icon: <FaCashRegister />, description: "Our Point of Sale (POS) system is designed to optimize every transaction, ensuring peak performance right where it matters most. This powerful tool enhances the checkout experience by combining speed, reliability, and user-friendly features into one efficient package. Ideal for businesses of any size, it facilitates seamless sales operations, comprehensive inventory management, and detailed reporting. With our POS system, you can streamline your sales processes, boost customer satisfaction, and drive business growth, all while maintaining top-tier operational efficiency at every point of sale." },
  { title: 'EULAP SMS', icon: <FaSms />, description: "Eulap SMS is a dynamic messaging platform designed to facilitate seamless communication and strengthen connections within your organization. This versatile system supports instant, reliable SMS delivery, enabling you to bridge thoughts and foster engagement across diverse teams. Whether it's for internal communications, marketing campaigns, or customer interactions, Eulap SMS ensures your messages are delivered efficiently and effectively. By integrating this tool into your communication strategy, you can enhance collaboration, increase responsiveness, and build stronger connections, driving both productivity and satisfaction." },
  { title: 'Web Development', icon: <FaCode />, description: "Our Web Development services offer custom solutions tailored to enhance your digital journey, including specialized options for e-commerce. Whether you're launching a brand-new online store, revamping an existing e-commerce site, or seeking unique web applications, our team of experts is equipped to deliver responsive, high-quality, and scalable web solutions. We focus on creating engaging and functional e- commerce platforms that ensure a seamless shopping experience across all devices, driving customer satisfaction and sales. Embrace the potential of the digital marketplace with our bespoke web development services, designed to meet the specific needs and aspirations of your business." },
  { title: 'Document Management System', icon: <FaFileAlt />, description: "Introducing Eulap Document Management System (DMS) - the ultimate solution for seamlessly organizing, accessing, and succeeding with your digital documents. Eulap DMS empowers businesses to streamline their document workflows, ensuring all your files are systematically organized and effortlessly accessible from anywhere, at any time. With advanced search capabilities, robust security features, and intuitive user interface, Eulap DMS simplifies document management, enhances productivity, and supports compliance with industry regulations. Trust Eulap to transform the way you handle documents, driving your business towards unparalleled efficiency and success. Organize, Access, Succeed with Eulap DMS." },
];

export default function DigitalSolutionsPage() {
  const [selected, setSelected] = useState<Product | null>(null);

  useEffect(() => {
    const container = document.getElementById('scroll-container');
    if (container) {
      const handleWheel = (e: WheelEvent) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        }
      };
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, []);

  return (

    
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-4xl font-bold text-blue-900 mb-2 text-center">Our Digital Solutions</h2>
      <p className="text-customGrey mb-6 text-center max-w-2xl">
        Explore our smart, scalable solutions tailored to support your business success.
      </p>

      <div
        id="scroll-container"
        className="w-full max-w-7xl overflow-x-auto scroll-smooth scrollbar-hide"
      >
        <div className="flex gap-4 px-2 py-4 w-max">
          {products.map((product) => (
            <div
              key={product.title}
              onClick={() => setSelected(product)}
              className="bg-white border border-blue-200 rounded-xl shadow-sm transition duration-300 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md hover:bg-blue-100
                         w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-56 xl:h-56"
            >
              <div className="w-14 h-14 mb-3 flex items-center justify-center rounded-full bg-blue-200 text-2xl text-blue-800 shadow-inner">
                {product.icon}
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-blue-900 px-2 leading-tight line-clamp-2">
                {product.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
 {selected && (
  <div
    className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
    onClick={() => setSelected(null)} // clicking outside closes modal
  >
 <div
  className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-md relative transition-all duration-300 animate-fadeInUp"

    >
      <button
        onClick={() => setSelected(null)}
        className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold"
      >
        ×
      </button>
      <div className="text-blue-600 text-6xl mb-4 flex justify-center">
        {selected.icon}
      </div>
      <h3 className="text-xl font-bold text-center text-blue-900 mb-2">{selected.title}</h3>
      <p className="text-gray-700 text-center">{selected.description}</p>
    </div>
  </div>
)}
  <a
    href="https://eulap.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      className="px-8 py-3 bg-blue-600 text-white text-lg rounded-full shadow-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
    >
      Visit Our Website
    </button>
  </a>

      {/* Logo */}
      <div className="absolute top-10 left-10 z-10">
        <Image src="/logo.png" alt="EULAP Logo" width={200} height={200} />
      </div>

            {/* MINDACON Logo */}
      <div className="absolute top-10 right-10 z-10">
        <Image src="/MINDACON.png" alt="MINDACON Logo" width={200} height={200} />
      </div>

              {/* Animated Background Circles */}
      <div className="absolute w-full h-full top-0 left-0 overflow-hidden pointer-events-none z-(-2)">
        <div className="absolute bg-blue-300 opacity-30 rounded-full w-96 h-96 animate-pulse-slow top-10 -left-20 blur-3xl" />
        <div className="absolute bg-blue-200 opacity-20 rounded-full w-72 h-72 animate-pulse-slow top-60 right-0 blur-2xl" />
        <div className="absolute bg-blue-400 opacity-10 rounded-full w-80 h-80 animate-pulse-slow bottom-0 left-1/2 blur-2xl transform -translate-x-1/2" />
      </div>
      
    </div>

    
  );
}
