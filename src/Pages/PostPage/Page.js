import React from "react";
import {get} from '../../services/http';

export default function loadPost(id) {
  return get("/posts/" + id);
}