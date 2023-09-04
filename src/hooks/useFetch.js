/* GitHub Repository - Exercise */

import { useCallback, useEffect, useReducer } from "react";
import { useIsMounted } from "./useIsMounted";

//pour refactor, on va utiliser le Hook useReducer avec un seul state: avec le custom hook useFetch:

const fetchReducer = (state, action) => {
  switch (action.type) {
    case "pending": {
      // data et error null
      return { status: "pending", data: null, error: null };
    }
    case "resolved": {
      // si resolved, error: null et on met data: action.data
      return { status: "resolved", data: action.data, error: null };
    }
    case "rejected": {
      // si error, on met data: null et error: error
      return { status: "rejected", data: null, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const useFetch = (url, config) => {
  //state pour useReducer
  const [{ status, data, error }, dispatch] = useReducer(fetchReducer, {
    status: "idle",
    data: null,
    error: null,
  });

  //unMounted
  const isMounted = useIsMounted();

  const run = useCallback(() => {
    fetch(url, config)
      .then(async (res) => {
        const json = await res.json();

        if (!isMounted) {
          return;
        }

        if (res.ok) {
          //vérifie status entre 200 et 300
          dispatch({ type: "resolved", data: json });
        } else {
          dispatch({ type: "rejected", error: json });
        }
      })
      .catch((error) => {
        if (!isMounted) {
          return;
        }
        dispatch({ type: "rejected", error: error });
      });
  }, [url, config, isMounted]);

  useEffect(() => {
    run();
  }, [run]);

  return {
    status,
    data,
    error,
    run,
    isLoading: status === "pending",
    isIdle: status === "idle",
    isResolved: status === "resolved",
    isRejected: status === "rejected",
  };
  //si j'ai envie d'update les données j'appelle ma fonction run
};
