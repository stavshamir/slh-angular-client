export class ListeningHistoryItem {
  constructor(
    public title: string,
    public artists: string[],
    public album: string,
    public imagePath: string,
    public playedAt: Date
  ) { }
}
