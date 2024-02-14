class Wall extends GameObject {
    constructor(x, y, symbol, collision) {
        super(x, y, symbol,collision);
        // Additiona player-specific properties
        this.health = 100;
    }

}
