
// var docRef = db.collection("about").doc("MQ0YXJYoXnOxJ6xxFtoY");
//
// docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });

const value = async ()=>{
  const citiesRef = db.collection('about');
  // const snapshot = await citiesRef.where('name', '==', 'Gaurav').get();
  // if (snapshot.empty) {
  //   console.log('No matching documents.');
  //   return;
  // };
  // snapshot.forEach(doc => {
  //   console.log(doc.id, '=>', doc.data());
  // });

  const snapshot = await citiesRef.get();
  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });
}

value();


// const citiesRef = db.collection('about');
// const snapshot = await citiesRef.get();
// snapshot.forEach(doc => {
//   console.log(doc.id, '=>', doc.data());
// });
