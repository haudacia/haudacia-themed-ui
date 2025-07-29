import React from "react";
import { ThemedButton } from "./ThemedButton";

export default {
  title: "Example/ThemedButton",
  component: ThemedButton,
  tags: ["autodocs"],
};

const Template = (args) => <ThemedButton {...args} />;

export const RetroCleanSmall = Template.bind({});
RetroCleanSmall.args = {
  label: "Hello",
  variant: "retroClean",
  theme: "retroClean",
  onClick: () => alert("Primary ThemedButton Clicked"),
  disabled: false,
  size: "sm",
};
export const RetroCleanSmallRounded = Template.bind({});
RetroCleanSmallRounded.args = {
  label: "Hello",
  variant: "retroClean",
  theme: "retroClean",
  onClick: () => alert("Primary ThemedButton Clicked"),
  disabled: false,
  size: "sm",
  rounded: true,
};

export const RetroCleanMedium = Template.bind({});
RetroCleanMedium.args = {
  label: "Hello",
  variant: "retroClean",
  theme: "retroClean",
  onClick: () => alert("Primary ThemedButton Clicked"),
  disabled: false,
};
export const RetroCleanMediumRounded = Template.bind({});
RetroCleanMediumRounded.args = {
  label: "Hello",
  variant: "retroClean",
  theme: "retroClean",
  onClick: () => alert("Primary ThemedButton Clicked"),
  disabled: false,
  rounded: true,
};

export const RetroCleanLarge = Template.bind({});
RetroCleanLarge.args = {
  label: "Hello",
  variant: "retroClean",
  theme: "retroClean",
  onClick: () => alert("Primary ThemedButton Clicked"),
  disabled: false,
  size: "lg",
};
export const RetroCleanLargeRounded = Template.bind({});
RetroCleanLargeRounded.args = {
  label: "Hello",
  variant: "retroClean",
  theme: "retroClean",
  onClick: () => alert("Primary ThemedButton Clicked"),
  disabled: false,
  size: "lg",
  rounded: true,
};

export const RetroGlowSmallRounded = Template.bind({});
RetroGlowSmallRounded.args = {
  label: "Hello",
  variant: "retroGlow",
  theme: "retroGlow",
  onClick: () => alert("Secondary ThemedButton Clicked"),
  disabled: false,
  size: "sm",
  rounded: true,
};

export const RetroGlowMediumRounded = Template.bind({});
RetroGlowMediumRounded.args = {
  label: "Hello",
  variant: "retroGlow",
  theme: "retroGlow",
  onClick: () => alert("Secondary ThemedButton Clicked"),
  disabled: false,
  rounded: true,
};

export const RetroGlowLargeRounded = Template.bind({});
RetroGlowLargeRounded.args = {
  label: "Hello",
  variant: "retroGlowLarge",
  theme: "retroGlow",
  onClick: () => alert("Secondary ThemedButton Clicked"),
  disabled: false,
  size: "lg",
  rounded: true,
};

// Disabled variants
