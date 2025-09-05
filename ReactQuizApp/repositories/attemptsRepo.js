export const AttemptsRepo = {
  getData: () => {
    let keys = Object.keys(localStorage);
    return keys.map(key => {
      let dict = JSON.parse(localStorage.getItem(key));
      return dict;
    });
  }
};
