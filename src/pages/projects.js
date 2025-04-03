// This file is a placeholder for the projects page.
import React, { useEffect } from "react";
import { navigate } from "gatsby";

const ProjectsPage = () => {
  useEffect(() => {
    navigate("/"); // Redirect to the home page
  }, []);

  return null; // Render nothing while redirecting
};

export default ProjectsPage;