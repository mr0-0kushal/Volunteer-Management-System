import React from 'react';
import lander from '../../assets/svgs/lander.svg'
import one from '../../assets/svgs/one.svg'
import two from '../../assets/svgs/two.svg'
import three from '../../assets/svgs/three.svg'
import four from '../../assets/svgs/four.svg'
import five from '../../assets/svgs/five.svg'

const Content = () => {

  const feature = [
    {
      title: 'Volunteer/Intern Profiles',
      image: one,
      content: "Create and manage detailed profiles for every participant, including skills and availability.",
    },
    {
      title: 'Task Management',
      image: two,
      content: "Assign tasks to participants with a few clicks and track progress in real-time.",
    },
    {
      title: 'Automated Scheduling',
      image: three,
      content: "Simplify scheduling with automatic shift assignments and notifications.",
    },
    {
      title: 'Real-Time Communication',
      image: four,
      content: "Keep in touch with your team instantly through built-in messaging and notifications.",
    },
    {
      title: 'Reporting & Analytical',
      image: five,
      content: "Track performance, attendance, and generate reports to analyze your program’s impact.",
    },
  ]
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
      <section className="flex-col">
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
      <section id="howitworks" className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="text-lg text-gray-600">Get started with these simple steps.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <img src="path-to-your-image.jpg" alt="Step 1" className="mb-4 max-w-full h-auto" />
            <h3 className="text-xl font-semibold mb-2">Step 1: Sign Up</h3>
            <p className="text-gray-600">Create an account to get started with managing your volunteers and interns.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <img src="path-to-your-image.jpg" alt="Step 2" className="mb-4 max-w-full h-auto" />
            <h3 className="text-xl font-semibold mb-2">Step 2: Add Participants</h3>
            <p className="text-gray-600">Invite volunteers or interns and manage their profiles with ease.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <img src="path-to-your-image.jpg" alt="Step 3" className="mb-4 max-w-full h-auto" />
            <h3 className="text-xl font-semibold mb-2">Step 3: Assign Tasks</h3>
            <p className="text-gray-600">Assign tasks and track progress through your dashboard.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <img src="path-to-your-image.jpg" alt="Step 4" className="mb-4 max-w-full h-auto" />
            <h3 className="text-xl font-semibold mb-2">Step 4: Track & Analyze</h3>
            <p className="text-gray-600">Use built-in analytics to monitor performance and attendance.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <img src="path-to-your-image.jpg" alt="Step 5" className="mb-4 max-w-full h-auto" />
            <h3 className="text-xl font-semibold mb-2">Step 5: Communicate</h3>
            <p className="text-gray-600">Engage with your team via direct messaging and real-time updates.</p>
          </div>
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
