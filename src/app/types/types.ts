export interface MemeCoin {
    id: string;
    name: string;
    symbol: string;
    image: string;
    tier?: 'S' | 'A' | 'B' | 'C' | 'D' | 'F';
  }