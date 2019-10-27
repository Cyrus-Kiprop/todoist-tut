import { useState, useEffect } from "react";
import firebase from "../firebase";

const notCollatedTaskExist = () => {};

export const useTask = selectedProject => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection(tasks)
      .where("userId", "==", "465a5f25-5d8c-45e0-85c9-e42d9e0b174f"); //fetches all the task  in the tasks collection

    unsubscribe =
      selectedProject && !notCollatedTaskExist(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment.format("DD-MM-YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;
  }, [selectedProject]);
};
