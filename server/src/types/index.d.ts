export interface StoryCard {
    id: number;
    title: string;
    subtitle: string;
    frontImage: string;
    storyTime: string;
    wonderQuestions: string[];
    miniFacts: string[];
}
export interface Collection {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    coverImage: string;
    cards: StoryCard[];
}
//# sourceMappingURL=index.d.ts.map