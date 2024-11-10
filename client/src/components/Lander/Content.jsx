import React from 'react';
import lander from '../../assets/svgs/lander.svg'
import { feature } from '../../utils/data';
import {steps} from '../../utils/data';
import Card from '../Others/Card'



const Content = () => {
  return (
    <div className="font-sans text-white foreground-component mt-10">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Simplify Volunteer & Intern Management</h1>
        <p className="text-lg mb-6 text-gray-400">Manage volunteers, interns, and projects with ease using our intuitive platform.</p>
        <div className="flex space-x-4">
          <button className="bg-[#889de9] text-[#152250] font-semibold px-6 py-2 border-[#889de9] border-2 rounded-lg ">Sign Up Now</button>
          <button className="border-2 border-[#889de9] text-[#889de9] font-semibold px-6 py-2 rounded-lg">Request a Demo</button>
        </div>
        <img src={lander} alt="Volunteer Illustration" className="mt-8 w-[35%]" />
      </section>

      {/* Features Section */}
      <section className="flex-col mt-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Key Features</h2>
          <p className="text-lg text-gray-400">Discover how our platform simplifies volunteer and intern management.</p>
        </div>
        <div className='flex justify-evenly'>
          {feature.map((item, index) => (
            <div key={index} className="text-center mb-12">
              <div className="card flex-col" data-content={item.content}> 
                <img src={item.image} alt="" width={150} />
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="howitworks" className="mt-10 flex-col">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="text-lg text-gray-400">Get started with these simple steps.</p>
        </div>
        <div className='mt-10 flex justify-evenly'>
          {
            steps.map((item , index)=>(
                <Card key={index} id={item.id} title={item.title} content={item.content} image={item.image} />
            ))
          }
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What Our Users Say</h2>
          <p className="text-lg text-gray-600">Hear from those who have transformed their volunteer/intern management with us.</p>
        </div>
        <div className="space-y-8 px-6">
          <div className="flex flex-col items-center text-center">
            <img src="path-to-your-image.jpg" alt="User 1" className="rounded-full mb-4 max-w-[100px] h-[100px] object-cover" />
            <p className="font-semibold">Sarah J.</p>
            <p className="text-gray-600">"This system has revolutionized the way we manage our volunteers! It's simple, efficient, and keeps everything organized. Our productivity has increased by over 30%!"</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="path-to-your-image.jpg" alt="User 2" className="rounded-full mb-4 max-w-[100px] h-[100px] object-cover" />
            <p className="font-semibold">Michael L.</p>
            <p className="text-gray-600">"As an intern manager, this platform has made scheduling and communication so much easier. I can keep track of everyone’s tasks in real-time and offer feedback instantly."</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
