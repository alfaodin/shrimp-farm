import { WorkerModel } from './worker.model';

export interface FarmModel {
  name: string;
  direction: string;
  inUseExtension: number;
  reponsable: WorkerModel;
  availableExtension: number;

}
