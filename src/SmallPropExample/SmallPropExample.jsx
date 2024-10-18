import React from "react";
import { Button, ButtonSkeleton } from "@carbon/react";

function SmallPropExample() {
  return (
    <>
      <Button small>Button</Button>
      <ButtonSkeleton small></ButtonSkeleton>
    </>
  );
}

export default SmallPropExample;
