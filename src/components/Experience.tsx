import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Sankhya',
      position: 'Consultor de Suporte - Dados',
      period: '2025 - Presente',
      location: 'Presencial',
      description: 'Atendimento ao cliente final com foco em suporte técnico relacionado a integrações de sistemas e correção de bugs na plataforma. Atuação na análise e resolução de problemas como lentidão no sistema, falhas em buscas no banco de dados e integração com bases de dados externas.',
      achievements: [
        'Prestou suporte técnico especializado em integrações de dados',
        'Corrigiu bugs e falhas em tempo real na plataforma',
        'Solucionou problemas críticos de performance e lentidão',
        'Atendeu clientes com diferentes níveis de complexidade e demandas',
      ],
    },
    {
      company: 'iCrop Gestão de Irrigação',
      position: 'Assistente de Tecnologia',
      period: ' jul de 2024 - fev de 2025',
      location: 'Remoto',
      description: 'Responsável pelo suporte técnico a clientes nacionais e internacionais, garantindo a continuidade dos sistemas e a resolução de falhas. Também atuei no suporte interno de TI, testes de sistemas e desenvolvimento de páginas web utilizando Node.js, JavaScript e React. Participei ativamente da análise de dados, automação de tarefas e integração com APIs de dispositivos climáticos.',
      achievements: [
        'Desenvolveu interfaces web com Node.js, JavaScript e React',
        'Automatizou processos rotineiros, como leitura de PDFs de faturas de energia',
        'Criou relatórios e dashboards estratégicos via análise de dados e banco de dados',
        'Realizou integrações com APIs de medição climática e de chuva',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-cyber-white">EXPERIÊNCIA</span>
            <span className="bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent"> PROFISSIONAL</span>
          </h2>
          <p className="text-xl font-rajdhani text-cyber-white-soft max-w-3xl mx-auto">
            Minha jornada profissional construindo soluções digitais modernas
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-cyber-primary via-cyber-secondary to-cyber-accent rounded-full" />

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                    },
                  },
                }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyber-primary rounded-full border-4 border-cyber-dark z-10 shadow-lg shadow-cyber-primary/50">
                  <motion.div
                    className="absolute inset-0 bg-cyber-primary rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <motion.div
                    className="bg-cyber-gray/40 backdrop-blur-sm border border-cyber-primary/20 rounded-3xl p-6 hover:border-cyber-primary/40 transition-all duration-300 relative overflow-hidden group hover:shadow-lg hover:shadow-cyber-primary/10"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Holographic Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyber-primary/10 via-transparent to-cyber-secondary/10"
                      animate={{
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />

                    {/* Header */}
                    <div className="relative z-10 mb-4">
                      <h3 className="text-xl font-orbitron font-bold text-cyber-white mb-2">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg font-rajdhani text-cyber-primary mb-3">
                        {exp.company}
                      </h4>
                      
                      <div className="flex flex-wrap gap-4 text-sm font-rajdhani text-cyber-white-soft">
                        <div className="flex items-center bg-cyber-dark/50 px-3 py-1 rounded-2xl">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center bg-cyber-dark/50 px-3 py-1 rounded-2xl">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-cyber-white-soft font-rajdhani mb-4 relative z-10">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="relative z-10">
                      <h5 className="text-sm font-orbitron font-semibold text-cyber-secondary mb-3">
                        Principais Conquistas:
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-sm font-rajdhani text-cyber-white-soft flex items-center"
                          >
                            <span className="w-2 h-2 bg-cyber-accent rounded-full mr-3" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};