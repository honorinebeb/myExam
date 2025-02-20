function getMedianScore(scores) {
    const sortedScores = scores.slice().sort((a, b) => a - b);
    const mid = Math.floor(sortedScores.length / 2);
  
    if (sortedScores.length % 2 === 0) {
      return (sortedScores[mid - 1] + sortedScores[mid]) / 2;
    } else {
      return sortedScores[mid];
    }
  }