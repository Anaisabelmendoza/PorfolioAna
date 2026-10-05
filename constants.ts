
import { PortfolioData } from './types';

export const DATA: PortfolioData = {
  personal: {
    name: "Ana Isabel Mendoza Jurado",
    role: "Software Developer",
    summary: "Graduada en Desarrollo de Aplicaciones Multiplataforma (DAM) con una gran pasión por crear software útil y atractivo. Disfruto tanto desarrollando aplicaciones móviles como diseñando páginas web, cuidando siempre la experiencia del usuario. Busco mi primera oportunidad laboral para seguir explorando y creciendo dentro del maravilloso y cambiante mundo de la tecnología, aportando dedicación y muchas ganas de aprender.",
    email: "anaisabelmjurado@gmail.com",
    phone: "+34 677851680",
    linkedin: "linkedin.com/in/ana-isabel-mendoza-jurado",
    github: "github.com/Anaisabelmendoza",
    
    // ⬇️ ESCRIBE AQUÍ EL NOMBRE DE TU FOTO (Ej: "perfil.jpg") ⬇️
    image: "perfil.png", 
    
    backgroundImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
  },
  experience: [
    {
      id: "exp1",
      position: "Web Developer",
      company: "Freelance",
      dates: "2024 - Presente",
      description: [
        "Diseño y desarrollo integral de un sitio corporativo.",
        "Implementación de interfaz responsive utilizando HTML, CSS.",
        "Gestión de despliegue y configuración de dominio/hosting."
      ]
    },
    {
      id: "exp2",
      position: "Estudiante en prácticas",
      company: "CodeArt",
      dates: "Enero - Febrero 2025",
      description: [
        "Participación en el desarrollo de backend utilizando PHP y framework Symfony.",
        "Gestión de paquetes y dependencias del proyecto mediante composer."
      ]
    },
    {
      id: "exp3",
      position: "Sector de la hostelería",
      company: "Varios",
      dates: "2020 - 2023",
      description: [
        "Trabajé en el sector de la hostelería durante tres años, desarrollando habilidades de atención al cliente y trabajo bajo presión."
      ]
    }
  ],
  education: [
    {
      id: "edu1",
      degree: "Grado Superior Desarrollo de Multiplataforma",
      institution: "Cesur, Linares",
      dates: "2024 - 2026"
    },
    {
      id: "edu2",
      degree: "Acceso a la Universidad para mayores de 25 años",
      institution: "UNED, Úbeda",
      dates: "2023 - 2024"
    },
    {
      id: "edu3",
      degree: "Graduado en ESO",
      institution: "IES Pedro Pablo López de los Arcos, Ibros",
      dates: ""
    }
  ],
  skills: [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 5 },
    { name: "PHP", level: 4 },
    { name: "JAVA", level: 4 },
    { name: "KOTLIN", level: 4 },
    { name: "SWIFT", level: 4 },
    { name: "SQL", level: 5 },
    { name: "WordPress", level: 4 },
    { name: "UX/UI", level: 4 },
    { name: "CIBERSEGURIDAD", level: 4 },
    { name: "TRABAJO EN EQUIPO", level: 5 }
  ],
  tools: [
    { name: "Visual Studio" },
    { name: "Android Studio" },
    { name: "IntelliJ IDEA" },
    { name: "Figma" },
    { name: "MySQL" },
    { name: "Swift Playground" },
    { name: "Xcode" },
    { name: "MySQLite" }
  ],
  certificates: [
    { name: "Certificado de Curso de Iniciación en Desarrollo con IA", year: "2025" },
    { name: "Certificado del B1 en Inglés", year: "2025" }
  ]
};
