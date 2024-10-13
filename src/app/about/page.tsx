import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <Image
        src="https://images.pexels.com/photos/28874283/pexels-photo-28874283/free-photo-of-spazio-di-lavoro-minimo-con-laptop-e-tazza-da-caffe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={500}
        height={500}
        alt="about image"
      />
    </div>
  );
};

export default AboutPage;
