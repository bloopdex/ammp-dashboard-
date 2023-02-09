interface EventProps {
  eventName: string,
  eventDate: string,
}
export interface ProjectCompletationProps {
  completed: number;
  incoming: number;
  incomingEvents?: EventProps[];
}
