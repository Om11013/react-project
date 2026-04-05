import React from 'react';

export interface SidebarItem {
  name: string;
  icon: React.ElementType;
  path: string;
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
