import { useEffect, useRef } from "react";
import { getCoordinates } from "../../lib/canvas";

// Draw exercise
export const DrawCanvas = ({ canvas }) => {
  //pour savoir si on est en train de dessiner ou non
  const isDrawing = useRef(false);

  //permet de stocker la dernière coordonnée du curseur
  const lastCoordinate = useRef(null);

  //--------------------------
  //fonction déjà présente dans canvas.js
  // const getCoordinates = (event, canvas) => {
  //   const rect = canvas.getBoundingClientRect();
  //   return {
  //     x: event.clientX - rect.left,
  //     y: event.clientY - rect.top,
  //   };
  // };
  //--------------------------

  //3 fct
  //mettre isDrawing à true et mettre à jour lastCoordinate
  const startDrawing = (event) => {
    isDrawing.current = true;
    lastCoordinate.current = getCoordinates(event, canvas.current);
  };

  //mettre isDrawing à false
  const stopDrawing = () => {
    isDrawing.current = false;
    lastCoordinate.current = null;
  };

  //va dessiner un trait entre la dernière et la nvelle coordonnée, puis remplacer la dernière par la nouvelle
  const draw = (event) => {
    if (!isDrawing.current) return;
    const context = canvas.current.getContext("2d");
    const coordinate = getCoordinates(event, canvas.current);

    if (!context || !coordinate) return;

    if (lastCoordinate.current) {
      context.lineCap = "round";
      context.lineJoin = "round";
      context.beginPath();
      context.moveTo(lastCoordinate.current.x, lastCoordinate.current.y);
      context.lineTo(coordinate.x, coordinate.y);
      context.stroke();
      // console.log(mouse.x);
    }
    lastCoordinate.current = coordinate;
  };

  //pour gérer le stopDrawing
  useEffect(() => {
    const handleMouseUp = () => {
      stopDrawing();
    };
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseLeave={stopDrawing}
      onMouseUp={stopDrawing}
      width={560}
      height={315}
      ref={canvas}
      className="m-auto rounded-md bg-white shadow-md"
    />
  );
};
