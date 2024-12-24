export interface Proposal {
  id: string;
  clientName: string;
  projectName: string;
  projectType: string;
  description: string;
  location: string;
  qualityLevel: string;
  sustainable: boolean;
  startDate: Date;
  endDate: Date;
  paymentModel: string;
  paymentConditions: string;
  highlights: string;
  guarantees: string;
  createdAt: Date;
  status: string;
  generatedText: string; 
}
  