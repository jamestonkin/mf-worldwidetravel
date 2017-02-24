'use strict';

app.factory("GuideStorage", ($q, $http) => {

  let getGuides = () => {
    return $q((resolve, reject) => {
      let guides = [];
      $http.get('../../data/guides.json')
      .then((guideObject) => {
        let guideCollection = guideObject.data.guides;
        console.log('my guideCollection: ', guideCollection.guides );
        Object.keys(guideCollection).forEach((key) => {
          guides.push(guideCollection[key]);
        });
        resolve(guides);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  return {getGuides};
});
