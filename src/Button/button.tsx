import React, { FC, Fragment } from "react";
import { ButtonProps } from "./button.types";
import Button from '@mui/material/Button';

const TMButton: FC<ButtonProps> = ({
  variant,
  fullWidth,
  size,
  children,
  disabled,
  href,
  disableElevation,
  color,
  startIcon,
  endIcon,
  onClick,
  role,
  className,
  height,
  width,
  columnGap,
  onMouseEnter,
  onMouseLeave,
  onMouseOver,
}) => {

  return (
    <Fragment>
      <Button 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
        className={className}
        variant={variant}
        fullWidth={fullWidth}
        size={size}
        disabled={disabled}
        href={href}
        disableElevation={disableElevation}
        onClick={onClick}
        color={color}
        startIcon={startIcon}
        endIcon={endIcon}
        role={role}
        sx={{
          height: {height},
          width: {width},
          textTransform: 'capitalize',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          columnGap: {columnGap}
        }}
      >
        {children}
      </Button>
    </Fragment>
  );
};

export default TMButton;
