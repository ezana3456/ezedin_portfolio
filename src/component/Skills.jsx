import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, 
  FaFigma, FaDatabase, FaUserTie 
} from 'react-icons/fa';
import { SiTypescript, SiRedux, SiNextdotjs, SiTailwindcss, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const skills = {
    technical: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Node.js', level: 80 },
    ],
    professional: [
      { name: 'Communication', level: 90 },
      { name: 'Team Collaboration', level: 85 },
      { name: 'Project Management', level: 80 },
      { name: 'Problem Solving', level: 95 },
      { name: 'Creativity', level: 90 },
      { name: 'Adaptability', level: 85 },
    ],
    tools: [
      { name: 'HTML5', icon: <FaHtml5 size={28} />, color: 'text-orange-500' },
      { name: 'CSS3', icon: <FaCss3Alt size={28} />, color: 'text-blue-500' },
      { name: 'JavaScript', icon: <FaJs size={28} />, color: 'text-yellow-400' },
      { name: 'React', icon: <FaReact size={28} />, color: 'text-blue-400' },
      { name: 'Redux', icon: <SiRedux size={28} />, color: 'text-purple-500' },
      { name: 'Next.js', icon: <SiNextdotjs size={28} />, color: 'text-black dark:text-white' },
      { name: 'Node.js', icon: <FaNodeJs size={28} />, color: 'text-green-500' },
      { name: 'Tailwind', icon: <SiTailwindcss size={28} />, color: 'text-cyan-400' },
      { name: 'Git', icon: <FaGitAlt size={28} />, color: 'text-orange-600' },
      { name: 'Figma', icon: <FaFigma size={28} />, color: 'text-purple-500' },
      { name: 'MongoDB', icon: <SiMongodb size={28} />, color: 'text-green-600' },
      { name: 'SQL', icon: <FaDatabase size={28} />, color: 'text-blue-600' },
    ]
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-red-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.technical.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                    <div 
                      className="bg-red-500 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Professional Skills */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Professional Skills
            </h3>
            <div className="space-y-6">
              {skills.professional.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                    <div 
                      className="bg-red-500 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Tools & Technologies */}
        <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-lg hover:shadow-md transition-all duration-300 bg-gray-50 dark:bg-gray-600"
              >
                <div className={`text-3xl mb-2 ${tool.color}`}>
                  {tool.icon}
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm text-center">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;