export type HeroStat = {
  label: string;
  value: string;
};

export type MediaAsset = {
  url?: string;
  alt?: string;
  caption?: string;
};

export type ContentSection = {
  id: string;
  title: string;
  summary: string;
  points: string[];
  image?: MediaAsset;
};

export type ProjectMetric = {
  name: string;
  value: number;
  unit: string;
  verification_status: "verified" | "partially_verified" | "unverified_estimate";
  source_type: string;
  confidence_note: string;
};

export type ProjectItem = {
  id: string;
  name: string;
  location: string;
  scope: string;
  status: string;
  impact: string;
  images: { url: string; caption: string }[];
  metrics: ProjectMetric[];
};

export type KpiItem = {
  id: string;
  label: string;
  value: string;
  trend: "up" | "flat" | "down";
  verification_status: "verified" | "partially_verified" | "unverified_estimate";
  source_type: string;
  confidence_note: string;
};

export type MediaItem = {
  title: string;
  publisher: string;
  date: string;
  type: string;
};

export type QuoteItem = {
  text?: string;
  context?: string;
  date?: string;
};

export type PriorityItem = {
  id: string;
  title: string;
  description: string;
};

export type ModernizationOpportunity = {
  id: string;
  title: string;
  description: string;
  expected_benefit: string;
  priority: "high" | "medium" | "low";
};

export type ExecutiveProfile = {
  profile: {
    name: string;
    honorific: string;
    role: string;
    location: string;
    appointed_year: number;
  };
  hero: {
    headline: string;
    subheadline: string;
    positioning_line?: string;
    portrait?: MediaAsset;
    stats: HeroStat[];
  };
  sections: {
    executive_summary: ContentSection;
    biography: ContentSection;
    leadership: ContentSection & { leadership_thesis?: string; quotes?: QuoteItem[] };
    vision: ContentSection;
    contact: ContentSection & { email: string; office: string; phone?: string };
  };
  projects: ProjectItem[];
  kpis: KpiItem[];
  media_mentions: MediaItem[];
  priorities: PriorityItem[];
  modernization_opportunities: ModernizationOpportunity[];
};
