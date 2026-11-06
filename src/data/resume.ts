import type { Resume } from '../types/resume'

const resume: Resume = {
  name: 'Ricardo Hiram Morales Vaca',
  title: 'Ing. Informatico',
  photo: '/profile.jpg',
  summary:
    'Ingeniero Informático con especialidad en Tecnologías y Aplicaciones Multiplataforma. Experiencia en soporte técnico y operativo para plataformas de eCommerce de alto tráfico, como la de Telcel, y en desarrollo de software para el sector notarial. Destaco por la resolución ágil de incidencias, el análisis de logs y errores, y la continuidad operativa de servicios en línea. Desarrollo con JavaScript, React y React Native, y tengo experiencia con sistemas de tickets (Zendesk, FreshDesk) y SAP.',
  contact: {
    email: 'r.morva0009@outlook.com',
    phone: '312 137 1444',
    location: 'Colima, México',
    linkedin: 'https://www.linkedin.com/in/ricardo-hiram-morales-vaca-498a60139/',
  },
  experience: [
    {
      id: 'exp-orium',
      role: 'Analista de soporte operativo',
      company: 'Orium',
      location: 'Remoto',
      startDate: 'Oct 2024',
      endDate: 'Actualidad',
      achievements: [
        'Atiendo incidencias de usuarios mediante Zendesk y FreshDesk, dando seguimiento hasta su resolución o escalamiento oportuno.',
        'Brindo soporte a usuarios del eCommerce de Telcel, asegurando la continuidad de la operación en línea.',
        'Superviso el funcionamiento de múltiples servicios de Telcel, detectando y reportando anomalías de forma oportuna.',
        'Analizo logs en servidores Linux para identificar la causa raíz de errores en el eCommerce.',
        'Gestiono información de pagos, pedidos y servicios en SAP.',
        'Analizo inconsistencias detectadas en el front-end de Telcel.com, revisando el código involucrado para apoyar su corrección.',
        'Diseño y automatizo flujos de trabajo internos con IA, integrando Claude, Zapier, modelos de lenguaje de Google y webhooks para reducir tareas manuales y agilizar la operación del equipo.',
      ],
    },
    {
      id: 'exp-G78',
      role: 'Desarrollador de software & soporte',
      company: 'Grupo 78',
      location: 'Colima, Colima',
      startDate: 'Jun 2022',
      endDate: 'Oct 2024',
      achievements: [
        'Desarrollé y mantuve aplicaciones de software para el proceso notarial, desde el análisis de requerimientos hasta su implementación.',
        'Analicé las necesidades de los clientes y las traduje en funcionalidades concretas, gestionando bibliotecas y APIs.',
        'Responsable del mantenimiento integral de equipos de cómputo (hardware y software), garantizando su rendimiento óptimo.',
        'Brindé soporte técnico de primer y segundo nivel, incluyendo diagnóstico, reparación y reemplazo de componentes.',
        'Instalé, configuré y mantuve redes LAN/WAN, asegurando la conectividad y la seguridad de la infraestructura.',
        'Realicé formateo, instalación de sistemas operativos y eliminación de malware en equipos de escritorio y portátiles.',
      ],
    },
    {
      id: 'exp-witann',
      role: 'Analista de soporte a aplicaciones moviles',
      company: 'Witann Technologies',
      location: 'Colima, Colima',
      startDate: 'Feb 2022',
      endDate: 'Jun 2022',
      achievements: [
        'Brindé asistencia remota y presencial a usuarios con problemas en aplicaciones móviles.',
        'Elaboré documentación técnica para el equipo, agilizando la resolución de incidencias recurrentes.',
        'Apoyé en medidas de ciberseguridad para proteger aplicaciones móviles y web.',
        'Generé reportes mediante consultas en MySQL.',
      ],
    },
    {
      id: 'exp-practicas',
      role: 'Prácticas profesionales, desarrollador de software',
      company: 'Consorcio Minero Peña Colorada',
      location: 'Minatitlan, Colima',
      startDate: 'Jun 2021',
      endDate: 'Ene 2022',
      achievements: [
        'Planifiqué y organicé proyectos de TI, cuidando el cumplimiento de cronogramas y entregas.',
        'Gestioné recursos, riesgos y cronogramas hasta la finalización de los proyectos.',
        'Apliqué metodologías ágiles para dar seguimiento al avance y a los hitos de cada proyecto.',
        'Diseñé e implementé soluciones de software escalables con JavaScript, ReactJS, ExpressJS y SQL Server.',
        'Desarrollé y mantuve código limpio y eficiente, optimizando el rendimiento de las aplicaciones internas.'
      ],
    },
  ],
  education: [
    {
      id: 'edu-grado',
      degree: 'Ingeniería Informática',
      institution: 'Técnologico Nacional de México Campus Colima',
      location: 'Colima, Colima',
      startDate: '2014',
      endDate: '2018',
      description:
        'Especialidad finalizada en Tecnologías y aplicaciones multiplataforma.',
    },
  ],
  skills: [
    { name: 'Python', category: 'Habilidades técnicas', level: 'Intermedio' },
    { name: 'React & React Native', category: 'Habilidades técnicas', level: 'Intermedio' },
    { name: 'Git & GitHub', category: 'Habilidades técnicas', level: 'Intermedio' },
    { name: 'Node.js', category: 'Habilidades técnicas', level: 'Intermedio' },
    { name: 'API REST', category: 'Habilidades técnicas', level: 'Intermedio' },
    { name: 'Figma', category: 'Habilidades técnicas', level: 'Intermedio' },
    { name: 'Comunicación efectiva', category: 'Aptitudes' },
    { name: 'Trabajo en equipo', category: 'Aptitudes' },
    { name: 'Resolución de problemas', category: 'Aptitudes' },
    { name: 'Pensamiento analítico', category: 'Aptitudes' },
    { name: 'Orientación al cliente', category: 'Aptitudes' },
    { name: 'Organización y gestión del tiempo', category: 'Aptitudes' },
    { name: 'Adaptabilidad', category: 'Aptitudes' },
  ],
  languages: [
    { name: 'Inglés', level: 'B1-Intermedio' },
    { name: 'Español', level: 'Nativo' },
  ],
}

export default resume
