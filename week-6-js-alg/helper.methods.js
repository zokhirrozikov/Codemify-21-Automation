export default new class Helpers {
    filterMatchesByLocationAndStatus(response) {
      const result = response.matches.filter(match => {
        return match.locationlvl1 === 'Germany' && match.status === 'canceled';
      }).map(match => match.matchId);
      return result;
    }
  
    filterMatchesByCoatingAndShower(response) {
      const result = response.matches.filter(match => {
        return match.matchInfo.coating === 'Main.artificialGrass' && match.matchInfo.isShower === true;
      }).map(match => match.matchId);
      return result;
    }
  
    filterMatchesByLocationAndPrice(response) {
      const result = response.matches.filter(match => {
        return match.locationlvl1 === 'Germany' && match.price > 0;
      }).map(match => match.matchId);
      return result;
    }
  
    filterMatchesByCreatorFeeAndStatus(response) {
      const result = response.matches.filter(match => {
        return match.creatorFeePerPlayer > 0 && match.status === 'canceled';
      }).map(match => match.matchId);
      return result;
    }
  
    filterMatchesByCoveringAndDressingRoom(response) {
      const result = response.matches.filter(match => {
        return match.matchInfo.covering === 'Main.onTheStreet' && match.matchInfo.isDressingRoom === true;
      }).map(match => match.matchId);
      return result;
    }
  }
  
  
  