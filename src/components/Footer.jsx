import React from "react";
import Socials from "./reuseables/Socials";
import BrandInfo from "./reuseables/BrandInfo";

export default function Footer() {
  return (
    <>
    <footer className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-2.5 bg-[#290A38] text-white text-base p-6">
  <BrandInfo extendStyles="mt-2" />
    <div className="w-full sm:w-64">
      <p>
        Join us for an immersive journey into the future of
        technology at Nanocode’s Event,
      </p>
    </div>
    <section className="w-full md:w-[200px]">
      <h3 className="text-sm text-white font-medium mb-1">ABOUT US</h3>
      <p>At Nanocodes event center, we believe in the power of bringing people together to inspire, educate, and elevate.</p>
    </section>
    <div className="w-full md:w-[200px]">
      <h3 className="text-sm text-white font-medium mb-1">OUR SERVICES</h3>
      <p className="text-sm md:text-base">Our experienced event management team handles every aspect of planning and execution, from venue selection and logistics to program development and attendee engagement.</p>
    </div>
    <div className="w-full md:w-[220px]">
      <h3 className="text-sm text-white font-medium mb-1">SOCIAL HANDLES</h3>
      <p>Do well to follow us, like and comment in every of our post</p>
      <Socials className="p-6" />
      <hr className="text-white" />
    </div>
    </footer>
    </>
  );
}



// import React from "react";
// import Socials from "./reuseables/Socials";
// import BrandInfo from "./reuseables/BrandInfo";

// export default function Footer() {
//   return (
//     <>
//     <footer className="max-w-[300px] w-1/5 sm:w-full flex flex-col lg:flex-row justify-between items-center bg-[#290A38] text-white text-base p-6">
//   <BrandInfo extendStyles="mt-2" />
//     <div className="w-64">
//       <p>
//         Join us for an immersive journey into the future of
//         technology at Nanocode’s Event,
//       </p>
//     </div>
//     <section className="max-w-[300px] w-1/5 sm:w-[200px]">
//       <h3 className="text-sm text-white font-medium mb-1">ABOUT US</h3>
//       <p>At Nanocodes event center, we believe in the power of bringing people together to inspire, educate, and elevate.</p>
//     </section>
//     <div className="max-w-[300px] w-1/5 sm:w-[210px]">
//       <h3 className="text-sm text-white font-medium mb-1">OUR SERVICES</h3>
//       <p>Our experienced event management team handles every aspect of planning and execution, from venue selection and logistics to program development and attendee engagement.</p>
//     </div>
//     <div className="max-w-[300px] w-1/5 sm:w-[220px]">
//       <h3 className="text-sm text-white font-medium mb-1">SOCIAL HANDLES</h3>
//       <p>Do well to follow us, like and comment in every of our post</p>
//       <Socials className="p-6" />
//       <hr className="text-white" />
//     </div>
//     </footer>
//     </>
//   );
// }
