class Warrior {
    constructor() {
        this.currentLevel = 1;
        this.currentExperience = 100;
        this.currentRank = "Pushover";
        this.currentAchievements = [];
    }

    level() {
        return this.currentLevel;
    }

    experience() {
        return this.currentExperience;
    }

    rank() {
        return this.currentRank;
    }

    achievements() {
        return this.currentAchievements;
    }

    training(trainingInfo) {
        const [description, expPoints, minLevel] = trainingInfo;

        if (this.currentLevel >= minLevel) {
            this.currentExperience += expPoints;
            this.currentAchievements.push(description);
            this.updateLevelAndRank();
            return description;
        } else {
            return "Not strong enough";
        }
    }

    battle(enemyLevel) {
        if (enemyLevel < 1 || enemyLevel > 100) {
            return "Invalid level";
        }

        const levelDifference = this.currentLevel - enemyLevel;

        if (levelDifference >= 2) {
            return "Easy fight";
        } else if(levelDifference <= -5 && Math.floor(this.currentLevel/10) < Math.floor(enemyLevel/10)) {
            return `You've been defeated`

        } else if (levelDifference === 1) {
            this.currentExperience += 5;
            this.updateLevelAndRank();
            return "A good fight";
        } else if (levelDifference === 0) {
            this.currentExperience += 10;
            this.updateLevelAndRank();
            return "A good fight";

        } else {
            const expGained = 20 * levelDifference**2;
            this.currentExperience += expGained;
            this.updateLevelAndRank();
            return "An intense fight";
        }
    }

    updateLevelAndRank() {
        if (this.currentExperience < 10000) {
            this.currentLevel = Math.floor(this.currentExperience / 100);
            const rankTiers = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
            this.currentRank = rankTiers[Math.floor(this.currentLevel / 10)];
        } else {
            this.currentExperience = 10000;
            this.currentLevel = 100;
            this.currentRank = "Greatest";
        }

    }
}
