import { DepartmentProps } from '../pages/Departement';
import {
  devDepartementData,
  designDepartementData,
  multimediaDepartementData,
  communityDepartementData,
  eventDepartementData,
  logisticsDepartementData,
} from './departementData';
import {
  designLeaders,
  devLeaders,
  communityLeaders,
  multimediaLeaders,
  eventLeaders,
  logisticsLeaders,
} from './departementLeaders';
import {
  designProjectsCompletation,
  devProjectsCompletation,
  multimediaProjectsCompletation,
  eventsProjectsCompletation,
  communityProjectsCompletation,
  logisticsProjectsCompletation,
} from './projectCompletation';

export const devDepartementInfo: DepartmentProps = {
  path: 'dev',
  name: 'Devlopment',
  leaders: devLeaders,
  projects: devProjectsCompletation,
  data: devDepartementData,
};
export const designDepartementInfo: DepartmentProps = {
  path: 'design',
  name: 'Design',
  leaders: designLeaders,
  projects: designProjectsCompletation,
  data: designDepartementData,
};
export const multimediaDepartementInfo: DepartmentProps = {
  path: 'multimedia',
  name: 'Multimedia',
  leaders: multimediaLeaders,
  projects: multimediaProjectsCompletation,
  data: multimediaDepartementData,
};
export const eventsDepartementInfo: DepartmentProps = {
  path: 'events',
  name: 'Event',
  leaders: eventLeaders,
  projects: eventsProjectsCompletation,
  data: eventDepartementData,
};
export const communityDepartementInfo: DepartmentProps = {
  path: 'community',
  name: 'Community',
  leaders: communityLeaders,
  projects: communityProjectsCompletation,
  data: communityDepartementData,
};
export const logisticsDepartementInfo: DepartmentProps = {
  path: 'logistics',
  name: 'Logistics',
  leaders: logisticsLeaders,
  projects: logisticsProjectsCompletation,
  data: logisticsDepartementData,
};

export const allDepartementInfo: DepartmentProps[] = [
  devDepartementInfo,
  designDepartementInfo,
  multimediaDepartementInfo,
  eventsDepartementInfo,
  logisticsDepartementInfo,
  communityDepartementInfo,
];
