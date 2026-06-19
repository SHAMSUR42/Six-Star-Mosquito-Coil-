import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useHoverSound } from './hooks/useHoverSound';
import { 
  ShieldCheck, Phone, ArrowRight, Clock, HeartPulse, 
  Shield, Wind, Users, ShoppingCart, Quote, Star, 
  ChevronDown, PhoneCall, MessageCircle, MapPin, 
  Facebook, CheckCircle 
} from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`border ${isOpen ? 'border-brand-green-300' : 'border-slate-200'} rounded-2xl overflow-hidden cursor-pointer shadow-sm transition-colors`} 
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="px-6 py-5 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors">
        <h4 className="font-bold text-lg text-slate-800">{question}</h4>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      <div className={`px-6 pb-5 text-slate-600 leading-relaxed ${isOpen ? 'block pt-2' : 'hidden'}`}>
        {answer}
      </div>
    </motion.div>
  );
};

function App() {
  const playHoverSound = useHoverSound();
  const [redStock, setRedStock] = useState<'Available' | 'Limited Stock'>('Available');
  const [greenStock, setGreenStock] = useState<'Available' | 'Limited Stock'>('Limited Stock');

  return (
    <div className="bg-slate-50 font-sans text-gray-900 border-t-8 border-brand-red-600">
      {/* Top Banner */}
      <div className="bg-brand-red-600 text-white text-xs font-bold text-center py-2.5 px-4 tracking-wider z-50 relative pointer-events-none">
        📢 CHOLING SPECIAL: Six Star Mosquito Coil 10 Hours starting from ৳ 35 TK Only! Call 01911319516 or 01725066442
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-brand-red-500 rounded p-1.5 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-gray-900">Six Star Mosquito Coil <span className="text-brand-red-500">★</span></span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" onMouseEnter={playHoverSound} className="text-sm font-semibold text-gray-600 hover:text-brand-red-600 transition-colors">About Us</a>
              <a href="#features" onMouseEnter={playHoverSound} className="text-sm font-semibold text-gray-600 hover:text-brand-red-600 transition-colors">Features</a>
              <a href="#products" onMouseEnter={playHoverSound} className="text-sm font-semibold text-gray-600 hover:text-brand-red-600 transition-colors">Products</a>
              <a href="#reviews" onMouseEnter={playHoverSound} className="text-sm font-semibold text-gray-600 hover:text-brand-red-600 transition-colors">Reviews</a>
              <a href="#faq" onMouseEnter={playHoverSound} className="text-sm font-semibold text-gray-600 hover:text-brand-red-600 transition-colors">FAQ</a>
            </div>
            <div className="hidden md:flex">
              <a href="#contact" onMouseEnter={playHoverSound} className="bg-gray-900 hover:bg-brand-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm flex items-center gap-2">
                <Phone className="w-4 h-4" /> অর্ডার করুন
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-white pt-20 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-red-100 text-brand-red-700 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                <ShieldCheck className="w-4 h-4" /> প্রিমিয়াম সুরক্ষা
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
                আপনার পরিবারকে মশা থেকে <span className="text-brand-green-600">নিরাপদ</span> রাখুন
              </h1>
              <p className="text-lg text-gray-600 mb-8 font-medium leading-relaxed">
                দীর্ঘস্থায়ী সুরক্ষা সহ উচ্চ-মানের মশার কয়েল। সিক্স স্টার মশার কয়েল-এর শক্তির অভিজ্ঞতা নিন। হাজার হাজার মানুষের বিশ্বস্ত আমাদের কয়েলগুলো আপনার বাড়ির জন্য ন্যূনতম ধোঁয়া ও সর্বাধিক কার্যকারিতা প্রদান করে।
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#products" onMouseEnter={playHoverSound} className="bg-brand-green-600 hover:bg-brand-green-700 text-white font-bold px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all text-base">
                  পণ্যগুলো দেখুন <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#contact" onMouseEnter={playHoverSound} className="bg-white hover:bg-gray-50 text-slate-800 font-bold px-8 py-3.5 border-2 border-slate-200 rounded-xl flex items-center justify-center gap-2 transition-all">
                  যোগাযোগ করুন
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-green-100 p-2 rounded-lg text-brand-green-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">১০ ঘণ্টা</div>
                    <div className="text-sm text-gray-500">একটানা জ্বলন</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-brand-red-100 p-2 rounded-lg text-brand-red-600">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">নিরাপদ</div>
                    <div className="text-sm text-gray-500">পারিবারিক ব্যবহার</div>
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center gap-3 mt-2 sm:mt-0">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">১০,০০০+ পরিবার</div>
                    <div className="text-sm text-gray-500">কর্তৃক বিশ্বস্ত</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-brand-green-100 transform rotate-3 rounded-3xl"></div>
              <img src="/six_star_green.jpg" alt="Six Star Mosquito Coil Premium" className="relative rounded-3xl shadow-xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500 w-full object-cover aspect-square md:aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-red-600 font-bold text-sm uppercase tracking-widest">আমাদের সম্পর্কে</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mt-3 mb-6">নিরাপদ ও সুস্থ পরিবেশের লক্ষ্যে</h2>
            <p className="text-lg text-gray-600">
              <strong>সিক্স স্টার মশার কয়েল</strong>-এ আমরা বুঝি যে আপনার বাড়ির নিরাপত্তা এবং প্রিয়জনদের স্বাস্থ্যের চেয়ে গুরুত্বপূর্ণ আর কিছু নেই। ডেঙ্গু, চিকুনগুনিয়া এবং ম্যালেরিয়ার মতো মশাবাহিত রোগ একটি উল্লেখযোগ্য উদ্বেগের বিষয়—আমাদের লক্ষ্য এই ঝুঁকি থেকে আপনাকে মুক্ত রাখা।
            </p>
            <div className="mt-8 border-l-4 border-brand-red-500 pl-6 py-2 italic text-gray-600 text-center mx-auto sm:text-left bg-white p-6 rounded-r-xl shadow-sm">
              "আমরা বিশ্বাস করি সুরক্ষার মূল্য কখনও আপনার মনের শান্তি কেড়ে নেওয়া উচিত নয়। শিশু এবং বয়স্কদের জন্য সর্বোচ্চ নিরাপত্তা এবং শ্বাস-প্রশ্বাসের আরাম উভয়ই নিশ্চিত করে সিক্স স্টার মশার কয়েল।"
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-green-600 font-bold text-sm uppercase tracking-widest">কেন আমরা সেরা</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mt-3 mb-4">কেন গ্রাহকরা সিক্স স্টার মশার কয়েল বেছে নেন</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">সিক্স স্টার মশার কয়েল নিখুঁত মূল দক্ষতার সাথে তৈরি করা হয়েছে যা ঘরের বাতাসের গুণমানের কোনো ক্ষতি না করেই মশার কামড় থেকে অতুলনীয় সুরক্ষা প্রদান করে।</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition"
            >
              <div className="bg-brand-red-100 w-14 h-14 rounded-xl flex items-center justify-center text-brand-red-600 mb-6">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl mb-3">শক্তিশালী কার্যকারিতা</h3>
              <p className="text-gray-600">আমাদের উন্নত প্রযুক্তি দ্রুত মশা তাড়াতে এবং দীর্ঘ সময়ের জন্য মশা মুক্ত পরিবেশ নিশ্চিত করে。</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition"
            >
              <div className="bg-brand-green-100 w-14 h-14 rounded-xl flex items-center justify-center text-brand-green-600 mb-6">
                <Wind className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl mb-3">কম ধোঁয়া, বেশি স্বস্তি</h3>
              <p className="text-gray-600">প্রিমিয়াম উপাদান থেকে তৈরি আমাদের কয়েলগুলো সাধারণ কয়েলের তুলনায় অনেক কম ধোঁয়া তৈরি করে।</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition"
            >
              <div className="bg-brand-red-100 w-14 h-14 rounded-xl flex items-center justify-center text-brand-red-600 mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl mb-3">ক্রেতাদের বিশ্বস্ত</h3>
              <p className="text-gray-600">বাংলাদেশের লাখ লাখ পরিবার নিরাপদ মশা নিবারণ এবং শান্তির ঘুমের জন্য সিক্স স্টার মশার কয়েল এর উপর নির্ভর করে।</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing / Products Section */}
      <section id="products" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-green-400 font-bold text-xs uppercase tracking-widest border border-brand-green-400/30 bg-brand-green-400/10 px-3 py-1 rounded-full">আমাদের প্রোডাক্ট রেঞ্জ</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-6 mb-4">সিক্স স্টার মশার কয়েল প্যাকেজ এবং প্রাইসিং</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-16">আমরা ১০ ঘণ্টা একটানা জ্বলা দুটি প্রিমিয়াম রঙের কয়েল অফার করি। একটি প্যাক অথবা পাইকারি কার্টনের জন্য আকর্ষণীয় মূল্যে ডিসকাউন্ট দেখে নিন!</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
            {/* Red Jumbo */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white text-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col transform hover:-translate-y-2 transition duration-300"
            >
              <div className="h-48 relative overflow-hidden bg-brand-red-50">
                <img src="/six_star_red.jpg" className="w-full h-full object-cover" alt="Red Jumbo" />
                <div className="absolute top-4 right-4 bg-brand-red-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow-md">সর্বোচ্চ বিক্রিত</div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-brand-red-600 text-xs font-bold uppercase tracking-widest mb-2 block">লাল স্পাইরাল কনফিগারেশন</span>
                <h3 className="font-display font-bold text-2xl mb-2 flex items-center justify-between">
                  সিক্স স্টার মশার কয়েল জাম্বো (লাল)
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${redStock === 'Available' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {redStock === 'Available' ? 'স্টকে আছে' : 'লিমিটেড স্টক'}
                  </span>
                </h3>
                <p className="text-gray-500 text-sm italic mb-4">"অতুলনীয় মান এবং শক্তিশালী সুরক্ষা"</p>
                <p className="text-gray-600 text-sm mb-8 flex-1">আমাদের উচ্চ-ক্ষমতাসম্পন্ন লাল জাম্বো প্যাক দ্রুত মশা তাড়াতে সাহায্য করে, ইনডোর এবং আউটডোরে ভারী সুরক্ষার জন্য বিশেষ ভাবে তৈরি।</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                    <div className="text-xs text-gray-500 uppercase font-semibold mb-1">১ বক্স (খুচরা)</div>
                    <div className="font-display font-bold text-2xl">৳ ৩৫</div>
                  </div>
                  <div className="bg-brand-red-50 border border-brand-red-100 rounded-xl p-4 text-center">
                    <div className="text-xs text-brand-red-700 uppercase font-semibold mb-1">১ কার্টন (পাইকারি)</div>
                    <div className="font-display font-bold text-2xl text-brand-red-600">৳ ১০৫০</div>
                  </div>
                </div>
                <a href="https://api.whatsapp.com/send?phone=8801725066442&text=Hi%20Six%20Star!%20I%20want%20to%20order%20Red%20Jumbo%20Coil." onMouseEnter={playHoverSound} target="_blank" rel="noopener noreferrer" className="w-full bg-brand-red-600 hover:bg-brand-red-700 text-white text-center font-bold py-4 rounded-xl shadow-md transition flex justify-center items-center gap-2">
                  <ShoppingCart className="w-5 h-5" /> হোয়াটসঅ্যাপে অর্ডার করুন
                </a>
              </div>
            </motion.div>

            {/* Green Premium */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white text-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col transform hover:-translate-y-2 transition duration-300 relative"
            >
              <div className="absolute top-0 inset-x-0 h-1.5 bg-brand-green-500 z-10"></div>
              <div className="h-48 relative overflow-hidden bg-brand-green-50">
                <img src="/six_star_green.jpg" className="w-full h-full object-cover" alt="Green Premium" />
                <div className="absolute top-4 right-4 bg-brand-green-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow-md">প্রিমিয়াম চয়েস</div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-brand-green-600 text-xs font-bold uppercase tracking-widest mb-2 block">সবুজ স্পাইরাল কনফিগারেশন</span>
                <h3 className="font-display font-bold text-2xl mb-2 flex items-center justify-between">
                  সিক্স স্টার মশার কয়েল প্রিমিয়াম (সবুজ)
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${greenStock === 'Available' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {greenStock === 'Available' ? 'স্টকে আছে' : 'লিমিটেড স্টক'}
                  </span>
                </h3>
                <p className="text-gray-500 text-sm italic mb-4">"পরিবেশ-বান্ধব আল্ট্রা-লো স্মোক ফর্মুলা"</p>
                <p className="text-gray-600 text-sm mb-8 flex-1">সবুজ প্রিমিয়াম কয়েল একটি উন্নত জৈব-উপাদান ফর্মুলা ব্যবহার করে তৈরি যা শক্তিশালী, প্রাকৃতিক সুরক্ষা প্রদানের পাশাপাশি কম ধোঁয়া তৈরি করে।</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                    <div className="text-xs text-gray-500 uppercase font-semibold mb-1">১ বক্স (খুচরা)</div>
                    <div className="font-display font-bold text-2xl">৳ ৫৫</div>
                  </div>
                  <div className="bg-brand-green-50 border border-brand-green-100 rounded-xl p-4 text-center">
                    <div className="text-xs text-brand-green-700 uppercase font-semibold mb-1">১ কার্টন (পাইকারি)</div>
                    <div className="font-display font-bold text-2xl text-brand-green-600">৳ ১৬৫০</div>
                  </div>
                </div>
                <a href="https://api.whatsapp.com/send?phone=8801725066442&text=Hi%20Six%20Star!%20I%20want%20to%20order%20Green%20Premium%20Coil." onMouseEnter={playHoverSound} target="_blank" rel="noopener noreferrer" className="w-full bg-brand-green-600 hover:bg-brand-green-700 text-white text-center font-bold py-4 rounded-xl shadow-md transition flex justify-center items-center gap-2">
                  <ShoppingCart className="w-5 h-5" /> হোয়াটসঅ্যাপে অর্ডার করুন
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-brand-green-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-brand-green-600 font-bold text-sm uppercase tracking-widest">কাস্টমার রিভিউ</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mt-3 mb-4">দেশব্যাপী পরিবারের কাছে বিশ্বস্ত</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">খুশি মায়েরা, মুদি দোকানের মালিক এবং স্বাস্থ্য পরামর্শদাতাদের কাছ থেকে শুনুন যারা তাদের বাড়ি রক্ষার জন্য সিক্স স্টার মশার কয়েল বেছে নিয়েছেন।</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
            >
              <div className="absolute -top-4 -left-4 text-brand-green-200">
                <Quote className="w-12 h-12 fill-current" />
              </div>
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-gray-700 mb-6 relative z-10 font-medium leading-relaxed">
                "সবুজ প্রিমিয়াম কয়েলটা সত্যিই দারুন। আমার ৫ বছরের ছেলের ধোঁয়ায় সমস্যা হয়, কিন্তু সিক্স স্টার মশার কয়েল খুব হালকা ধোঁয়া তৈরি করে এবং এর সুবাসও সুন্দর। গত দুই সপ্তাহে কোনো মশা কামড়ায়নি!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-green-100 flex items-center justify-center text-brand-green-700 font-bold">ম</div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">মোহাম্মদ রাকিব</div>
                  <div className="text-xs text-gray-500">ঢাকা, বাংলাদেশ</div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
            >
              <div className="absolute -top-4 -left-4 text-brand-green-200">
                <Quote className="w-12 h-12 fill-current" />
              </div>
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-gray-700 mb-6 relative z-10 font-medium leading-relaxed">
                "আমি ভারী পেস্টিসাইড কয়েলের ঘোর বিরোধী। সিক্স স্টার মশার কয়েল পুরোপুরি ল্যাব-অ্যাপ্রুভড, এতে নিরাপদ কিন্তু মশার বিরুদ্ধে অত্যন্ত কার্যকরী উপাদান ব্যবহার করা হয়েছে। আমি তাদের সবুজ প্যাকটির সুপারিশ করছি।"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-red-100 flex items-center justify-center text-brand-red-700 font-bold">আ</div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">ড. আসিফ মাহমুদ</div>
                  <div className="text-xs text-gray-500">সিলেট, বাংলাদেশ</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-10 text-gray-900">সাধারণ জিজ্ঞাসা (FAQ)</h2>
          </motion.div>
          <div className="space-y-4">
            <FAQItem 
              question="একটি সিক্স স্টার মশার কয়েল কতক্ষণ জ্বলে?" 
              answer="প্রতিটি প্রিমিয়াম সিক্স স্টার মশার কয়েল এমনভাবে তৈরি করা হয়েছে যা সারা রাত সুরক্ষার জন্য নিশ্চিতভাবে ১০ ঘণ্টা একটানা এবং সমান ধোঁয়ায় জ্বলে।" 
            />
            <FAQItem 
              question="শিশু এবং গর্ভবতী মহিলাদের জন্য এটি কি নিরাপদ?" 
              answer="হ্যাঁ, আমাদের কয়েলগুলো প্রিমিয়াম-গ্রেড উপাদান দিয়ে তৈরি যা পারিবারিক পরিবেশের জন্য নিরাপদ প্রমাণিত। বিশেষ করে আমাদের সবুজ প্রিমিয়াম কয়েল ধোঁয়া-সংবেদনশীল ব্যক্তিদের জন্য অত্যন্ত শ্বাস-প্রশ্বাসের স্বস্তি প্রদান করে, যেখানে কঠোর রাসায়নিক ব্যবহার করা হয় না।" 
            />
            <FAQItem 
              question="আমি কিভাবে সিক্স স্টার মশার কয়েল বালক বা পাইকারিতে অর্ডার করতে পারি?" 
              answer="খুচরা বিক্রেতা এবং ডিস্ট্রিবিউটরদের জন্য আমরা কার্টন সাইজে বিশাল ডিসকাউন্ট অফার করি! আপনি সরাসরি আমাদের হটলাইনে কল করতে পারেন অথবা নির্দিষ্ট পাইকারি প্রাইস লিস্ট সম্পর্কে জানতে হোয়াটসঅ্যাপে আমাদের সাথে যোগাযোগ করতে পারেন।" 
            />
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-16 bg-brand-red-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold mb-4">অর্ডার বা ডিলারশিপের জন্য যোগাযোগ করুন</h2>
            <p className="mb-8 text-brand-red-100 text-lg">আমাদের ডেডিকেটেড সাপোর্ট টিম আপনাকে সাহায্য করতে প্রস্তুত।</p>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:01911319516" onMouseEnter={playHoverSound} className="bg-white text-brand-red-600 hover:bg-gray-50 font-bold py-4 px-8 rounded-xl inline-flex items-center justify-center gap-3 transition shadow-lg">
              <PhoneCall className="w-5 h-5" /> 01911319516
            </a>
            <a href="https://api.whatsapp.com/send?phone=8801725066442" onMouseEnter={playHoverSound} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-xl inline-flex items-center justify-center gap-3 transition shadow-lg">
              <MessageCircle className="w-5 h-5" /> হোয়াটসঅ্যাপ ম্যাসেজ
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-gray-950 text-white pt-16 pb-8 border-t-4 border-brand-green-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-brand-red-500 rounded p-1.5 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <span className="font-display font-bold text-2xl tracking-tight">Six Star Mosquito Coil <span className="text-brand-red-500">★</span></span>
              </div>
              <p className="text-gray-400 leading-relaxed">আপনার পরিবারকে মশা থেকে সুরক্ষিত রাখুন। সিক্স স্টার মশার কয়েল ১০-ঘন্টা একটানা সুরক্ষার কয়েল তৈরি করে যা মশা থেকে আরামদায়ক ভাবে দূরে রাখে।</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 font-display">কুইক লিংক</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" onMouseEnter={playHoverSound} className="hover:text-white transition">কোম্পানি সম্পর্কে</a></li>
                <li><a href="#products" onMouseEnter={playHoverSound} className="hover:text-white transition">প্রোডাক্ট ক্যাটাগরি</a></li>
                <li><a href="#faq" onMouseEnter={playHoverSound} className="hover:text-white transition">সাধারণ প্রশ্নাবলি</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 font-display">যোগাযোগের ঠিকানা</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-red-500 flex-shrink-0 mt-0.5" />
                  <span>১০ মিজমিজি, কান্দাপাড়া, বাতেন ভবন, সিদ্ধিরগঞ্জ, নারায়ণগঞ্জ, বাংলাদেশ</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-red-500 flex-shrink-0" />
                  <span>০১৯১১৩১৯৫১৬, ০১৭২৫০৬৬৪৪২</span>
                </li>
                <li className="flex items-center gap-3">
                  <a href="https://www.facebook.com/share/1Atp2mzDEp/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition group" onMouseEnter={playHoverSound}>
                    <Facebook className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
                    <span>আমাদের ফেসবুক পেজ</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>কপিরাইট © ২০২৬ নাদিয়া এন্টারপ্রাইজ (Nadia Enterprise)। সর্বস্বত্ব সংরক্ষিত।</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=8801725066442"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={playHoverSound}
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all transform hover:scale-110 z-50 flex items-center justify-center group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          হোয়াটসঅ্যাপে চ্যাট করুন
        </span>
      </a>
    </div>
  );
}

export default App;
