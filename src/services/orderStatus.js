import { doc, setDoc, getDocs, query, collection } from "firebase/firestore";
import { db } from "firebase-app/clientApp";

export const updateOrderStatus = async ({ title, value, color }) => {
  try {
    await setDoc(doc(db, "orderStatus", `${value}`), {
      title,
      value,
      color,
    });
    console.log("Document written with Successfully ");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getOrderStatuses = async () => {
  try {
    const orderStatuses = await getDocs(query(collection(db, "orderStatus")));
    return orderStatuses.docs.map((doc) => doc.data());
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
