
import { FaPhone } from "react-icons/fa";
import { MdAddLocation, MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="border-t border-gray-400">
      <div className="grid grid-cols-1 md:grid-cols-2 my-10">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold">
            CONTACT <b className="text-blue-900">US</b>
          </h1>
          <p className="text-gray-400 text-base text-justify max-w-lg leading-relaxed">
        Welcome to our ByteBazar portal! We Provide quality clothings producst with minimum price  in connecting talent with opportunity. With advanced tech and personalized service, we make matches that matter. Let's elevate your career or organization together
          </p>

          <div className="my-8 cursor-pointer">
            <p className="flex items-center gap-2 text-lg text-gray-500 my-2">
              <FaPhone size={34} className="hover:text-blue-800" />
              01-4457583
            </p>
            <p className="flex items-center gap-2 text-lg text-gray-500 my-2">
              <MdAddLocation className="hover:text-blue-800" size={34} />
              Shambhu Marga,Kathmandu,Nepal
            </p>
            <p className="flex items-center gap-2 text-lg text-gray-500 my-2">
              <MdEmail className="hover:text-blue-800" size={34} />
              info@bytebazaargmail.com
            </p>
          </div>
        </div>
        <div>
          <form action="" className="space-y-4">
            <div>
              <h1 className="text-3xl font-semibold mb-2 text-gray-700">Get In Touch</h1>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="name">Name*</label>
              <input className="w-full px-6 py-2 outline-blue-300 border border-gray-500 rounded-lg" type="text"  placeholder="Enter Your Name"/>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="email">Email*</label>
              <input className="w-full px-6 py-2 outline-blue-300 border border-gray-500 rounded-lg" type="email"  placeholder="youremail@gmail.com"/>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="phone">Phone Number*</label>
              <input className="w-full px-6 py-2 outline-blue-300 border border-gray-500 rounded-lg" type="text"  placeholder="+977-000000000"/>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="message">Message*</label>
              <textarea className="w-full px-6 py-2 outline-blue-300 border border-gray-500 rounded-lg" type="text"  placeholder="Type Your Message Here...."/>
            </div>
            <button className="bg-blue-600 px-6 py-2 w-full border border-gray-500 rounded text-white cursor-pointer hover:bg-blue-800">Send Message</button>
      
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
