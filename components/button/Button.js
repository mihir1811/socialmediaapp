import React, { memo } from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  myButton: (props) => ({
    backgroundColor: props.background || props.theme?.button?.background,
    width: props.width || props.theme?.button?.width || "100%",
    display: "block",
    borderRadius:
      props.borderRadius || props.theme?.button?.borderRadius || "5px",
    margin: props.background || props.theme?.button?.background,
    padding: props.padding || props.theme?.button?.padding,
    border: props.border || props.theme?.button?.border,
    color: props.text || props.theme?.button?.text,
    fontWeight: props.fontWeight || props.theme?.button?.fontWeight,
    fontFamily: props.fontFamily || props.theme?.button?.fontFamily,
    "&:focus, &:hover": {
      boxShadow: "none !important",
      outline: "red !important",
      backgroundColor:
        props.hoverBackground ||
        props.background ||
        props.theme?.button?.background,
      color: props.hoverText || props.text || props.theme?.button?.text,
    },
    "&:active": {
      boxShadow: "none !important",
      outline: "red !important",
    },
    "&:disabled": {
      opacity: 0.65,
      pointerEvents: "none"
    },
  }),
  myLabel: (props) => ({
    fontFamily: props.fontFamily || props.theme?.button?.fontFamily,
    fontWeight: props.fontWeight || props.theme?.button?.fontWeight,

    fontSize: props.fontSize || props.theme?.button?.fontSize,
    color: props.text || props.theme?.button?.text,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // textTransform: "capitalize",
    "&:focus, &:hover": {
      color: props.hoverText || props.text || props.theme?.button?.text,
    },
  }),
});

const Button = (props) => {
  const {
    role = "button",
    type = "button",
    cssStyles = {},
    fclassname,
    isDisabled,
    btnSpanClass,
    ...others
  } = props;
  const theme = useTheme();
  const classes = useStyles({ ...cssStyles, theme });
  return (
    <button
      disabled={isDisabled || false}
      role={role}
      type={type}
      className={`${classes.myButton} ${fclassname}`}
      {...others}
    >
      <span className={`${classes.myLabel} ${btnSpanClass}`}>{props.children}</span>  
    </button>
  );
};

export default memo(Button);
