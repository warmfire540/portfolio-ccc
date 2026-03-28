'use client';

import { useMemo, useState, useEffect, useCallback } from 'react';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowTrendUp,
  faBookOpen,
  faCartShopping,
  faChartPie,
  faCreditCard,
  faEnvelope,
  faEnvelopeCircleCheck,
  faFileLines,
  faGlobe,
  faHandHoldingDollar,
  faHeadset,
  faLayerGroup,
  faLink,
  faPaperPlane,
  faReceipt,
  faShareNodes,
  faUserPlus,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  type Node,
  type Edge,
  type NodeProps,
  Handle,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

interface FlowScenario {
  title: string;
  accent: string;
  bgVariant: BackgroundVariant;
  bgColor: string;
  nodes: Node[];
  edges: Edge[];
}

function DiagramFlowNode({ data }: NodeProps) {
  const icon = data.icon as IconDefinition;
  const accent = (data.accent as string) || '#0284c7';
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        className="!w-2 !h-2 !border-0"
        style={{ background: accent }}
      />
      <div className="flex flex-col items-center gap-2 px-4 py-3">
        <div className="w-12 h-12 rounded-xl bg-white/90 dark:bg-zinc-800/90 border border-zinc-200/80 dark:border-zinc-600 shadow-md flex items-center justify-center">
          <FontAwesomeIcon
            icon={icon}
            className="w-6 h-6"
            style={{ color: accent }}
            aria-hidden
          />
        </div>
        <span className="text-[11px] font-medium text-zinc-700 dark:text-zinc-300">
          {data.label as string}
        </span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        className="!w-2 !h-2 !border-0"
        style={{ background: accent }}
      />
    </>
  );
}

const nodeTypes = { diagram: DiagramFlowNode };

function makeNodes(
  items: {
    id: string;
    label: string;
    icon: IconDefinition;
    x: number;
    y: number;
  }[],
  accent: string,
): Node[] {
  return items.map((n) => ({
    id: n.id,
    type: 'diagram',
    position: { x: n.x, y: n.y },
    data: { label: n.label, icon: n.icon, accent },
  }));
}

function makeEdges(connections: [string, string][], accent: string): Edge[] {
  return connections.map(([source, target]) => ({
    id: `${source}-${target}`,
    source,
    target,
    animated: true,
    style: { stroke: accent, strokeWidth: 2 },
  }));
}

const scenarios: FlowScenario[] = [
  {
    title: 'Lead Generation',
    accent: '#0284c7',
    bgVariant: BackgroundVariant.Dots,
    bgColor: 'var(--color-primary-200)',
    nodes: makeNodes(
      [
        { id: 'linkedin', label: 'Referrals', icon: faLink, x: 0, y: 60 },
        { id: 'website', label: 'Website', icon: faGlobe, x: 0, y: 170 },
        { id: 'crm', label: 'CRM', icon: faUsers, x: 200, y: 115 },
        { id: 'email', label: 'Follow-up', icon: faEnvelope, x: 400, y: 60 },
        {
          id: 'sale',
          label: 'New Client',
          icon: faHandHoldingDollar,
          x: 400,
          y: 170,
        },
      ],
      '#0284c7',
    ),
    edges: makeEdges(
      [
        ['linkedin', 'crm'],
        ['website', 'crm'],
        ['crm', 'email'],
        ['crm', 'sale'],
        ['email', 'sale'],
      ],
      '#0284c7',
    ),
  },
  {
    title: 'Online Orders',
    accent: '#059669',
    bgVariant: BackgroundVariant.Dots,
    bgColor: '#6ee7b7',
    nodes: makeNodes(
      [
        {
          id: 'store',
          label: 'Online Store',
          icon: faCartShopping,
          x: 0,
          y: 100,
        },
        { id: 'invoice', label: 'Auto-Invoice', icon: faReceipt, x: 180, y: 30 },
        {
          id: 'payment',
          label: 'Payment',
          icon: faCreditCard,
          x: 180,
          y: 180,
        },
        { id: 'books', label: 'Bookkeeping', icon: faBookOpen, x: 380, y: 100 },
      ],
      '#059669',
    ),
    edges: makeEdges(
      [
        ['store', 'invoice'],
        ['store', 'payment'],
        ['invoice', 'books'],
        ['payment', 'books'],
      ],
      '#059669',
    ),
  },
  {
    title: 'Client Onboarding',
    accent: '#7c3aed',
    bgVariant: BackgroundVariant.Dots,
    bgColor: '#c4b5fd',
    nodes: makeNodes(
      [
        { id: 'signup', label: 'Sign Up', icon: faUserPlus, x: 0, y: 100 },
        {
          id: 'welcome',
          label: 'Welcome Email',
          icon: faPaperPlane,
          x: 180,
          y: 30,
        },
        {
          id: 'portal',
          label: 'Client Portal',
          icon: faChartPie,
          x: 180,
          y: 180,
        },
        { id: 'support', label: 'Support', icon: faHeadset, x: 380, y: 100 },
      ],
      '#7c3aed',
    ),
    edges: makeEdges(
      [
        ['signup', 'welcome'],
        ['signup', 'portal'],
        ['welcome', 'portal'],
        ['portal', 'support'],
      ],
      '#7c3aed',
    ),
  },
  {
    title: 'Content & Marketing',
    accent: '#dc2626',
    bgVariant: BackgroundVariant.Dots,
    bgColor: '#fecaca',
    nodes: makeNodes(
      [
        { id: 'social', label: 'Social Media', icon: faShareNodes, x: 0, y: 100 },
        {
          id: 'landing',
          label: 'Landing Page',
          icon: faFileLines,
          x: 180,
          y: 30,
        },
        {
          id: 'list',
          label: 'Email List',
          icon: faEnvelopeCircleCheck,
          x: 180,
          y: 180,
        },
        {
          id: 'growth',
          label: 'Growth',
          icon: faArrowTrendUp,
          x: 380,
          y: 100,
        },
      ],
      '#dc2626',
    ),
    edges: makeEdges(
      [
        ['social', 'landing'],
        ['social', 'list'],
        ['landing', 'list'],
        ['list', 'growth'],
      ],
      '#dc2626',
    ),
  },
];

export default function HeroShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scenario = scenarios[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % scenarios.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = useCallback((i: number) => setActiveIndex(i), []);

  const flowKey = useMemo(
    () => `flow-${activeIndex}-${Date.now()}`,
    [activeIndex],
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Blueprint background */}
      <div className="absolute inset-0 bg-[#e8f0fa] dark:bg-[#0c1929]" />
      <div
        className="absolute inset-0 opacity-[0.5] dark:opacity-[0.32]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(2,132,199,0.42) 1px, transparent 1px),
            linear-gradient(90deg, rgba(2,132,199,0.42) 1px, transparent 1px),
            linear-gradient(rgba(2,132,199,0.24) 1px, transparent 1px),
            linear-gradient(90deg, rgba(2,132,199,0.24) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
        }}
      />
      {/* Soft vignette — kept light so the grid stays readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(232,240,250,0.72)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(12,25,41,0.82)_100%)]" />

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Stacked layout: copy on top, diagram below */}
        <div className="max-w-5xl mx-auto">
          {/* Copy — centered */}
          <div className="text-center mb-12">
            <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-4 tracking-wide uppercase">
              Curious Cat Consulting
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-[1.1] mb-6">
              From napkin sketch to production,{' '}
              <span className="text-primary-600 dark:text-primary-400">
                end to end.
              </span>
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Every growing business runs on invisible
              workflows; leads, orders, onboarding. We make them
              automatic and impossible to drop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-md"
              >
                Explore our services
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  className="w-4 h-4 group-hover:translate-y-px transition-transform"
                  aria-hidden
                />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary-300/50 dark:border-primary-700/50 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-lg hover:bg-white/50 dark:hover:bg-zinc-800/50 transition-colors backdrop-blur-sm"
              >
                See case studies
              </a>
            </div>
          </div>

          {/* Diagram — full width */}
          <div>
            {/* Scenario label + dots */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span
                className="text-sm font-semibold transition-colors duration-300"
                style={{ color: scenario.accent }}
              >
                {scenario.title}
              </span>
              <div className="flex gap-2">
                {scenarios.map((s, i) => (
                  <button
                    key={s.title}
                    onClick={() => handleDotClick(i)}
                    aria-label={`Show ${s.title} flow`}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      background: i === activeIndex ? s.accent : '#94a3b8',
                      transform: i === activeIndex ? 'scale(1.3)' : 'scale(1)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Flow container */}
            <div className="h-[340px] sm:h-[380px] w-full rounded-2xl overflow-hidden border border-primary-200/40 dark:border-primary-800/30 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md shadow-xl">
              <ReactFlow
                key={flowKey}
                nodes={scenario.nodes}
                edges={scenario.edges}
                nodeTypes={nodeTypes}
                fitView
                proOptions={{ hideAttribution: true }}
              >
                <Background
                  variant={scenario.bgVariant}
                  gap={20}
                  size={1}
                  className="!bg-transparent"
                  color={scenario.bgColor}
                />
              </ReactFlow>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
