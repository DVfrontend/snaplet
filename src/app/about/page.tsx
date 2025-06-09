"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="bg-gradient-to-br from-white to-gray-50 text-gray-900 min-h-screen px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl font-extrabold mb-10 border-b-4 border-black inline-block pb-2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
        >
          About me
        </motion.h1>

        <motion.div
          className="space-y-6 text-lg leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            "Hello! My name is Daniel. I'm a Frontend developer passionate about creating modern and user-friendly interfaces. I have over 2 years of practice, including learning React, TypeScript, Next.js and Tailwind CSS.",
            "I don't just like writing code, but building clear architecture, using clean approaches and creating UI that truly helps the user. I strive for deep understanding of technologies and always look for opportunities to grow.",
            "Currently I'm focusing on reaching Middle level and studying topics like Git, complex hooks in React, rendering optimization, as well as advanced work with animations and responsive design.",
            "My goal is to become a strong Frontend specialist who can be trusted with complex interfaces and be confident in the result.",
          ].map((text, index) => (
            <motion.p
              key={index}
              className="bg-white bg-opacity-60 p-4 rounded-lg shadow-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, type: "spring" }}
        >
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 inline-block pb-1">
            Tech stack
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 pl-4">
            <li>HTML, CSS, SASS, Tailwind CSS</li>
            <li>JavaScript, TypeScript</li>
            <li>React, Next.js</li>
            <li>Git, GitHub</li>
            <li>Responsive design, accessibility</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
