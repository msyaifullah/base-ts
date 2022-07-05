export interface SquareConfig {
    color?: string;
    width?: number;
}

/**
 * Business Behaviour
 */
export interface Business {
    isAcceptable(s: string): boolean;
    createSquare(config: SquareConfig): { color: string; area: number };
}
