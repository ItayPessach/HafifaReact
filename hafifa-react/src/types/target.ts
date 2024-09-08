export enum TargetType {
  PARK = 'פארק בלי קליטה',
  STREET = 'רחוב בלי חנייה חינם',
  ROAD = 'כביש פקוק',
  OFFICE = 'משרד עם מזגן מקולקל',
  MARKET = 'סופר עם תורים ארוכים',
  TOILET = 'שירותים בלי נייר טואלט',
  SHEKEM = 'שקם סגור'
}

export interface TargetDto {
  name: string;
  lat: number;
  lng: number;
  targetType: TargetType;
}

export interface Target extends TargetDto {
  id: number;
  createdAt: Date;
}



