import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

function handleClick(event: any) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const BreadCrumbs: React.FC = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Material-UI
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
      >
        Core
      </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>
  );
};
export default BreadCrumbs;