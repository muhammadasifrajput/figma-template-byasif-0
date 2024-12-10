import Header from "@/app/Components/Header";
import HeroSection from "@/app/Components/HeroSection";
import React from "react";
import Section from "@/app/Components/Section";
import TopProducts from "@/app/Components/TopProducts";
import Banner from "@/app/Components/Banner";
import Blogs from "@/app/Components/Blogs";
import Banner2 from "@/app/Components/Banner2";
import Footer from "@/app/Components/Footer";
// import Banner from '@/app/components/Banner'

const Home = () => {
  return (
    <div>
        <Header/>
      <div className="bg-[#fbebb5]">
        <HeroSection />
      </div>
      <Section />
      <TopProducts />
      <Banner />
      <Blogs />
      <Banner2 />
      <Footer />
    </div>
  );
};

export default Home;