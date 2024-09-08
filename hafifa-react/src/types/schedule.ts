export interface ScheduleDto {
  targetName: string;
  date: Date;
  comments?: string;
}

export interface Schedule extends ScheduleDto {
  id: string;
}


