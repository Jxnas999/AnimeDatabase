import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CardClick() {
  let { id } = useParams();

  return <h1>This is {id}</h1>;
}
