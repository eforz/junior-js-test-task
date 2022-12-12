async function fetchService(url, callback) {
    try {
      const responce = await fetch(url);
      const responceArray = await responce.json();
      callback(responceArray);
    } catch (error) {
      console.log(error);
    }
  }