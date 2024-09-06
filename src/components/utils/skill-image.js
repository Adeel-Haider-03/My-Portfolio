
import bootstrap from '/svg/skills/bootstrap.svg';
import cplusplus from '/svg/skills/cplusplus.svg';
import css from '/svg/skills/css.svg';
import git from '/svg/skills/git.svg';
import graphql from '/svg/skills/graphql.svg';
import html from '/svg/skills/html.svg';
import java from '/svg/skills/java.svg';
import javascript from '/svg/skills/javascript.svg';
import microsoftoffice from '/svg/skills/microsoftoffice.svg';
import mongoDB from '/svg/skills/mongoDB.svg';
import mysql from '/svg/skills/mysql.svg';
import python from '/svg/skills/python.svg';
import react from '/svg/skills/react.svg';
import tailwind from '/svg/skills/tailwind.svg';
import vitejs from '/svg/skills/vitejs.svg';
import photoshop from '/svg/skills/photoshop.svg';
import canva from '/svg/skills/canva.svg'


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
   
    case 'html':
      return html;
   
    
    case 'css':
      return css;
   
    case 'javascript':
      return javascript;
   
    case 'react':
      return react;
    
    case 'bootstrap':
      return bootstrap;
   
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;

    
    case 'c++':
      return cplusplus;
   
    case 'java':
      return java;
    
    case 'python':
      return python;
   
   
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    
    case 'microsoft office':
      return microsoftoffice;

      case 'photoshop':
        return photoshop;

        case 'canva':
          return canva;
    default:
      break;
  }
}
