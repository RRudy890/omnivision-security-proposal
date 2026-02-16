
export enum SlideId {
  TITLE = 'TITLE',
  FOUNDATION = 'FOUNDATION',
  PILLARS = 'PILLARS',
  INFRASTRUCTURE = 'INFRASTRUCTURE',
  PROCESS = 'PROCESS',
  SERVICES = 'SERVICES',
  COMMERCIALS = 'COMMERCIALS',
  CONCLUSION = 'CONCLUSION'
}

export interface SlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}
