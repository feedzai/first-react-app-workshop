/*
 * The copyright of this file belongs to Feedzai. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2022 Feedzai, Rights Reserved.
 */

/**
 * setupFirebase.js
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */
import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = fb.initializeApp({
  apiKey: "AIzaSyAblt4nKB43R9vwl4d0Fa2mmy09ebt8aPE",
  authDomain: "feedzai-react-workshop-2022.firebaseapp.com",
  projectId: "feedzai-react-workshop-2022",
  storageBucket: "feedzai-react-workshop-2022.appspot.com",
  messagingSenderId: "991015989488",
  appId: "1:991015989488:web:83c37e2ed700b42b465235",
  measurementId: "G-F34J9MZ66H",
});

const database = firebaseApp.firestore();

export default database;
