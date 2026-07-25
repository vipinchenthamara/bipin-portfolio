import {
  Shield,
  Fingerprint,
  FileLock2,
  Laptop,
  BrainCircuit,
  ShieldCheck,
  KeyRound,
  Radar,
  Smartphone,
  Database,
  Users,
  Server,
  Mail,
  Rocket,
  Award,
  Lock,
  Network,
  Bot,
  type LucideIcon,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Marquee — the scrolling toolset & credentials band                         */
/* -------------------------------------------------------------------------- */

export interface MarqueeTileData {
  icon: LucideIcon;
  name: string;
  category: string;
}

// Row 1 (11 tiles) — platforms & core capabilities
export const marqueeRowOne: MarqueeTileData[] = [
  { icon: Shield, name: 'Defender XDR', category: 'Extended Detection & Response' },
  { icon: Fingerprint, name: 'Entra ID', category: 'Identity & Access' },
  { icon: Radar, name: 'Microsoft Sentinel', category: 'Cloud-native SIEM' },
  { icon: Smartphone, name: 'Intune', category: 'Unified Endpoint Mgmt' },
  { icon: FileLock2, name: 'Purview', category: 'Data Governance' },
  { icon: BrainCircuit, name: 'Security Copilot', category: 'AI SecOps' },
  { icon: ShieldCheck, name: 'Defender for Endpoint', category: 'MDE' },
  { icon: KeyRound, name: 'Conditional Access', category: 'Zero Trust Policy' },
  { icon: Network, name: 'Active Directory', category: 'Hybrid Identity' },
  { icon: Rocket, name: 'Autopilot', category: 'Zero-touch Provisioning' },
  { icon: Lock, name: 'Zero Trust', category: 'Architecture Model' },
];

// Row 2 (10 tiles) — services, certs & specialisms
export const marqueeRowTwo: MarqueeTileData[] = [
  { icon: Mail, name: 'Defender for Office 365', category: 'MDO' },
  { icon: Users, name: 'Defender for Identity', category: 'MDI' },
  { icon: Database, name: 'DLP', category: 'Data Loss Prevention' },
  { icon: FileLock2, name: 'eDiscovery', category: 'Compliance & Legal' },
  { icon: Award, name: 'SC-100', category: 'Cybersecurity Architect Expert' },
  { icon: Award, name: 'AZ-500', category: 'Azure Security Engineer' },
  { icon: Award, name: 'AZ-104', category: 'Azure Administrator' },
  { icon: Award, name: 'TOGAF 10', category: 'Enterprise Architect' },
  { icon: Bot, name: 'SOC AI Agents', category: 'MDR Practice' },
  { icon: Server, name: 'Incident Response', category: 'Breach & Recovery' },
];

/* -------------------------------------------------------------------------- */
/*  Capabilities (template "Services")                                         */
/* -------------------------------------------------------------------------- */

export interface Capability {
  number: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export const capabilities: Capability[] = [
  {
    number: '01',
    name: 'Microsoft Security',
    description:
      'Defender XDR, MDE, MDO, MDI, and Sentinel engineered end-to-end — with incident response that holds up under real breach pressure.',
    icon: Shield,
  },
  {
    number: '02',
    name: 'Identity & Zero Trust',
    description:
      'Entra ID, Active Directory, Conditional Access, and MFA architected around least-privilege access and verifiable trust boundaries.',
    icon: Fingerprint,
  },
  {
    number: '03',
    name: 'Compliance & Data',
    description:
      'Purview, DLP, sensitivity labels, and eDiscovery built to survive audit pressure and executive scrutiny — not just pass a checklist.',
    icon: FileLock2,
  },
  {
    number: '04',
    name: 'Endpoint & UEM',
    description:
      'Intune, Autopilot, Windows servicing, and macOS management delivered as zero-touch programs across tens of thousands of devices.',
    icon: Laptop,
  },
  {
    number: '05',
    name: 'AI SecOps & MDR',
    description:
      'Security Copilot and SOC AI agents woven into a modern managed detection and response practice that scales analyst capacity.',
    icon: BrainCircuit,
  },
];

/* -------------------------------------------------------------------------- */
/*  Case studies — radar cards                                                 */
/* -------------------------------------------------------------------------- */

export interface CaseStudy {
  number: string;
  category: string;
  name: string;
  description: string;
  tags: string[];
  metric: string;
  metricLabel: string;
  accent: string; // hex, drives ring / glow / label colour
}

export const caseStudies: CaseStudy[] = [
  {
    number: '01',
    category: 'Government Security Program',
    name: 'National-Scale Defender E5 Engineering',
    description:
      'Engineering ownership for a Microsoft Defender E5 rollout spanning 16,000 devices, 1,600 servers, and 10 data centres.',
    tags: ['Defender XDR', 'Entra ID P2', 'MDE P2', 'MDI', 'MDCA'],
    metric: '12.4K',
    metricLabel: 'Users Protected',
    accent: '#1BA5C8',
  },
  {
    number: '02',
    category: 'Global Migration Program',
    name: '197,000-Mailbox Exchange Modernization',
    description:
      'Architecture for a cross-forest Hybrid Exchange Online migration with identity and endpoint modernization across 12 forests.',
    tags: ['Exchange Online', 'AAD Connect', 'ADFS SSO', 'Autopilot'],
    metric: '197K',
    metricLabel: 'Mailboxes Migrated',
    accent: '#8B7CD8',
  },
  {
    number: '03',
    category: 'Endpoint Modernization',
    name: 'Intune and Autopilot at Enterprise Scale',
    description:
      'Standardized provisioning, hardening, application delivery, and lifecycle governance across multiple enterprise programs.',
    tags: ['Intune', 'Autopilot', 'Win32 / MSIX', 'macOS', 'GPO to MDM'],
    metric: '15K+',
    metricLabel: 'Devices Modernized',
    accent: '#E0A83C',
  },
  {
    number: '04',
    category: 'Security Operations Strategy',
    name: 'AI-Driven SecOps and MDR Practice',
    description:
      'Defined practice direction for AI-assisted SOC operations, Microsoft Security Copilot patterns, and managed detection offerings.',
    tags: ['Security Copilot', 'SOC Agents', 'MDR', 'Build vs Buy'],
    metric: 'AI',
    metricLabel: 'Human-Led Operations',
    accent: '#E0417B',
  },
];

/* -------------------------------------------------------------------------- */
/*  Nav                                                                        */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Case Studies', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

/* -------------------------------------------------------------------------- */
/*  Hero stat bar — grounded in real figures from LinkedIn                     */
/* -------------------------------------------------------------------------- */

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: '18', label: 'Years hands-on across Microsoft cloud & security' },
  { value: '150+', label: 'Microsoft 365 & Azure projects delivered' },
  { value: '200K+', label: 'Identities secured at enterprise scale' },
  { value: '€3M+', label: 'Presales engagements won' },
];

/* -------------------------------------------------------------------------- */
/*  Career timeline — from LinkedIn                                            */
/* -------------------------------------------------------------------------- */

export interface Role {
  title: string;
  company: string;
  period: string;
  place: string;
}

export const experience: Role[] = [
  {
    title: 'Engineering Technical Lead — Cyber Technology',
    company: 'vCyberiz',
    period: '2026 — Present',
    place: 'Cyberjaya, Malaysia',
  },
  {
    title: 'Microsoft Specialist',
    company: 'Unzer',
    period: '2025',
    place: 'Munich, Germany',
  },
  {
    title: 'Enterprise Platform Specialist',
    company: 'medmix',
    period: '2024 — 2025',
    place: 'Germany',
  },
  {
    title: 'Microsoft Cloud Architect',
    company: 'HWS Gruppe',
    period: '2022 — 2024',
    place: 'Bavaria, Germany',
  },
  {
    title: 'Microsoft Cloud Services Consultant',
    company: 'Freelance',
    period: '2020 — 2022',
    place: 'Bengaluru, India',
  },
  {
    title: 'Solution Architect',
    company: 'ITC Infotech',
    period: '2018 — 2020',
    place: 'Bangalore, India',
  },
  {
    title: 'Microsoft Technology Consultant',
    company: 'Freelance / Henson Group',
    period: '2016 — 2018',
    place: 'Bengaluru, India',
  },
];
