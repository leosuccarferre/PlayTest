// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wP9heSzxawTbjKEhrsKJZp
// Component: zkyzGMiVRz
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: wP9heSzxawTbjKEhrsKJZp/projectcss
import * as sty from "./PlasmicInputs.module.css"; // plasmic-import: zkyzGMiVRz/css

export const PlasmicInputs__VariantProps = new Array("active");

export const PlasmicInputs__ArgProps = new Array("children", "link");

function PlasmicInputs__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__active]: hasVariant(variants, "active", "active")
      })}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(defaultcss.all, sty.link)}
        component={Link}
        href={args.link !== undefined ? args.link : "/"}
        platform={"nextjs"}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Link",
          value: args.children,
          className: classNames(sty.slotChildren, {
            [sty.slotChildren__active]: hasVariant(variants, "active", "active")
          })
        })}
      </p.PlasmicLink>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInputs__ArgProps,
      internalVariantPropNames: PlasmicInputs__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicInputs__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputs";
  } else {
    func.displayName = `PlasmicInputs.${nodeName}`;
  }
  return func;
}

export const PlasmicInputs = Object.assign(
  // Top-level PlasmicInputs renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicInputs
    internalVariantProps: PlasmicInputs__VariantProps,
    internalArgProps: PlasmicInputs__ArgProps
  }
);

export default PlasmicInputs;
/* prettier-ignore-end */
