"use client";

import { LinearProgress } from "@mui/material";

function loading() {
  return (
    <div className="main">
        <LinearProgress color="secondary" className="loader"/>
    </div>
  )
}

export default loading