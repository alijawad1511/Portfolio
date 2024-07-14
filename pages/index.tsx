import AboutSection from "@/components/AboutSection";
import EmailDetail from "@/components/EmailDetail";
import ExperienceSection from "@/components/ExperienceSection";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center justify-between gap-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
        >
          <SocialLinks />
        </motion.div>
        <div className="h-[88vh] w-full mx-auto p-4">
          <HomeSection />
          <AboutSection />
          {/* Projects Section */}
          <ExperienceSection />
          {/* Contact Section */}
          {/* Footer */}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
        >
          <EmailDetail />
        </motion.div>
      </div>
    </main>
  );
}
