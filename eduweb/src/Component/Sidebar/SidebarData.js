import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { CgInfinity } from "react-icons/cg";

export const SidebarData = [
  {
    title: 'Devlopment',
    path: '/',
    icon: <img src='images/development.png' alt='' width={'20px'}></img>,
    cName: 'nav-text'
  },
  {
    title: 'Cyber Security',
    path: '/reports',
    icon:  <img src='images/cyber-security (1).png' alt='' width={'20px'}></img>,
    cName: 'nav-text'
  },
  {
    title: 'Devops',
    path: '/products',
    icon:  <CgInfinity value={{ color: 'white', size: 500090 }}/>,
    cName: 'nav-text'
  },
  {
    title: 'Data Science',
    path: '/team',
    icon: <img src='images/artificial-intelligence.png' alt='' width={'20px'}></img>,
    cName: 'nav-text'
  },
  
];