import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center p-4 border-t border-gray-400">
        <Title text1={"ABOUt"} text2={"US"} />
      </div>
      <div className="flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.homepng} alt="" />
        <div className="flex flex-col justify-start gap-6 md:w-2/4 text-gray-600">
          <p className="text-justify">
            Welcome to our online clothing store, where style meets comfort and
            quality. We are passionate about delivering trendy, high-quality
            apparel that helps you express your unique personality with
            confidence. From everyday essentials to statement pieces, our
            collections are thoughtfully designed to suit modern lifestyles. We
            believe fashion should be accessible, affordable, and inspiring.
            That’s why we carefully select fabrics, focus on great fits, and
            stay updated with the latest fashion trends. Whether you’re dressing
            for work, casual outings, or special occasions, we’re here to help
            you look and feel your best.
          </p>
          <p className="text-justify">
            Customer satisfaction is at the heart of everything we do. Our goal
            is to provide a seamless shopping experience with reliable service,
            secure payments, and fast delivery—so you can shop with confidence
            anytime, anywhere.
          </p>
          <b>Our Mission</b>
          <p className="text-justify">
            Our mission is to redefine online fashion shopping by offering
            stylish, comfortable, and affordable clothing for everyone. We aim
            to empower individuals through fashion while maintaining quality,
            sustainability, and trust in every product we deliver.
          </p>
        </div>
      </div>
      <div className=" text-2xl sm:text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US?"} />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="border border-gray-400 px-4 md:px-6 py-4 sm:py-8 flex flex-col rounded ">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringtel quality standard.
          </p>
        </div>
        <div className="border border-gray-400 px-4 md:px-6 py-4 sm:py-8 flex flex-col rounded">
          <b>Convenience</b>
          <p className="text-gray-600">
            With our users interface and hassel-free ordering process, shopping
            has never been easier.
          </p>
        </div>
        <div className="border border-gray-400 px-4 md:px-6 py-4 sm:py-8 flex flex-col rounded">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Our team of dedicated professional is here to assist you the
            way,ensuring your satisfaction is our top prioriity.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
