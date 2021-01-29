import { MatchData } from '../MatchData';
import { Analyzer } from '../Summary';

export class WinsAnalysis implements Analyzer {
  run(matches: MatchData[]): string {
    throw new Error('Method not implemented.');
  }
}
