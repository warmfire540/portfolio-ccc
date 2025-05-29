import { Shield } from 'lucide-react';

export const recognitions = [
  {
    title: 'Verified Business',
    description: 'Verified listing on Biz Growth Collective business directory',
    icon: <Shield className="w-8 h-8 text-green-500" />,
    badge: (
      <a
        href="https://www.bizgrowthcollective.com/united-states/brandon/technology-it-services/curious-cat-consulting?from=badge"
        title="Find me on Biz Growth Collective"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:opacity-80 transition-opacity duration-200"
      >
        <img
          src="https://www.bizgrowthcollective.com/images/a-badge-with-the-text-verified-and-stand_y5ThjIZIQ1q8bWCrI7i5Yw_2P_mwAemQyeg4NvQ3bvr3Q.png"
          alt="Verified on Biz Growth Collective"
          className="h-20 w-auto"
          style={{ border: 'none' }}
        />
      </a>
    ),
  },
];
