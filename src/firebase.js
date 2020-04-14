//added here
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "abc",
  authDomain: "book-worm-tutorial.firebaseapp.com",
  databaseURL: "https://book-worm-tutorial.firebaseio.com",
  projectId: "book-worm-tutorial",
  storageBucket: "book-worm-tutorial.appspot.com",
  messagingSenderId: "809859570043",
  appId: "1:809859570043:web:7b41746f2c348685"
};

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    this.auth = firebase.auth();
    this.db = firebase.database();
    // this.authListener = null;
  }

  createUserWithEmailAndPassword = async (email, password) => {
    return await this.auth.createUserWithEmailAndPassword(email, password);
  };

  signInWithEmailAndPassword = async (email, password) => {
    return await this.auth.signInWithEmailAndPassword(email, password);
  };

  // unsubscribe = () => {
  //   console.log("cleand up");
  //   this.authListener();
  // };

  getCurrentUser = () => {
    return new Promise(resolve => {
      //this particular method is meant to return a listener
      // how do i access that listener since i want to avoid memory leaks and unsubscribe
      this.auth.onAuthStateChanged(resolve);
    });

    // so this onAuthStateChanged will check if the user is logged into tfirebase
    // let unsubscribe = this.auth.onAuthStateChanged(user => {
    //   //return the user
    //   // i think it basically resolves the promise to give you the user

    //   if (user) {
    //     //take him to the home page
    //   } else {
    //     //user is signed out
    //     // take him to the login screen
    //   }
    // });
    // unsubscribe();
  };

  getCurrentUserData = async userId => {
    return await this.db
      .ref("users")
      .child(userId)
      .once("value");
  };

  getCurrentUserBooks = async userId => {
    const books = await this.db
      .ref("books")
      .child(userId)
      .once("value");

    const booksArray = this._snapshotToArray(books);
    return booksArray;
  };

  _snapshotToArray(snapshot) {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
    });

    return returnArr;
  }
}

export default new Firebase();
