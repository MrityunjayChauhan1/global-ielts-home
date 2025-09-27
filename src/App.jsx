import React from "react";

// ===================== Navbar Component =====================
function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-sky-600">
          🌍 Global <span className="text-gray-800">IELTS</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-sky-600 transition">Home</a>
          <a href="#features" className="hover:text-sky-600 transition">Courses</a>
          <a href="#testimonials" className="hover:text-sky-600 transition">Testimonials</a>
          <a href="#contact" className="hover:text-sky-600 transition">Contact</a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="p-2 rounded-md bg-slate-100">☰</button>
        </div>
      </div>
    </header>
  );
}

// ===================== Hero Section =====================
function HeroSection() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-sky-600 to-blue-700 text-white"
    >
      <div className="container mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Achieve Your Dream IELTS Band 🎓
          </h1>
          <p className="mt-4 text-lg text-sky-100 max-w-lg">
            Join Global IELTS and get expert training, real exam simulation, and
            AI-powered feedback to boost your score confidently.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow hover:brightness-110 transition"
            >
              Start Learning
            </a>
            <a
              href="#features"
              className="px-8 py-3 border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-sky-700 transition"
            >
              Explore Courses
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            className="w-72 md:w-[420px] rounded-xl shadow-2xl"
            src="https://images.unsplash.com/photo-1584697964154-4fdb5e9cb3a9?w=800&auto=format&fit=crop"
            alt="IELTS students studying"
          />
        </div>
      </div>
    </section>
  );
}

// ===================== Features Section =====================
const featureList = [
  {
    title: "🎤 Speaking Mastery",
    description: "1-on-1 daily speaking sessions with instant feedback from certified trainers.",
  },
  {
    title: "📚 Real Exam Mock Tests",
    description: "Simulate the actual IELTS exam environment and track your progress.",
  },
  {
    title: "🤖 AI Band Predictor",
    description: "AI-powered evaluation for writing and speaking with personalized tips.",
  },
  {
    title: "👨‍🏫 Personal Mentorship",
    description: "Get a custom study plan and regular check-ins from our IELTS mentors.",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Global IELTS?</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          We combine expert mentorship, AI tools, and realistic mock tests to
          give you the best chance at achieving your target band.
        </p>

        {/* Feature cards */}
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {featureList.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-sky-600 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== Testimonials Section =====================
const studentTestimonials = [
  {
    name: "Rahul Sharma",
    review: "I improved from Band 6.0 to 7.5 in just 3 months! The speaking practice sessions were life-changing.",
  },
  {
    name: "Ayesha Khan",
    review: "The mock tests helped me feel confident on test day. The mentors were always supportive and motivating.",
  },
  {
    name: "Liam Brown",
    review: "The AI feedback gave me clear and actionable points to improve my writing and speaking. Highly recommend!",
  },
];

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">What Our Students Say</h2>

        <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-3">
          {studentTestimonials.map((student, idx) => (
            <div
              key={idx}
              className="bg-sky-50 p-8 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <p className="text-gray-700 italic mb-4">“{student.review}”</p>
              <footer className="mt-4 text-sm font-semibold text-sky-700">— {student.name}</footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== Contact Section =====================
function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-sky-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <p className="text-gray-700 mb-6">
          Have questions? Reach us via email or phone, or send a message!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold mb-2">Email</h3>
            <p>support@global-ielts.com</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold mb-2">Phone</h3>
            <p>+91 98765 43210</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===================== Footer Section =====================
function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-start justify-between gap-10">
        <div>
          <div className="text-2xl font-extrabold">
            🌍 Global <span className="text-sky-400">IELTS</span>
          </div>
          <p className="mt-4 text-gray-400 max-w-sm">
            Premium IELTS coaching with expert mentorship and AI-powered feedback to help you achieve your goals.
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="mt-3 flex flex-col gap-2 text-gray-300">
              <a href="#home" className="hover:text-sky-400">Home</a>
              <a href="#features" className="hover:text-sky-400">Features</a>
              <a href="#testimonials" className="hover:text-sky-400">Testimonials</a>
              <a href="#contact" className="hover:text-sky-400">Contact</a>
            </nav>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 py-4 text-sm border-t border-gray-700">
        © {new Date().getFullYear()} Global IELTS. All rights reserved.
      </div>
    </footer>
  );
}

// ===================== Main App =====================
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ContactSection /> {/* Now #contact works */}
      </main>
      <FooterSection />
    </div>
  );
}
