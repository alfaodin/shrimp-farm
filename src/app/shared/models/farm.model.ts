import { WorkerModel } from './worker.model';

export interface FarmModel {
  name: string;
  direction: string;
  inUseExtension: number;
  manager: WorkerModel;
  availableExtension: number;

  // Transient properties
  percentageInUseExtension: number;

}
