"use client";

import { useState } from "react";
import Image from "next/image";
import { references } from "@/data/references";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, X } from "lucide-react";

interface Project {
  _id: string;
  title: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectCard = ({ project, onClick, index }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative cursor-pointer"
    onClick={onClick}
  >
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 flex items-end p-6">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Detayları görüntülemek için tıklayın
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }: ProjectModalProps) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-900"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);

const PageHeader = () => (
  <div className="relative h-[50vh] bg-gray-900">
    <div className="absolute inset-0 bg-[url('/projects-hero.jpg')] bg-cover bg-center opacity-20" />
    <div className="relative h-full flex items-center justify-center">
      <div className="text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Projelerimiz
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-200 max-w-2xl mx-auto"
        >
          Tamamladığımız projelerden örnekler
        </motion.p>
      </div>
    </div>
  </div>
);

const ProjectsGrid = ({ projects, onProjectClick }: { projects: Project[]; onProjectClick: (project: Project) => void }) => (
  <div className="container mx-auto px-4 py-16">
    <div className="flex justify-center mb-12">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Proje ara..."
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={project._id}
          project={project}
          onClick={() => onProjectClick(project)}
          index={index}
        />
      ))}
    </div>
  </div>
);

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project>(references[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <main className="w-full bg-white">
      <PageHeader />
      <ProjectsGrid 
        projects={references} 
        onProjectClick={handleProjectClick}
      />
      <AnimatePresence>
        {isModalOpen && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </main>
  );
} 