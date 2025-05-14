export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'Code' | 'Layers' | 'RefreshCw' | 'Database' | 'Cloud' | 'Shield';
  longDescription?: string;
  benefits?: string[];
  technologies?: string[];
}
