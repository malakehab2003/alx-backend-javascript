export interface MajorCredits {
  credits: number,
  brand: 'MajorCredits',
};

export interface MinorCredits {
  credits: number,
  brand: 'MinorCredits',
};

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const credits = subject1.credits + subject2.credits;
  return { credits, brand: 'MajorCredits' };
};

export function sumMinorCredits(subject1:MinorCredits, subject2: MinorCredits): MinorCredits {
  const credits = subject1.credits + subject2.credits;
  return { credits, brand: 'MinorCredits' };
};
